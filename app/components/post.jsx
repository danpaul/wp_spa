var Immutable = require('immutable');
var React = require('react');
var Post = require('./post.jsx');

module.exports = React.createClass({
	render: function() {
		var title = this.props.post.getIn(['title', 'rendered']);;
		var content = this.props.post.getIn(['content', 'rendered']);

		return <div>
			<div dangerouslySetInnerHTML={{__html: title}} />
			<div dangerouslySetInnerHTML={{__html: content}} />
		</div>;
	}
});