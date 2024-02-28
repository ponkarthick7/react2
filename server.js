const http = require ("http");

const server = http.createServer((req, res)=>{

    res.writeHead(200, {"content-type": "text/plain"});


res.end("Hello, world !\n Welcome, FSDWDT-2 batch students");

});
server.listen(3000, ()=>{

    console.log("server is running at http://localhost:3000/");
});