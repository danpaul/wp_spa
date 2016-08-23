var BaseComponent = require('../lib/baseComponent');
var React = require('react');

module.exports = BaseComponent.createClass({
	gotoPost: function(){
		if( this.props.isPage ){ return; }
		this.props.router.navigate({p: this.props.post.get('id')});
	},
	render: function() {
		if( !this.props.post.size ){ return null; }
		var title = this.props.post.getIn(['title', 'rendered']);;
		var content = this.props.post.getIn(['content', 'rendered']);
		return <div style={{paddingBottom: '3rem'}}>
			<h3 onClick={this.gotoPost}><span dangerouslySetInnerHTML={{__html: title}} /></h3>
			<div dangerouslySetInnerHTML={{__html: content}} />
		</div>;
	}
});