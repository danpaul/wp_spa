var React = require('react');
var ReactDOM = require('react-dom');
var Root = require('./components/root.jsx');

var data = require('./data');
var controllers = new (require('./controllers'))
					  ({data: data, siteUrl: breczinski.siteUrl});
var router = new(require('./router'))
				({controllers: controllers, data: data});

var BaseComponent = React.createClass({
	componentDidMount: function(){
		data.subscribe(this.forceUpdate.bind(this));
		controllers.url.setParamsFromUrl();
		router.navigate();
	},
	render: function() {
		return <Root
			router={router}
			data={data.getRoot()}
			controllers={controllers} 	/>
	}
});

ReactDOM.render(<BaseComponent />, document.getElementById('content'));