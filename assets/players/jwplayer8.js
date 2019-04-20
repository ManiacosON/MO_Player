(function(){
	if(typeof pharPlugin === 'undefined') return;
	var player = {};
	player.init = function(pInstance){
		player._players_uri = pInstance.playerSettings['_players_uri'];
		player.onPlayerAssets_Loaded(function(){
			{
				//create a element
				var id = 'jwplayer8_'+Math.floor(Math.random()*100);
				var root_element = jQuery(pInstance.playerViewSelector);
				root_element.html(jQuery(document.createElement('div')).attr('id', id));
			}
			player_key = 'W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99';
			
			var playerObj = new Object;
			//set sources
			jQuery.each(pInstance.playerSettings.sources, function(index, value) {
				playerObj.sources = pInstance.playerSettings.sources;
				return;
			});
			
			//set subtitles
			jQuery.each(pInstance.playerSettings.subtitles, function(index, value) {
				playerObj.tracks = pInstance.playerSettings.subtitles;
				return;
			});
			
			//set image
			if(pInstance.playerSettings.image !== '')
				playerObj.image = pInstance.playerSettings.image;
			
			playerObj.key = player_key;
			//playerObj.hlshtml = true;
			playerObj.width = '100%';
			playerObj.height = '100%';
			
			//setup player
			var player = jwplayer(id);
			player.setup(playerObj);
			
			player.on('ready',function(){
				pharPlugin.playerReady();
			});
			player.on('error',function(e){
				if(typeof player.destroy === 'function') player.destroy();
				pharPlugin.playerError(e.message + ' (player_error)');
			});
			player.on('setupError',function(e){
				if(typeof player.destroy === 'function') player.destroy();
				pharPlugin.playerError(e.message + ' (player_setupError)');
			});
			
			pInstance.onDestroyPlayer = function(){
				if(typeof player.destroy === 'function') player.destroy();
			}
		});
		
	}
	
	/* outras funções */
	player.onPlayerAssets_Loaded = function(_function){
		var enabled = !!window.jwplayer;
		if(enabled === true){
			if(typeof _function === 'function') _function();
		}else{
			// player._players_uri+'jwplayer8/jwplayer.js'
			// 'https://ssl.p.jwpcdn.com/player/v/8.8.3/jwplayer.js'
			pharPlugin.loadScript('https://ssl.p.jwpcdn.com/player/v/8.8.3/jwplayer.js', function(){
				enabled = !!window.jwplayer;
				if(typeof _function === 'function') _function();
			});
		}
	}
	
	/* adicionar o player ao plugin */
	pharPlugin.set_newPlayer('jwplayer8', player.init);
})();