var _ = require('underscore');
var Immutable = require('immutable');

var callbacks = [];
var data = Immutable.fromJS({
	posts: []
});

var mod = {
	set: function(key, value){
		if( _.isArray(value) || _.isObject(value) ){
			data = data.set(key, Immutable.fromJS(value));
		} else {
			data = data.set(key, value);
		}
		mod._notifyListeners();
	},
	setIn: function(keys, value){
		mod._notifyListeners();	
	},
	get: function(){
		return data;
	},
	subscribe: function(callback){
		callbacks.push(callback);
	},
	_notifyListeners: function(){
		_.each(callbacks, function(c){ c(data); });
	}
}

module.exports = mod;