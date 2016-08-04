var BaseComponent = require('../lib/baseComponent');
var Post = require('./post.jsx');
var React = require('react');

module.exports = BaseComponent.createClass({
	render: function() {
		if( !this.props.posts.size ){ return null; }
		return <div>
			{this.props.posts.map(function(post){
				return <Post key={post.get('id')} post={post} />
			})}
		</div>;
	}
});