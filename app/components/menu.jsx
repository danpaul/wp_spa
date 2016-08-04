var Immutable = require('immutable');
var React = require('react');

module.exports = React.createClass({
	render: function() {
		if( !this.props.menu.size ){ return null; }

// console.log('menu props', this.props)

		return <div>Menu</div>
	}
});