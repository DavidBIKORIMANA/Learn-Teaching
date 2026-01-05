// Import the built-in 'http' module to allow Node.js to transfer data over HTTP
const http = require('http');

// Set the port: use the environment variable (for production) OR default to 3000 (for local development)
const port = process.env.PORT || 3000; 

// Define the domain name where the server lives locally
const host = 'localhost';

// Define the folder path where your HTML files are stored
const dir = './public';

// Import the 'fs' (File System) module to read files from your computer's hard drive
const fs = require('fs');

// Create the server object; it takes a callback function with Request (req) and Response (res) objects
const server = http.createServer((req, res) => {
    
    // Check the URL requested by the user. If they ask for the homepage ('/'):
    if (req.url === '/') {
        render(res, 'index.html'); // Call our helper function to send index.html
    } 
    // If the user asks for the about page:
    else if (req.url === '/about') {
        render(res, 'about.html');
    } 
    // If the user asks for the contact page:
    else if (req.url === '/contact') {
        render(res, 'contact.html');
    } 
    // If the URL doesn't match any of the above, send a 404 (Not Found) error
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }

// Tell the server to start listening for traffic on the specific port and host
}).listen(port, host, () => {
    // Print a message to the terminal so you know the server started successfully
    console.log(`Server is running at http://${host}:${port}`);
});

// Helper function to read an HTML file and send it to the browser
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