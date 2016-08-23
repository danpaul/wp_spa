module.exports = function(options){
	var controllers = options.controllers;
	var data = options.data;

	var navigate = this.navigate = function(params = null){
		if( params ){ data.set('urlState', params); }
		var urlState = data.get('urlState').toJS();
		if( urlState.cat ){
			return controllers.post.load({cat: urlState.cat});
		} else if( urlState.p ) {
			return controllers.post.loadPost({p: urlState.p});
		} else if( urlState.page_id ) {
			return controllers.page.load({page: urlState.page_id});
		} else if( urlState.tag ) {
			return controllers.post.load({tag: urlState.tag});
		} else if( urlState.view === 'home' ){
			return controllers.post.load({categoryId: urlState.cat});
		} else {
			return this.navigate({view: 'home'});
		}
	}

    window.addEventListener("popstate", function(){
    	controllers.url.setParamsFromUrl();
    	navigate();
    });
}