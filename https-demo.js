var https = require('https');
var fs = require('fs');
var options = {
key:fs.readFileSync('myserver.key'),
cert: fs.readFileSync('myserver.crt'),
passphrase:'node'
};
var server = https.createServer(options, function(req,res){
res.write('welcome to https nodejs');
res.end();
});
server.listen(8084);
console.log('server is running on port 8084');
