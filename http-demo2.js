var http = require('http');

var server = http.createServer(function(req,res){
  console.log(req.url);
  
  if(req.url == '/'){
    res.write('welcome to page \' / \'');
    res.end();
  } else if (req.url == '/customer'){
    res.write('welcome to page /customer');
    res.end();
  } else if (req.url == '/admin'){
    res.write('welcome to page /admin');
    res.end();
  } else {
    res.write('page not found');
    res.end();
  }
});

server.listen(8084);
console.log('Server is running on port 8084');