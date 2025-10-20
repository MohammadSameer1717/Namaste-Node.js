const http = require("node:http");


const Server = http.createServer(function (req, res) {
  if(req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
    res.end("Hello World!");
});

Server.listen(7777);
Server.listen("sameer");