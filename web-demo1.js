var http = require('http');
var server = http.createServer(function(req,res){
  console.log(req.headers);
  res.setHeader('AppId','1234');
res.write('Welcome to http nodejs');
res.end();
});
server.listen(8084);
console.log('Server is running on port 8084');
