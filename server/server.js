var express = require('express');
var fs      = require('fs');
var path = require('path');
var bodyParser = require('body-parser');


function server(){
	this.app = express();
	this.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
	this.ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
    this.configRoutesDirs = function(){ 
    	 
    	
    	 this.app.use('/content',express.static(__dirname + '/content'))
			     .use('/bower_components',express.static(__dirname + '/../bower_components'))
				 .use('/app',express.static(__dirname + '/../app'))
				 .use('/templates' , express.static(__dirname + '/templates'))
				.get('/', function(req, res) {
					
			    	res.sendFile(path.join(__dirname + '/templates/index.html'));
				});
				
		
		   
			};

	this.start = function(){
			 var port = this.port;
			 var ip = this.ip_address;		
			  this.app.listen(port, ip, function () {
				  console.log( "Listening on " + ip + ", server_port " + port);
				});
	};

	

} //




var AppServer = new server();
	AppServer.configRoutesDirs();
	AppServer.start();