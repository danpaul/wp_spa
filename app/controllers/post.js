var _ = require('underscore');
module.exports = function(options){

    var controllers = options.controllers;
    var data = options.data;
    var superagent = options.superagent;
    var siteUrl = options.siteUrl;

    this.load = function(){
    	var uri = siteUrl + '/wp-json/wp/v2/posts';
		superagent
	  		.get(uri)
	  		.end(function (err, response){
	  			if( err ){ return console.log(err); }
	  			if( response.body && _.isArray(response.body) ){
	  				data.set('posts', response.body);
	  			}	  			
	  		}
		);
    }
}