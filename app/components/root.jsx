var _ = require('underscore');
var BaseComponent = require('../lib/baseComponent');
var React = require('react');
var Menu = require('./menu.jsx');
var Posts = require('./posts.jsx');
var Url = require('./url.jsx');
var Immutable = require('immutable');

module.exports = BaseComponent.createClass({
	componentWillMount: function(){
		this.props.controllers.menu.loadMain();
	},
	render: function() {
		return <div>
			<Url urlState={this.props.data.get('urlState')} />
			<Menu menu={this.props.data.get('mainMenu')} />
			<Posts posts={this.props.data.get('posts')} />
		</div>;
	}
});