var EventEmitter  = require('events').EventEmitter;
var myEmitter = new EventEmitter;

var connection = function(id){
  console.log('client id: ' + id);
};

myEmitter.on('connection',connection);
myEmitter.on('message',function(msg){
  console.log('message: ' + msg);
});

myEmitter.emit('connection',5);
myEmitter.emit('connection',8);
myEmitter.emit('message','first message');
myEmitter.emit('message','second message');