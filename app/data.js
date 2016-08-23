var _ = require('underscore');
var config = require('./config');
var Immutable = require('immutable');

var callbacks = [];

var initialState = {
	currentPage: null,
	perPage: 10,
	page: {},
	post: {},
	posts: [],
	mainMenu: {},
	loading: true,
	site: {},
	urlState: null
};
// data that should be cleared when view changes
var viewData = ['page', 'post', 'posts'];
var data = Immutable.fromJS(initialState);

var history = null;
if( config.recordHistory ){
	history = Immutable.List().push(data);
}

var mod = {
	set: function(key, value){
		if( _.isArray(key) ){
			data = data.setIn(key, mod._coerceValue(value));
		} else {
			data = data.set(key, mod._coerceValue(value));
		}
		if( history ){ history = history.push(data); }
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
	_notifyListeners: function(){ _.each(callbacks, function(c){ c(); }); },
	startTransition: function(){
		_.each(viewData, function(vd){
			if( _.isObject(initialState[vd]) ){
				mod.set(vd, {});
			} else if( _.isArray(initialState[vd]) ) {
				mod.set(vd, []);
			}
		});
		mod.set('loading', true);
	},
	endTransition: function(){
		mod.set('loading', false);
	}
}

module.exports = mod;