const bcrypt = require('bcrypt');

const password = 'Leomil39';

bcrypt.hash(password, 12).then(hash => {
  console.log('\n=== PASSWORD HASH GENERATED ===\n');
  console.log('Original Password:', password);
  console.log('\nHashed Password (copy this):');
  console.log(hash);
  console.log('\n=== INSTRUCTIONS ===');
  console.log('1. Go to your Neon Database console');
  console.log('2. Find the Account with username "ImLeyy"');
  console.log('3. Update the passwordHash field with the hash above');
  console.log('4. Save and test login again\n');
}).catch(err => {
  console.error('Error:', err);
});
