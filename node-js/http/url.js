const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home");
  } else if (req.url === "/api/user") {
    const obj = {
      name: "Maruti",
      age: "15",
    };
    const data = JSON.stringify(obj);
    console.log(data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
});

server.listen(8001, () => {
  console.log("server at port 8001");
});
