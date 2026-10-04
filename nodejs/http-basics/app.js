const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Server");
});

server.listen(8000, () => {
  console.log("server at port 8000");
});
