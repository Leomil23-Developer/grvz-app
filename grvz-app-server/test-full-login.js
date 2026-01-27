const http = require('http');
const { spawn } = require('child_process');

console.log('Starting server...');
const server = spawn('node', ['src/index.js'], { cwd: __dirname });

server.stdout.on('data', (data) => {
  console.log(data.toString());
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

setTimeout(() => {
  console.log('\n' + '='.repeat(60));
  console.log('Testing Login API with username: ImLeyy');
  console.log('='.repeat(60));
  
  const postData = JSON.stringify({
    username: 'ImLeyy',
    password: 'Leomil39'
  });

  const options = {
    hostname: 'localhost',
    port: 4000,
    path: '/auth/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`\nStatus: ${res.statusCode}`);
      
      if (res.statusCode === 200) {
        const json = JSON.parse(data);
        console.log('\n✅✅✅ LOGIN SUCCESSFUL! ✅✅✅\n');
        console.log('Access Token (first 100 chars):');
        console.log(json.access.substring(0, 100) + '...\n');
        console.log('Refresh Token (first 100 chars):');
        console.log(json.refresh.substring(0, 100) + '...\n');
      } else {
        console.log('\n❌ LOGIN FAILED\n');
        console.log('Response:', data, '\n');
      }
      
      server.kill();
      process.exit(res.statusCode === 200 ? 0 : 1);
    });
  });

  req.on('error', (err) => {
    console.error('\n❌ Request Error:', err.message, '\n');
    server.kill();
    process.exit(1);
  });

  req.write(postData);
  req.end();
}, 4000);
