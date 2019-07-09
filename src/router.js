const { homeHandler, publicHandler , postHandler} = require("./handler");
const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.split(".")[1]) {
    console.log("hello");
    publicHandler(request, response, url);
  } else if (url.includes("/search")) {
    postHandler(request, response, url);

    //  response.writeHead(200, { "Content-Type": "text/html" });
    console.log("url", url.split("/")[2]);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 not found</h1>");
  }
};
module.exports = router;
