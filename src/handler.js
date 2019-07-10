const fs = require("fs");
const path = require("path");


const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const publicHandler = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  };
  const filePath = path.join(__dirname, "..", url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>404 file not found</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      // match fun(file)
      response.end(file);
    }
  });
};
const postHandler = (request, response, url) => {
  const filePath = path.join(__dirname, "posts.json");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      const arr = JSON.parse(file);
      const textInput = url.split("/")[2];
      const decodedInput =  decodeURI(textInput);
      const matched = JSON.stringify(findMatch(arr,decodedInput));
      response.end(matched);

    }
  });
};

function findMatch(data, text) {
  var newArr = [...data];
  if (text.length !== 0 && typeof text === "string") {
    text = text.toUpperCase();
  }
  var arrayofresult = [];
  var counter = 0;
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i].title.substr(0,text.length).toUpperCase() === text) {
      arrayofresult.push(newArr[i].title);
      counter++;
      if (counter == 5) {
        break;
      }
    }
  }
  return arrayofresult;
}

module.exports = {
  homeHandler,
  publicHandler,
  postHandler
};
