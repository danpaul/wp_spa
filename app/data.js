var _ = require('underscore');
var Immutable = require('immutable');

var callbacks = [];
var data = Immutable.fromJS({
	posts: [],
	mainMenu: {},
	urlState: null
});

var mod = {
	set: function(key, value){
		if( _.isArray(key) ){
			data = data.setIn(key, mod._coerceValue(value));
		} else {
			data = data.set(key, mod._coerceValue(value));
		}
		mod._notifyListeners();
	},
	_coerceValue: function(value){
		if( _.isArray(value) || _.isObject(value) ){
			return Immutable.fromJS(value);
		}
		return value;
	},
	getRoot: function(){ return data; },
	get: function(key){
		if( _.isArray(key) ){
			return data.getIn(key);
		} else {
			return data.get(key);
		}
	},
	subscribe: function(callback){ callbacks.push(callback); },
	_notifyListeners: function(){ _.each(callbacks, function(c){ c(); }); }
}

module.exports = mod;