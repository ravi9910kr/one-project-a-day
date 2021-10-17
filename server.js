// import necessary node modules
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

// the server app

const contextHandeler = (ext) => {
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
      return "image/jpg";
    case ".ico":
      return "image/vnd.microsoft.ico";

    default:
      break;
  }
};

const handleRequest = (req, res) => {
  const subDir = req.url === "/" || req.url === "/favicon.ico" ? "public" : "";
  const filePath = path.join(
    __dirname,
    subDir,
    req.url === "/" ? "index.html" : req.url
  );
  const extName = path.extname(filePath);
  let contentType = contextHandeler(extName);
  // console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) console.log(err);
    res.writeHeader(200, { "Content-Type": contentType });
    res.end(content);
  });
};

const handleError = (error) => {
  if (error) console.log(`something went wrong ${error}`);
  else console.log(`Yo The Server Is Running at port ${PORT}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, handleError);
