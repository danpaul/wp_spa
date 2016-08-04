var _ = require('underscore');
module.exports = function(options){

    var controllers = options.controllers;
    var data = options.data;
    var superagent = options.superagent;

    var DEFAULT_STATE = {view: 'home'};

    this.setParamsFromUrl = function(){
    	data.set('urlState', this.parseParams());
    }

    this.parseParams = function(){
	    var match;
	    var pl     = /\+/g;  // Regex for replacing addition symbol with a space
	    var search = /([^&=]+)=?([^&]*)/g;
	    var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
	    var query  = window.location.search.substring(1);
	    var urlState = _.clone(DEFAULT_STATE);
	    while(match = search.exec(query)){
	       urlState[decode(match[1])] = decode(match[2]);
	    }
	    return urlState;
    }
}