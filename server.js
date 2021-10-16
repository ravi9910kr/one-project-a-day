// import necessary node modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const { writer } = require("repl");

const PORT = process.env.PORT || 3000;

// the server app

const handleRequest = (req, res) => {
  // make a filePathe variable 
  // console.log(req.url);
  const subDir = (req.url === '/' || req.url === "/favicon.ico") ? "public":"";
  const filePath = path.join(__dirname, subDir, req.url === '/' ? 'index.html' : req.url);
  // console.log(filePath);
  fs.readFile(filePath, (err, content)=>{
    if(err) console.log(err); ;
    res.end(content);
  });
};

const handleError = (error) => {
  if (error) console.log(`something went wrong ${error}`);
  else console.log(`Yo The Server Is Running at port ${PORT}`);
};

const server = http.createServer(handleRequest);
server.listen(PORT, handleError);
