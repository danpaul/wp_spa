var _ = require('underscore');
var BaseComponent = require('../lib/baseComponent');
var Header = require('./header.jsx');
var Menu = require('./menu.jsx');
var Post = require('./post.jsx');
var Posts = require('./posts.jsx');
var React = require('react');
var Url = require('./url.jsx');
var Immutable = require('immutable');

module.exports = BaseComponent.createClass({
	componentWillMount: function(){
		this.props.controllers.menu.loadMain();
	},
	render: function() {
		return <div className="container">
			<div className="row">
				<div className="column column-25">
					<Url urlState={this.props.data.get('urlState')} />
					<Header
						router={this.props.router}
						site={this.props.data.get('site')}
					/>
					<Menu
						router={this.props.router}
						menu={this.props.data.get('mainMenu')} />
				</div>
				<div className="column column-75">
					<Post post={this.props.data.get('page')} />
					<Post post={this.props.data.get('post')} />
					<Posts posts={this.props.data.get('posts')} />
				</div>
			</div>
		</div>;
	}
});