var _ = require('underscore');
var React = require('react');
var Post = require('./post.jsx');
var Immutable = require('immutable');

module.exports = React.createClass({
	componentDidMount: function(){
		this.props.controllers.post.load();
	},
	render: function() {
		var postElements = this.props.data.get('posts').map(function(p){
			return <Post key={p.get('id')} post={p} />
		})
		return <div>
			{this.props.data.get('posts').map(function(p){
				return <Post key={p.get('id')} post={p} />
			})}
		</div>;
	}
});