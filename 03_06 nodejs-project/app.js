const http  = require('http')

const server = http.createServer(function(req, res) {
  if(req.url == '/') {
    res.write('hello world');
    res.end();
  }
  if(req.url == '/numbers') {
    res.write(JSON.stringify([1,2,3,4]));
    res.end();
  }
})

server.listen(3000);
console.log("server running on port 3000...")