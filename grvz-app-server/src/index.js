require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../prisma/generated/prisma/client.js');
const { PrismaPg } = require('@prisma/adapter-pg');
const cookieParser = require('cookie-parser');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const app = express();

const corsOrigin = process.env.CORS_ORIGIN || (process.env.NODE_ENV === 'production' ? false : true);
if (process.env.NODE_ENV === 'production' && !process.env.CORS_ORIGIN) {
  console.warn('WARNING: CORS_ORIGIN not set — browser requests will be blocked. Set CORS_ORIGIN to your frontend origin (e.g. https://app.example.com)');
}
app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'change-me-refresh';

// Production safety checks
if (process.env.NODE_ENV === 'production') {
  if (!process.env.DATABASE_URL) {
    console.error('FATAL: DATABASE_URL is not set. Set it in your environment (Render: DATABASE_URL).');
    process.exit(1);
  }
  if (!process.env.JWT_SECRET || JWT_SECRET === 'change-me') console.warn('WARNING: JWT_SECRET is missing or using default — rotate immediately.');
  if (!process.env.JWT_REFRESH_SECRET || JWT_REFRESH_SECRET === 'change-me-refresh') console.warn('WARNING: JWT_REFRESH_SECRET is missing or using default — rotate immediately.');
}


// POST /auth/register
app.post('/auth/register', async (req, res) => {
  try {
    const { username, password, fullname, email } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Missing username or password' });

    const existing = await prisma.account.findUnique({ where: { username } });
    if (existing) return res.status(409).json({ error: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const account = await prisma.account.create({ data: { username, password: hashedPassword, fullname, email } });

    return res.status(201).json({ id: account.id, username: account.username, fullname: account.fullname, email: account.email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

app.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing username or password' });

  const user = await prisma.account.findUnique({ where: { username } });
  if (!user || !user.password) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const access = jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET, { expiresIn: '8h' });

  return res.json({ access, user: { id: user.id, username: user.username, fullname: user.fullname, email: user.email } });
});

app.post('/auth/refresh', async (req, res) => {
  const { refresh } = req.body;
  if (!refresh) return res.status(400).json({ error: 'Missing refresh token' });

  try {
    const payload = jwt.verify(refresh, JWT_REFRESH_SECRET);
    const user = await prisma.account.findUnique({ where: { id: payload.sub } });
    if (!user || !user.refreshTokenHash) return res.status(401).json({ error: 'Invalid token' });

    const valid = await bcrypt.compare(refresh, user.refreshTokenHash);
    if (!valid) return res.status(401).json({ error: 'Invalid token' });

    const access = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '15m' });
    const newRefresh = jwt.sign({ sub: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
    const newHash = await bcrypt.hash(newRefresh, 10);
    await prisma.account.update({ where: { id: user.id }, data: { refreshTokenHash: newHash } });

    return res.json({ access, refresh: newRefresh });
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

app.post('/auth/logout', async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.sendStatus(200);
  await prisma.account.update({ where: { id: userId }, data: { refreshTokenHash: null } });
  return res.sendStatus(200);
});

// GET /api/accounts - List all accounts
app.get('/api/accounts', async (req, res) => {
  try {
    const accounts = await prisma.account.findMany({
      select: {
        id: true,
        username: true,
        fullname: true,
        email: true,
        accntStatus: true,
        created_at: true,
        recruiter_id: true
      }
    });
    return res.json(accounts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/accounts/:id - Get single account by ID
app.get('/api/accounts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const account = await prisma.account.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        fullname: true,
        email: true,
        accntStatus: true,
        created_at: true,
        recruiter_id: true
      }
    });
    if (!account) return res.status(404).json({ error: 'Account not found' });
    return res.json(account);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/members/account/:accountId - Get member record by account id
app.get('/api/members/account/:accountId', async (req, res) => {
  try {
    const { accountId } = req.params;
    // return full member record (all columns) for the account
    const member = await prisma.members.findFirst({ where: { account_id: accountId } });
    if (!member) return res.status(404).json({ error: 'Member not found' });

    // return full member object (snake_case) to the client so the app can consume all columns
    return res.json(member);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// PUT /api/members/:id - Update member record by id
app.put('/api/members/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body || {};
    // restrict updates to known member fields to avoid accidental writes
    const allowed = [
      'member_type','first_name','last_name','middle_name','nick_name','email','contact_number','birthday','blood_type',
      'address_line_1','street','city_municipality','province','location','chapter','status','religion'
    ];
    const data = {};
    for (const k of allowed) if (Object.prototype.hasOwnProperty.call(updates, k)) data[k] = updates[k];

    const updated = await prisma.members.update({ where: { id }, data });
    return res.json(updated);
  } catch (err) {
    console.error('update member error', err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/attendance/total/:accountId - Get total points for an account
app.get('/api/attendance/total/:accountId', async (req, res) => {
  try {
    const { accountId } = req.params;
    const result = await prisma.attendance.aggregate({
      where: { account_id: accountId },
      _sum: { points: true }
    });
    const totalPoints = result._sum.points || 0;
    return res.json({ totalPoints });
  } catch (err) {
    console.error('get total points error', err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/members/account/:accountId/qr - Return QR image (base64) for member (requires actor auth)
const QRCode = require('qrcode');
app.get('/api/members/account/:accountId/qr', async (req, res) => {
  try {
    const { accountId } = req.params;

    const actorId = req.header('x-user-id');
    if (!actorId) return res.status(401).json({ error: 'Missing user id header' });

    // allow if actor is same as accountId or actor is admin
    if (actorId !== accountId) {
      const actorRoles = await prisma.accountRole.findMany({ where: { account_id: actorId }, include: { Role: true } });
      const actorIsAdmin = actorRoles.some(r => r.Role && typeof r.Role.role_name === 'string' && r.Role.role_name.toLowerCase() === 'admin');
      if (!actorIsAdmin) return res.status(403).json({ error: 'Forbidden' });
    }

    const member = await prisma.members.findFirst({
      where: { account_id: accountId },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        chapter: true,
        email: true,
        contact_number: true,
        member_type: true,
      }
    });
    if (!member) return res.status(404).json({ error: 'Member not found' });

    const payload = {
      id: member.id,
      firstName: member.first_name ?? '',
      lastName: member.last_name ?? '',
      chapter: member.chapter ?? '',
      email: member.email ?? '',
      contactNumber: member.contact_number ?? '',
      memberType: member.member_type ?? '',
    };

    const jsonStr = JSON.stringify(payload);
    const buffer = await QRCode.toBuffer(jsonStr, { type: 'png', width: 350 });
    const pngBase64 = buffer.toString('base64');

    return res.json({ pngBase64, payload });
  } catch (err) {
    console.error('member QR error', err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// PUT /api/accounts/:id - Update account
app.put('/api/accounts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, accntStatus } = req.body;
    
    const updateData = {};
    if (fullname !== undefined) updateData.fullname = fullname;
    if (email !== undefined) updateData.email = email;
    if (accntStatus !== undefined) updateData.accntStatus = accntStatus;

    const account = await prisma.account.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        username: true,
        fullname: true,
        email: true,
        accntStatus: true,
        created_at: true
      }
    });
    return res.json(account);
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') return res.status(404).json({ error: 'Account not found' });
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// DELETE /api/accounts/:id - Delete account
app.delete('/api/accounts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.account.delete({ where: { id } });
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') return res.status(404).json({ error: 'Account not found' });
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/events - List all events (include host chapter name)
app.get('/api/events', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { event_date: 'desc' },
      select: {
        id: true,
        name: true,
        event_date: true,
        hosted_by: true,
        address: true,
        Chapters: { select: { chapter_name: true } },
        _count: { select: { Attendance: true } }
      }
    });
    return res.json(events);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// GET /api/accounts/:id/isAdmin - Returns whether the account has the 'admin' role (case-insensitive)
app.get('/api/accounts/:id/isAdmin', async (req, res) => {
  try {
    const { id } = req.params;
    const roles = await prisma.accountRole.findMany({ where: { account_id: id }, include: { Role: true } });
    const roleNames = roles.map(r => r.Role?.role_name);
    console.log('isAdmin check for id=%s roles=%o', id, roleNames);
    const isAdmin = roles.some(r => r.Role && typeof r.Role.role_name === 'string' && r.Role.role_name.toLowerCase() === 'admin');
    return res.json({ isAdmin });
  } catch (err) {
    console.error('isAdmin check error', err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

// POST /api/events/:eventId/attendance - Record attendance from scanned QR payload
app.post('/api/events/:eventId/attendance', async (req, res) => {
  try {
    const { eventId } = req.params;
    const payload = req.body || {};

    console.log('Attendance attempt for eventId=%s payload=%o', eventId, payload);

    // Require actor header to identify who is performing the scan
    const actorId = req.header('x-user-id');
    if (!actorId) return res.status(401).json({ error: 'Missing user id header' });

    // Check actor is admin (case-insensitive) and log roles for debugging
    const actorRoles = await prisma.accountRole.findMany({ where: { account_id: actorId }, include: { Role: true } });
    const actorRoleNames = actorRoles.map(r => r.Role?.role_name);
    console.log('Actor %s roles: %o', actorId, actorRoleNames);
    const actorIsAdmin = actorRoles.some(r => r.Role && typeof r.Role.role_name === 'string' && r.Role.role_name.toLowerCase() === 'admin');
    if (!actorIsAdmin) {
      console.warn('Actor is not admin:', actorId, 'roles=', actorRoleNames);
      return res.status(403).json({ error: 'Forbidden: admin role required' });
    }

    const ev = await prisma.event.findUnique({ where: { id: Number(eventId) } });
    if (!ev) {
      console.warn('Event not found:', eventId);
      return res.status(404).json({ error: 'Event not found' });
    }

    // Disallow scanning attendance for events that ended more than 1 day ago
    if (ev.event_date) {
      const eventTs = new Date(ev.event_date).getTime();
      const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
      if (eventTs < cutoff) {
        console.warn('Attempt to record attendance for past event:', eventId, 'event_date=', ev.event_date);
        return res.status(403).json({ error: 'Event closed for attendance (ended more than 1 day ago)' });
      }
    }

    // Expect scanned payload to contain an id field (member id / account id)
    const scannedId = String(payload.id ?? payload.account_id ?? '').trim();
    if (!scannedId) {
      console.warn('Missing scanned id in payload');
      return res.status(400).json({ error: 'Scanned account id required' });
    }

    // Determine points based on event type
    const eventType = (ev.event_type ?? '').toString();
    function pointsForEventType(type) {
      switch (type) {
        case 'Yamaha Event': return 2;
        case 'Round Up': return 3;
        case 'Official Rides': return 4;
        case 'Charity': return 4;
        case 'Loop Rides': return 5;
        default: return 0;
      }
    }

    const points = typeof payload.points === 'number' ? payload.points : pointsForEventType(eventType);

    // Prepare account fields (support multiple possible QR field names)
    const first = payload.firstname ?? payload.firstName ?? '';
    const last = payload.lastname ?? payload.lastName ?? '';
    const fullname = [first, last].filter(Boolean).join(' ').trim();
    const email = payload.email ?? payload.Email ?? null;
    const username = email ? email.split('@')[0] : scannedId;

    // Hash a random password for created accounts
    const randPwd = Math.random().toString(36).slice(2);
    let hashed;
    try { hashed = await bcrypt.hash(randPwd, 12); } catch (e) { console.error('bcrypt.hash failed', e); hashed = randPwd; }

    console.log('Finding/creating account: id=%s email=%s fullname=%s', scannedId, email, fullname);

    // Try to find existing account by id first, then by email
    let account = await prisma.account.findUnique({ where: { id: scannedId } });
    if (!account && email) {
      account = await prisma.account.findFirst({ where: { email } });
    }

    if (account) {
      // Update minimal fields if provided
      account = await prisma.account.update({ where: { id: account.id }, data: { fullname: fullname || undefined, email: email || undefined } });
      console.log('Found existing account, using id=%s', account.id);
    } else {
      // Create a new account; handle possible unique constraint on email gracefully
      try {
        account = await prisma.account.create({ data: { id: scannedId, username, password: hashed, fullname: fullname || email || 'Unknown', email: email || undefined } });
        console.log('Created new account id=%s', account.id);
      } catch (err) {
        // If creation fails due to email uniqueness (race), try to find by email and use that account instead
        if (err?.code === 'P2002' && email) {
          console.warn('Unique constraint on create (likely email). Attempting to resolve by finding account by email. Error:', err.message);
          const byEmail = await prisma.account.findFirst({ where: { email } });
          if (byEmail) {
            account = byEmail;
            console.log('Resolved account by email; using id=%s', account.id);
          } else {
            throw err; // rethrow if we can't resolve
          }
        } else {
          throw err;
        }
      }
    }

    // Prevent duplicate attendance (unique compound constraint event_id + account_id)
    const existing = await prisma.attendance.findFirst({ where: { event_id: Number(eventId), account_id: account.id } });
    if (existing) {
      console.warn('Duplicate attendance for account=%s event=%s', account.id, eventId);
      return res.status(409).json({ error: 'Attendance already recorded', attendance: existing });
    }

    const attendance = await prisma.attendance.create({ data: { event_id: Number(eventId), account_id: account.id, points } });

    console.log('Attendance recorded:', attendance.id, 'points=', points);

    return res.status(201).json({ attendance, points });
  } catch (err) {
    console.error('attendance handler error:', err && err.message, err && err.stack);
    return res.status(500).json({ error: 'internal_server_error', detail: err && err.message });
  }
});

// GET /api/accounts/:accountId/points - Sum attendance points for an account
app.get('/api/accounts/:accountId/points', async (req, res) => {
  try {
    const { accountId } = req.params;
    const agg = await prisma.attendance.aggregate({
      _sum: { points: true },
      where: { account_id: accountId }
    });

    const points = agg._sum?.points ?? 0;
    return res.json({ points });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'internal_server_error' });
  }
});

const port = parseInt(process.env.PORT || '4000', 10);
const host = process.env.HOST || '0.0.0.0';
app.get('/_health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' }));
app.listen(port, host, () => {
  console.log(`GRVZ API running on http://${host}:${port} (NODE_ENV=${process.env.NODE_ENV || 'development'})`);
});
