const bcrypt = require('bcrypt');

const password = 'Leomil39';
const storedHash = '$2b$12$NObm4phl275u2vRPlgzfz.qid94EP9/vov4UCq6SP/qx83wsctyWi';

bcrypt.compare(password, storedHash).then(match => {
  console.log('\n=== PASSWORD VERIFICATION ===\n');
  console.log('Password:', password);
  console.log('Stored Hash:', storedHash);
  console.log('\nMatch:', match ? '✅ YES - Hash is correct' : '❌ NO - Hash does not match');
  
  if (!match) {
    console.log('\nThe hash in your database is for a DIFFERENT password.');
    console.log('Either the password changed, or this hash was generated from something else.\n');
  }
}).catch(err => {
  console.error('Error:', err);
});
