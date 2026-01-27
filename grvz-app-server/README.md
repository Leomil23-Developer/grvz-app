GRVZ API (minimal auth)

Quick start

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, `JWT_SECRET`, and `JWT_REFRESH_SECRET`.
2. Install dependencies:
   npm install
3. Generate Prisma client:
   npx prisma generate
   If you already have a DB schema, run `npx prisma db pull` to introspect.
4. Start the server in dev:
   npm run dev

Endpoints
- POST /auth/login  -> { username, password }  returns { access, refresh }
- POST /auth/refresh -> { refresh }  returns { access, refresh }
- POST /auth/logout  -> { userId }  clears refresh token for user

Notes
- Passwords are verified using bcrypt assuming the `passwordHash` column contains bcrypt hashes.
- Refresh tokens are hashed with bcrypt and stored in `account.refreshTokenHash` for rotation & revocation.
- For production, use strong env secrets, TLS, and set a strict CORS origin.  Consider storing refresh tokens in httpOnly cookies for web clients; mobile clients should store tokens in secure storage and use short-lived access tokens and refresh flows.

## Deploying to Render (quick)
See `DEPLOY_RENDER.md` for a step-by-step checklist. In short:
1) Add `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, and `CORS_ORIGIN` in Render's dashboard.
2) Ensure `npx prisma migrate deploy` is run before or during the first deploy.
3) Configure health check to `/_health` and verify logs after deploy.

**IMPORTANT:** If a `.env` with secrets was committed, rotate credentials immediately and remove the file from the repository (do not commit `.env`).
