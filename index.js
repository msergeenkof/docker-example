const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"status": "OK"}));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found!\n');
    }
});

server.listen(8000, () => {
    console.log('Server running on port 8000');
});
