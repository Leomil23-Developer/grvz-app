require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

pool.query('ALTER TABLE "Account" DROP COLUMN IF EXISTS email;')
  .then(() => {
    console.log('✅ Email column dropped successfully from Account table');
    pool.end();
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    pool.end();
    process.exit(1);
  });
