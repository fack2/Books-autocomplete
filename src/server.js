const http = require("http");
const port = process.env.port;
const router = require("./router");

const server = http.createServer(router);

server.listen(port);
console.log(`server up on port localhost:${port}`);
