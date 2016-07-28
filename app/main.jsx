var React = require('react');
var ReactDOM = require('react-dom');
var Root = require('./components/root.jsx');

var data = require('./data');
var options = {data: data, siteUrl: breczinski.siteUrl};
var controllers = new (require('./controllers'))(options);

var BaseComponent = React.createClass({
	getInitialState: function(){
		return { data: data.get() };
	},
	componentDidMount: function(){
		var self = this;
		data.subscribe(function(newData){
			self.setState({data: newData});
		});
	},
	render: function() {
		return <Root
					data={this.state.data}
					controllers={controllers} 	/>
	}
});

ReactDOM.render(
     <BaseComponent />,
     document.getElementById('content')
);