import http from 'http';

function createServer(message = "Hello from server") {
  return http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(message);
  });
}

function startServer(server, port = 3000) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

const server = createServer("Hello from function server");
startServer(server, 3000);
//curl http://localhost:3000