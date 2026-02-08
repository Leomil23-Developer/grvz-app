require('dotenv').config();
const { PrismaClient } = require('./prisma/generated/prisma/client.js');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function checkAttendance() {
  try {
    // Get all attendance records
    const allAttendance = await prisma.attendance.findMany({
      include: {
        Account: { select: { id: true, username: true, fullname: true } },
        Event: { select: { id: true, name: true } }
      }
    });

    console.log('\n📊 All Attendance Records:');
    console.log('Total records:', allAttendance.length);
    console.log('---');

    allAttendance.forEach(att => {
      console.log(`ID: ${att.id}`);
      console.log(`  Account: ${att.Account?.username || att.account_id} (${att.account_id})`);
      console.log(`  Event: ${att.Event?.name || att.event_id}`);
      console.log(`  Points: ${att.points}`);
      console.log(`  Created: ${att.created_at}`);
      console.log('---');
    });

    // Calculate total points per account
    console.log('\n💯 Points Summary by Account:');
    const pointsByAccount = {};
    allAttendance.forEach(att => {
      if (!pointsByAccount[att.account_id]) {
        pointsByAccount[att.account_id] = {
          username: att.Account?.username || 'Unknown',
          fullname: att.Account?.fullname || 'Unknown',
          total: 0,
          count: 0
        };
      }
      pointsByAccount[att.account_id].total += att.points || 0;
      pointsByAccount[att.account_id].count += 1;
    });

    Object.entries(pointsByAccount).forEach(([accountId, data]) => {
      console.log(`${data.username} (${data.fullname}):`);
      console.log(`  Account ID: ${accountId}`);
      console.log(`  Attendance Count: ${data.count}`);
      console.log(`  Total Points: ${data.total}`);
      console.log('---');
    });

    await prisma.$disconnect();
  } catch (error) {
    console.error('Error:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

checkAttendance();
