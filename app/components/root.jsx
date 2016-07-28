var React = require('react');

module.exports = React.createClass({
	componentDidMount: function(){
		this.props.controllers.post.load();
	},
	render: function() {
		var posts = this.props.data.get('posts');
// console.log(JSON.stringify(posts));
		return <div> in root </div>;
	}
});