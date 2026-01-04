const http = require('http');
const { title } = require('process');
const data = JSON.stringify({
    title: 'MEAN Stack',
    description: 'A full-stack JavaScript framework'
});
const options = {
    path: '/',
    method: 'GET',
    hostname: 'localhost',
    port: 3000,
    headers: {
        'Content-Type': 'application/json',
},
}
const request = http.get(options, res =>{
    res.on('data', chunk=>{
        process.stdout.write(chunk);
    });
});

request.on('error', error=>{
    console.error(`Error occurred: ${error.message}`);
});
request.end();