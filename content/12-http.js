//req : incoming request from the web  server
//res : sending back a response to the web server
//port numbers cant be less than 2 number and more than 4 numbers
// cant use port 8080 and 
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`
<h1>oops!</h1>
<p>we cant find the page </p>
<a href= "/"> back home </a>
`);
  }
});

server.listen(3000);
