var _ = require('underscore');
var React = require('react');
var Menu = require('./menu.jsx');
var Post = require('./post.jsx');
var Immutable = require('immutable');

module.exports = React.createClass({
	componentDidMount: function(){
		this.props.controllers.post.load();
		this.props.controllers.menu.loadMain();
	},
	render: function() {
// main menu
// console.log(this.props.data.get('mainMenu'))
		var postElements = this.props.data.get('posts').map(function(p){
			return <Post key={p.get('id')} post={p} />
		})
		var menu = null;

		return <div>
			{
				this.props.data.get('mainMenu').size ?
					<Menu menu={this.props.data.get('mainMenu')} /> : null
			}
			{this.props.data.get('posts').map(function(p){
				return <Post key={p.get('id')} post={p} />
			})}
		</div>;
	}
});