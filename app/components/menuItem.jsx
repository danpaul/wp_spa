var BaseComponent = require('../lib/baseComponent');
var React = require('react');

var MenuItem = BaseComponent.createClass({
	handleClick: function(){
		var l = this.props.menuItem.get('object');
		switch(l){
			case('category'):
				console.log('in category')
				break;
			case('page'):
				console.log('in page')
				break;
			case('post'):
				console.log('in post')
				break;
			default:
				console.log(new Error('Unknown link type'), l);
		}
	},
	render: function() {
		var children = null;
		if( this.props.menuItem.get('children') ){
			children = <ul>
				{this.props.menuItem.get('children').map(function(menuItem){
					return <MenuItem key={menuItem.get('id')} menuItem={menuItem} />
				})}
			</ul>
		}
		return <li>
			<a onClick={this.handleClick} >
				{this.props.menuItem.get('title')}
			</a>
			{children}
		</li>
	}
});

module.exports = MenuItem;