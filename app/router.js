module.exports = function(options){

	var controllers = options.controllers;
	var data = options.data;

	var navigate = this.navigate = function(params = null){
		if( params ){ data.set('urlState', params); }
		var urlState = data.get('urlState').toJS();
		switch(urlState.view){
			case 'home':
				controllers.post.load();
				break;
			default:
				this.navigate({view: 'home'});
		}
	}
    window.addEventListener("popstate", function(){
    	controllers.url.setParamsFromUrl();
    	navigate();
    });
}