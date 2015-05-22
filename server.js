var express = require('express');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.use(express.Router()); 
app.use('/', express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
 	//app.use(errorhandler());
}

app.use(function(req, res, next){
	res.status(404);
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(app.get('port'), function(){
 	console.log('Express server listening on port ' + app.get('port'));
});
