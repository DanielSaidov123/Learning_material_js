import http from 'http';

// פונקציה שמייצרת את השרת
function createServer() {
  return http.createServer((req, res) => {
    // בדיקה של נתיב וסוג הבקשה
    if (req.url === "/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify([{ id: 1, name: "Daniel" }, { id: 2, name: "Alice" }]));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });
}

// פונקציה שמפעילה את השרת
function startServer(server, port = 3000) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// שימוש
const server = createServer();
startServer(server, 3000);


//curl http://localhost:3000/users