var fs = require('fs');
var options = {
key:fs.readFileSync('myserver.key'),
cert:fs.readFileSync('myserver.crt'),
passphrase:'node'
};
var https = require('https');
var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send('hello https express');
});
var server = https.createServer(options, app);
server.listen(8084);
console.log('server is running on port 8084');
