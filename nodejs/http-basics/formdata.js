const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  //GET, POST, DELETE , PUT , PATCH

  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert buffer to string , ascii -> str
    });

    //end event trigerred when all data received
    req.on("end", () => {
      console.log(JSON.parse(body));

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, message: "Account created" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Not Found" }));
  }
});

server.listen(8001, () => {
  console.log("server at port 8001");
});
