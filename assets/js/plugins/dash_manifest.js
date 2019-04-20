(function(){
	if(typeof pharPlugin === 'undefined') return;
	var plugin = {};
	plugin._segments = [];
	plugin.init = function(pInstance, args){
		if(args.dash_manifest === undefined){
			pInstance.playerError('o argumento file não foi encontrado!');
			return;
		}
		pInstance.playerSettings['sources'] = args.normal_sources;
		pInstance.load_player();
		
		/*
		if(Tools.is_mobileAndTablet === true){
			
		}else{
			//var blob_url = window.URL.createObjectURL( new Blob([args.dash_manifest], {type: 'application/octet-stream'}) );
			pharPlugin.player_addSource(new Blob([args.dash_manifest]), 'dash', 'dash', true);
			pInstance.load_player();
		}
		*/
	}
	
	/* adicionar o plugin ao plugin */
	pharPlugin.set_newPlugin('dash_manifest', plugin.init);
})();