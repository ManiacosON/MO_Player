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
					xhr.responseType = 'arraybuffer';
					xhr.onload = function(){
						resolve(xhr);
					};
					xhr.onerror = reject;
					xhr.send();
				});
			}
			/***/
			
			//create hook(proxy)
			pharPlugin.OnHlsLoad = function(Ihls){
				if(Ihls.context.url.includes('gdrivehlsV2://') === true){
					var setSegmentURI = function(url){
						Ihls.context.url = url;
						Ihls.loadInternal();
					}
					var fileURI = Ihls.context.url;
					
					var fileCache = plugin._segments[fileURI] !== undefined?plugin._segments[fileURI]:false
					if(fileCache === false){
						var arr = fileURI.split('://');
						if(arr.length !== 2){
							pInstance.playerError('Url do segmento é invalido!');
						}else{
							var scheme = arr[0];
							var fileId = arr[1];
							var data = {};
							data.id = fileURI;
							PhantomAPI.req('get_segment', data, function(_xhr){
								var response = _xhr.responseJson;
								if(response.error){
									pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>('+response.error+')');
								}else if(response.file){
									var uri = response.file;
									if(uri.includes('lh3.googleusercontent.com') === true){
										get_segment(uri).then(
											function(result){
												var file = window.URL.createObjectURL( new Blob([result.response], {type: 'application/octet-stream'}) );
												//save segment
												plugin._segments[fileURI] = file;
												setSegmentURI(file)
											},
											function(error) {
												pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>(???)<br>Tente limpar o cache do seu navegador!');
											}
										);
										
										
									}else{
										//save segment
										plugin._segments[fileId] = response.file;
										setSegmentURI(response.file);
									}
								}else{
									pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>(???)<br>Tente limpar o cache do seu navegador!');
								}
							});
						}
					}else{
						setSegmentURI(fileCache);
					}
					
					
				}else
				if(Ihls.context.url.includes('gdrivehls://') === true){
					var setSegmentURI = function(url){
						Ihls.context.url = url;
						Ihls.loadInternal();
					}
					var fileId = Ihls.context.url;
					
					var fileCache = plugin._segments[fileId] !== undefined?plugin._segments[fileId]:false
					if(fileCache === false){
						var data = {};
						data.id = fileId;
						PhantomAPI.req('get_segment', data, function(_xhr){
							var response = _xhr.responseJson;
							if(response.error){
								pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>('+response.error+')');
							}else if(response.file){
								var uri = response.file;
								if(uri.includes('lh3.googleusercontent.com') === true){
									get_segment(uri).then(
										function(result){
											var file = window.URL.createObjectURL( new Blob([result.response], {type: 'application/octet-stream'}) );
											//save segment
											plugin._segments[fileId] = file;
											setSegmentURI(file)
										},
										function(error) {
											pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>(???)<br>Tente limpar o cache do seu navegador!');
										}
									);
									
									
								}else{
									//save segment
									plugin._segments[fileId] = response.file;
									setSegmentURI(response.file);
								}
							}else{
								pInstance.playerError('Ocorreu um erro ao tentar obter o segmento!<br><small>'+fileId+'</small><br>(???)<br>Tente limpar o cache do seu navegador!');
							}
						});
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
	pharPlugin.set_newPlugin('load_gDriveHLS', plugin.init);
})();