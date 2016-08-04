var _ = require('underscore');
module.exports = function(options){

    var controllers = options.controllers;
    var data = options.data;
    var superagent = options.superagent;
    var siteUrl = options.siteUrl;

    this.load = function(options){
    	var query = { rest_route: '/wp/v2/posts' };
    	if( options.category ){
    		query.categories = [options.category];
    	}
		superagent
	  		.get(siteUrl)
	  		.query(query)
	  		.end(function (err, response){
	  			if( err ){ return console.log(err); }
	  			if( response.body && _.isArray(response.body) ){
	  				data.set('posts', response.body);
	  			}
	  		}
		);
    }
}