var _ = require('underscore');
// var superagent = require('superagent-cache')();
var superagent = require('superagent');

var CONTROLLERS = {
    post: require('./post.js'),
    menu: require('./menu.js')
}

module.exports = function(options){
	var self = this;
	_.each(CONTROLLERS, function(ControllerClass, controllerName){
		var c = new ControllerClass({	controllers: self,
										data: options.data,
										superagent: superagent,
										siteUrl: options.siteUrl	});
		self[controllerName] = c;
	});
}