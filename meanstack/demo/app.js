const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.method === 'GET') {
        res.end('<h1>GET</h1>');
    } else if (req.method === 'PUT') {
        res.end('<h1>PUT</h1>');
    } else if (req.method === 'DELETE') {
        res.end('<h1>DELETE</h1>');
    } else if (req.method === 'POST') {
        res.end('<h1>POST</h1>');
    } else {
        res.end('<h1>Method Not Supported</h1>');
    }
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
