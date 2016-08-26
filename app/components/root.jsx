var _ = require('underscore');
var BaseComponent = require('../lib/baseComponent');
var Header = require('./header.jsx');
var Loading = require('./loading.jsx');
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
					{this.props.data.get('loading') ? <Loading /> : null}
					<Post
						isPage={true}
						router={this.props.router}
						post={this.props.data.get('page')}
						contactForm={this.props.data.get('contactForm')}
						controllers={this.props.controllers} />
					<Post
						router={this.props.router}
						post={this.props.data.get('post')} />
					<Posts
						router={this.props.router}
						perPage={this.props.data.get('perPage')}
						currentPage={this.props.data.get('currentPage')}
						posts={this.props.data.get('posts')} />
				</div>
			</div>
		</div>;
	}
});