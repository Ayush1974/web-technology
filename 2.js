const http=require("http");
const fs=require("fs");

const hostname='127.0.0.1';
const port=200;
const server=http.createServer(hostname, port,(req,res) => {
   res.statusCode = 200;
   console.log(req.url);
    res.writeHead(200);
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World");
});
server.listen(port,hostname,() => {
    console.log("Server listening on http://${hostname}:${port}/");
});