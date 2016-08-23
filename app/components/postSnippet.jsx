var BaseComponent = require('../lib/baseComponent');
var React = require('react');

module.exports = BaseComponent.createClass({
	render: function() {
		var title = this.props.post.getIn(['title', 'rendered']);;
		var content = this.props.post.getIn(['content', 'rendered']);
		return <div style={{paddingBottom: '3rem'}}>
			<h3><span dangerouslySetInnerHTML={{__html: title}} /></h3>
			<div dangerouslySetInnerHTML={{__html: content}} />
		</div>;
	}
});