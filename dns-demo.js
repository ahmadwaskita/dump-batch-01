var dns = require('dns');
dns.resolve4('www.pecollege.net', function(err,addresses){
	if(err)
		console.log(err);
	console.log('resolve4 addresses: ' + JSON.stringify(addresses));
});

dns.lookup('www.pecollege.net', function(err,address,family){
	if(err)
		console.log(err);
	console.log('lookup addresses: ' + JSON.stringify(address));
	console.log('family: ' + JSON.stringify(family));
})