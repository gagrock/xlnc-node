
require.config({
     baseUrl: 'app',
     waitSeconds: 200,
	paths:{

		'jquery': '../bower_components/jquery/dist/jquery',
		'jquery-hammerjs': '../bower_components/jquery-hammerjs/jquery.hammer',
		'js-url': '../bower_components/js-url/url',
		'jquery-migrate' : '/app/vendor/jquery-migrate',
		'materialize' : '../bower_components/materialize/dist/js/materialize.min',
		 'velocity': '../bower_components/materialize/js/velocity.min',
    	'hammerjs': '../bower_components/materialize/js/hammer.min'

	},

	shim: {

		'jquery': {
            exports: '$',
            deps :['js-url']    
        },
        'jquery-migrate' :{
        	deps :['jquery']
        },
		'velocity' : {
            deps :['jquery']
        },
		'materialize' : {
			deps :['jquery-migrate','hammerjs','jquery-hammerjs']
		}
		
        
	}
});

require(['modules/core/app'],function(){
    console.log('app start..');
});