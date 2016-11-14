
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
app = express();

//attach middleware
app.use(bodyParser.json());


//add some static modules

app.use('/content',express.static(__dirname + '/content'));
app.use('/bower_components',express.static(__dirname + '/../bower_components'));
app.use('/app',express.static(__dirname + '/../app'));
app.use('/templates' , express.static(__dirname + '/templates'));

app.get('/', function(req, res) {					
    	res.sendFile(path.join(__dirname + '/templates/index.html'));
	});


var server = app.listen(process.env.PORT || 8080 , function(){
	console.log('Application started  at port 8080__');
});