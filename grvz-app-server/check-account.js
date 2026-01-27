require('dotenv').config();
const { PrismaClient } = require('./prisma/generated/prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function checkAccount() {
  try {
    const account = await prisma.account.findUnique({ 
      where: { username: 'ImLeyy' }
    });
    
    console.log('\n=== ACCOUNT DATA FROM DATABASE ===\n');
    if (account) {
      console.log('Full account object:');
      console.log(JSON.stringify(account, null, 2));
    } else {
      console.log('❌ Account not found');
    }
    console.log('\n');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkAccount();
