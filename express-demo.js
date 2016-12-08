var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send('hello to express.js');
});
app.listen(8084);
console.log('server is running on port 8084');
