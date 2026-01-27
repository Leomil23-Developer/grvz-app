Deploying grvz-app-server to Render (recommended checklist)

1) Create a new Service on Render
   - Environment: "Web Service"
   - Region: pick closest to your users
   - Branch: main (or whichever branch you use)

2) Environment variables (Render dashboard)
   - DATABASE_URL -> your Postgres connection string
   - JWT_SECRET -> long random string
   - JWT_REFRESH_SECRET -> long random string
   - CORS_ORIGIN -> https://your-frontend-domain.com
   - PORT -> leave empty (Render sets it automatically)

3) Build & Start commands
   - Build command: npm ci
   - Start command: npm run start
   - (Render will run `npm run postinstall` after install; Prisma client will be generated automatically)

4) Migrations
   - For zero-downtime: run locally and `prisma migrate deploy` in CI or use Render's "Run Command" to execute:
       npx prisma migrate deploy --schema=prisma/schema.prisma

5) Health check
   - Set health check to `/_health` (GET)

6) After deploy
   - Verify logs: look for `GRVZ API running on http://0.0.0.0:PORT`
   - Test endpoints from your production app origin; ensure CORS_ORIGIN matches.

Emergency (if .env was committed)
 - Rotate DATABASE_URL credentials and JWT secrets immediately.
 - Remove `.env` from the repo and rewrite history if necessary (see README).

Helpful commands
 - Generate client: npx prisma generate
 - Run migrations: npx prisma migrate deploy
 - Open Prisma studio locally: npx prisma studio
