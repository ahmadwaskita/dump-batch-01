//constructor
var Account = module.exports = function(){
  console.log('constructor');
}
//method
Account.prototype.perform = function(){
  console.log('perform');
}
Account.prototype.foo = function(a,b){
  console.log('foo - ' + a + ' - ' + b);
}