var n=3;
var b=0;

try{
  var c = n/b;
  if(c==Infinity)
    throw new Error();
} catch (err){
  console.log(err);
}