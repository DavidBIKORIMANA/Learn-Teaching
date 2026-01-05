const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
        if (req.url === '/get') {
            res.end('<h1>GET Request Received</h1>');
            if (req.url === 'GET') {
                res.end('<h1>GET</h1>');
            } 
        }else if (req.url === '/put') {
            res.end('<h1>PUT Request Received</h1>');
            if (req.url === 'PUT') {
                res.end('<h1>PUT</h1>');
            } 
        }
        else if (req.url === '/delete') {
            res.end('<h1>DELETE Request Received</h1>');
            if (req.method === 'DELETE') {
                res.end('<h1>DELETE</h1>');
            }
        }
        else if (req.url === '/post') {
            res.end('<h1>POST Request Received</h1>');
            if (req.method === 'POST') {
                res.end('<h1>POST</h1>');
            }
        } else {
            res.end('<h1>Not Supported</h1>');
        }
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});