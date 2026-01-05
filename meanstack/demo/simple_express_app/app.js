const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const host = 'localhost';
const dir = './public';
const fs = require('fs');


    app.get('/', (req, res) => {
        render(res, 'index.html');
    });

    app.get('/about', (req, res) => {
        render(res, 'about.html');
    });
    app.get('/contact', (req, res) => {
        render(res, 'contact.html');
    });

    app.listen(port, host, () => {
        console.log(`Server is running at http://${host}:${port}`);
    });

const render = (res, file) => {
    // Read the file from the directory (e.g., './public/index.html')
    fs.readFile(dir + '/' + file, (err, data) => {
        // If the file is missing or there's a disk error, send a 404
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        } else {
            // If successful, send a 200 (OK) status and the file content (data)
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}
    