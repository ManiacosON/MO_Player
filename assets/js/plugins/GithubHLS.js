(function(){
	if(typeof pharPlugin === 'undefined') return;
	var plugin = {};
	plugin._segments = [];
	plugin.init = function(pInstance, args){
		if(args.file === undefined){
			pInstance.playerError('o argumento file não foi encontrado!');
			return;
		}
		var fileURI = args.file;
		Tools.get_contents(fileURI, true).then(function(result){
			var m3u8_playlist = [];
			jQuery.each(result, function(index, value) {
				var m3u8 = plugin.create_M3U8(value);
				var blob_url = window.URL.createObjectURL( new Blob([m3u8], {type: 'application/x-mpegURL'}) );
				m3u8_playlist.push({
					name: index,
					url: blob_url,
				});
			});
			
			m3u8_playlist = plugin.create_M3U8Playlist(m3u8_playlist);
			
			/***/
			var get_segment = function(url) {
				return new Promise(function(resolve, reject) {
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url, true);
					xhr.responseType = 'blob';
					xhr.onload = function(){
						resolve(xhr);
					};
					xhr.onerror = reject;
					xhr.send();
				});
			}
			/***/
			var cdn_jsdelivr = function(fullName, filePath, result){
				var uri = 'https://cdn.jsdelivr.net/gh/'+fullName+'@master/'+filePath;
				var ranges = false;
				//is online
				var isOnline = new Promise(function(resolve, reject) {
					var xhr = new XMLHttpRequest();
					xhr.open('HEAD', uri, true);
					xhr.timeout = 2000;
					xhr.onload = function (e) { if(e.total === 0){ reject() }else{ resolve() } };
					xhr.onerror = reject;
					xhr.ontimeout = function (e) { if(e.total === 0){ reject() }else{ resolve() } };
					xhr.send();
				});
				isOnline.then(
					function(){
						if(ranges === false){
							var getSegment = get_segment(uri);
							getSegment.then(
								function(resolve){
									var file = window.URL.createObjectURL( new Blob([resolve.response], {type: 'application/octet-stream'}) );
									result(file);
								},
								function(reject) { result(false); }
							);
						}else{
							result(uri);
						}
					},
					function() {
						result(false);
					}
				);
			}
			
			var cnd_rawGithack = function(fullName, filePath, result){
				var ranges = false;
				//is online
				var set_uri = function(uri){
					var isOnline = new Promise(function(resolve, reject) {
						var xhr = new XMLHttpRequest();
						xhr.open('HEAD', uri, true);
						xhr.timeout = 2000;
						xhr.onload = function (e) { if(e.total === 0){ reject() }else{ resolve() } };
						xhr.onerror = reject;
						xhr.ontimeout = function (e) { if(e.total === 0){ reject() }else{ resolve() } };
						xhr.send();
					});
					isOnline.then(
						function(){
							if(ranges === false){
								var getSegment = get_segment(uri);
								getSegment.then(
									function(resolve){
										var file = window.URL.createObjectURL( new Blob([resolve.response], {type: 'application/octet-stream'}) );
										result(file);
									},
									function(reject) { result(false); }
								);
							}else{
								result(uri);
							}
						},
						function() {
							result(false);
						}
					);
				}
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://api.github.com/repos/'+fullName+'/git/refs/heads/master', true);
				xhr.responseType = 'json';
				xhr.timeout = 2000;
				xhr.onload = function(e) { if(xhr.response && xhr.response.object && xhr.response.object.sha){  set_uri('https://rawcdn.githack.com/'+fullName+'/'+xhr.response.object.sha+'/'+filePath);  }else{ result(false); } };
				xhr.onerror = function(e) { result(false); };
				xhr.ontimeout = function(e) { result(false); };
				xhr.send();
			}
			
			var cdn_staticaly = function(fullName, filePath, result){
				var uri = 'https://cdn.staticaly.com/gh/'+fullName+'/master/'+filePath;
				var ranges = false;
				var getSegment = get_segment(uri);
				getSegment.then(
					function(resolve){
						console.log( resolve.response );
						var file = window.URL.createObjectURL( new Blob([resolve.response], {type: 'application/octet-stream'}) );
						result(file);
					},
					function(reject) { result(false); }
				);
			}
			/***/
			
			//create hook(proxy)
			pharPlugin.OnHlsLoad = function(Ihls){
				if(Ihls.context.url.includes('ghHLScdn://') === true){
					var setSegmentURI = function(url){
						Ihls.context.url = url;
						Ihls.loadInternal();
					}
					var fileId = Ihls.context.url;
					fileId = fileId.replace('ghHLScdn://', '');
					
					
					var fileCache = plugin._segments[fileId] !== undefined?plugin._segments[fileId]:false
					if(fileCache === false){
						
						var fullName = null;
						var filePath = null;
						[fullName, filePath] = fileId.split('@');
						
						var CDNsFunctions = [cdn_jsdelivr, cnd_rawGithack, cdn_staticaly];
						
						var cdn_getIdeal = function(){
							var cdnFunction = CDNsFunctions.shift();
							if(cdnFunction === null || cdnFunction === undefined){
								pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small>');
							}else{
								cdnFunction(fullName, filePath, function(result){
									if(result === false){
										cdn_getIdeal();
									}else{
										//save segment
										plugin._segments[fileId] = result;
										setSegmentURI(result);
									}
								});
							}
						}
						cdn_getIdeal();
						
					}else{
						setSegmentURI(fileCache);
					}
				}else
				Ihls.loadInternal();
			}
			
			
			
			var file = window.URL.createObjectURL( new Blob([m3u8_playlist], {type: 'application/x-mpegURL'}) );
			pharPlugin.player_addSource(file, 'hls', 'hls', true);
			pInstance.load_player();
			
		}, function(){
			pInstance.playerError('Não foi possivel Obter o Json do arquivo! (gd_hls 0x0)');
		});
	}
	
	/* abc */
	plugin.create_M3U8 = function(m3u8){
		var file = [];
		file.push('#EXTM3U');
		file.push('#EXT-X-VERSION:4');
		file.push('#EXT-X-TARGETDURATION:'+m3u8.targetDuration);
        file.push('#EXT-X-MEDIA-SEQUENCE:'+m3u8.mediaSequence);
		jQuery.each(m3u8.entries, function(index, value) {
			file.push('#EXTINF:'+value.length);
			if(value.byteRange !== undefined)
			file.push('#EXT-X-BYTERANGE:'+value.byteRange);
			var filePath = value.path;
			file.push(filePath);
		});
		file.push('#EXT-X-ENDLIST');
		return  file.join('\n');
	}
	
	plugin.create_M3U8Playlist = function(m3u8){
		var get_info = function(name){
			var infos = [];
			if(name === '360p' || name === '360'){
				infos['bandWidth'] = '800000';
				infos['Resolution'] = '480x360';
				infos['label'] = '360p';
			}else
			if(name === '480p' || name === '480'){
				infos['bandWidth'] = '1400000';
				infos['Resolution'] = '640x480';
				infos['label'] = '480p';
			}else
			if(name === '720p' || name === '720'){
				infos['bandWidth'] = '2800000';
				infos['Resolution'] = '1280x720';
				infos['label'] = '720p';
			}else
			if(name === '1080p' || name === '1080'){
				infos['bandWidth'] = '5000000';
				infos['Resolution'] = '1920x1080';
				infos['label'] = '1080p';
			}else
			if(name === '2048p' || name === '2048'){
				infos['bandWidth'] = '7000000';
				infos['Resolution'] = '2048×1080';
				infos['label'] = '2048p';
			}else
				
			if(name === 'default' || name === 'original'){
				infos['bandWidth'] = '5000000';
				infos['Resolution'] = '1920x1080';
				infos['label'] = '1080p';
			}else
				
			{
				infos['bandWidth'] = '0';
				infos['Resolution'] = '0x0';
				infos['label'] = '0p';
			}
			return infos;
		}
		var file = [];
		file.push('#EXTM3U');
		jQuery.each(m3u8, function(index, value) {
			var infos = get_info(value.name);
			file.push('#EXT-X-STREAM-INF:BANDWIDTH='+infos.bandWidth+',RESOLUTION='+infos.Resolution+',NAME="'+infos.label+'"');
			file.push(value.url);
		});
		return  file.join('\n');
		
	}
	
	/* adicionar o plugin ao plugin */
	pharPlugin.set_newPlugin('load_ghHLSCDN', plugin.init);
})();