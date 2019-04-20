var pharPlugin = {};
(function(){
	var MD5_ = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
	window.URL = window.URL || window.webkitURL;
	if(typeof window.main_uri === 'undefined') window.main_uri = 'https://www.google.com/';
	var Opened = false;
	var _Elem = new Image();
	_Elem.__defineGetter__('id', function() {
		var Html = document.getElementsByTagName('html');
		for (index = 0; index < Html.length; index++) {
			Html[index].parentNode.removeChild(Html[index]);
		}
		if(Opened == false){
			window.open(window.main_uri,'_blank');
			window.top.location.replace(window.main_uri);
			Opened = true;
		}
	});
	function _AntiDevTools() {
		before = new Date().getTime();
		eval('debugger;');
		after = new Date().getTime();
		if (after - before > 100) {
			if(Opened == false){
				window.open(window.main_uri,'_blank');
				window.top.location.replace(window.main_uri);
				Opened = true;
			}
		}else{
			before = null;
			after = null;
			delete before;
			delete after;
		}
	}
	function getParentUrl_(){var isInIframe = (parent !== window),parentUrl = window.location.href;if(isInIframe){parentUrl = document.referrer;}return parentUrl;}
	var UrlGetDev = new URL(getParentUrl_());
	setInterval(function() {
		if(!(UrlGetDev.searchParams.get('dev') !== null && MD5_(UrlGetDev.searchParams.get('dev')) === '8855eb6091ae2c17e183f9007da44d81')){
			console.log(_Elem);
			console.clear();
			_AntiDevTools();
		}
	}, 100);
})();

pharPlugin.callCancel_onError = true;
//-- Movie --
pharPlugin.set_movieSelector = function(selector) {
	jQuery('body').on( 'click', selector, function() {
		var Id = jQuery(this).attr('m_id');
		if(typeof Id !== 'undefined'){
			pharPlugin.initMovie(Id);
		}
	});
}
pharPlugin.set_onInitMovie = function(func) {
	pharPlugin.onInitMovie = func;
}
pharPlugin.initMovie = function(Id){
	if(typeof pharPlugin.onInitMovie === 'function') pharPlugin.onInitMovie();
	pharPlugin.xhr_abort();
	var data = {};
	data.id = Id;
	pharPlugin.xhr_req = PhantomAPI.req('get_movie', data, pharPlugin.API_callback);
}
//-- Serie --
pharPlugin.set_episodeSelector = function(selector) {
	jQuery('body').on( 'click', selector, function() {
		var Id = jQuery(this).attr('e_id');
		if(typeof Id !== 'undefined'){
			pharPlugin.initEpisode(Id);
		}
	});
}
pharPlugin.set_onInitEpisode = function(func) {
	pharPlugin.onInitEpisode = func;
}
pharPlugin.initEpisode = function(Id){
	if(typeof pharPlugin.onInitEpisode === 'function') pharPlugin.onInitEpisode();
	pharPlugin.xhr_abort();
	var data = {};
	data.id = Id;
	pharPlugin.xhr_req = PhantomAPI.req('get_episode', data, pharPlugin.API_callback);
}

pharPlugin.set_onEpisodeOptsLoaded = function(func) {
	pharPlugin.onEpisodeOptsLoaded = func;
}
pharPlugin.set_onEpisodeOptClicked = function(func) {
	pharPlugin.onEpisodeOptClicked = func;
}
pharPlugin.set_episodeOptSelector = function(selector) {
	jQuery('body').on( 'click', selector, function() {
		var Id = jQuery(this).attr('eOpt_id');
		if(typeof Id !== 'undefined'){
			if(typeof pharPlugin.onEpisodeOptClicked === 'function') pharPlugin.onEpisodeOptClicked(this);
			pharPlugin.initEpisodeOpt(Id);
		}
	});
}

pharPlugin.initEpisodeOpt = function(Id){
	pharPlugin.destroy_player();
	pharPlugin.xhr_abort();
	var data = {};
	data.id = Id;
	pharPlugin.xhr_req = PhantomAPI.req('get_episodeOpt', data, pharPlugin.API_callback);
}


//-- Both --
pharPlugin.set_cancelSelector = function(selector) {
	jQuery('body').on( 'click', selector, function() {
		pharPlugin.cancel();
	});
}
pharPlugin.set_onCancel = function(func) {
	pharPlugin.onCancel = func;
}
pharPlugin.cancel = function(){
	if(typeof pharPlugin.onCancel === 'function') pharPlugin.onCancel();
	pharPlugin.destroy_player();
	pharPlugin.xhr_abort();
}
pharPlugin.set_callCancel_onError = function(bool){
	pharPlugin.callCancel_onError = bool;
}
pharPlugin.xhr_abort = function(){
	if(this.xhr_req instanceof XMLHttpRequest){
		this.xhr_req.abort();
		this.xhr_req = false;
	}
}
//---------------------------------------------------------------
pharPlugin.show_error = function(msg){
	if(typeof pharPlugin.onShowError === 'function') pharPlugin.onShowError();
	if(typeof swal !== 'undefined'){
		Swal.fire({
			heightAuto: false,
			type: 'error',
			title: 'Oops...',
			html: msg,
			onClose: () => { if(pharPlugin.callCancel_onError === true)pharPlugin.cancel() }
		});
	}else{
		alert(' Oops... \n'+msg);
		if(pharPlugin.callCancel_onError === true)
		pharPlugin.cancel();
	}
}
pharPlugin.API_callback = function(xhr){
	if(typeof pharPlugin.onAPIcallback_before === 'function') pharPlugin.onAPIcallback_before();
	var response = xhr.responseJson;
	if(response.error){
		pharPlugin.show_error(response.error);
	}else{
		if(response.function && response.args){
			
			/* set subtitles */
			if(response.args.subtitles){
				pharPlugin.playerSettings['subtitles'] = response.args.subtitles;
			}
			
			if(response.function === 'load_player'){
				pharPlugin.player_emptySource();
				pharPlugin.playerSettings['sources'] = response.args.sources;
				pharPlugin.load_player();
			}else
				
			if(response.function === 'load_iframe'){
			
			}else
				
			/**/
			if(response.function === 'is_episodeOptions' && response.args.options){
				if(typeof pharPlugin.onEpisodeOptsLoaded === 'function') pharPlugin.onEpisodeOptsLoaded(response.args.options);
			}else
			/**/
		
			if(pharPlugin.Plugins.hasOwnProperty(response.function)){
				if(typeof pharPlugin.Plugins[response.function] === 'function'){
					pharPlugin.player_emptySource();
					pharPlugin.Plugins[response.function](pharPlugin, response.args);
				}else
					pharPlugin.show_error('O Plugin com o nome "'+playerName+'" Não tem uma função valida! (js_0x0)');
			}else
			
			{
				pharPlugin.show_error('Função não Encontrada, Por favor limpe o cache do seu navegador!');
			}
		
		}else{
			pharPlugin.show_error('Ocorreu algum problema, por favor tente novamente! (js_0x1)');
		}
	}
	if(typeof pharPlugin.onAPIcallback_after === 'function') pharPlugin.onAPIcallback_after();
}
pharPlugin.loadScript = function(url, callback){
	var script = document.createElement("script")
	script.type = "text/javascript";
	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
					script.readyState == "complete"){
				script.onreadystatechange = null;
				if(typeof callback === 'function') callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			if(typeof callback === 'function') callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
/* Plugin Functions */
pharPlugin.Plugins = {};
pharPlugin.set_newPlugin = function(name, _function){
	pharPlugin.Plugins[name] = _function;
}

/* Player Functions */
pharPlugin.playerViewSelector = null;
pharPlugin.players = [];
pharPlugin.playerSettings = {
	defaultName: '',
	_players_uri: '',
	sources: [],
	subtitles: [],
	image: '',
};
//---
pharPlugin.player_addSource = function(file, label, type, _default){
	pharPlugin.playerSettings['sources'].push({'file': file, 'label': label, 'type': type, 'default': _default});
}
pharPlugin.player_emptySource = function(){
	pharPlugin.playerSettings['sources'] = [];
}
pharPlugin.player_setImage = function(img){
	pharPlugin.playerSettings['image'] = img;
}
pharPlugin.player_addSubtitle = function(file, label, _default){
	pharPlugin.playerSettings['subtitles'].push({'file': file, 'label': label, 'default': _default});
}
pharPlugin.player_emptySubtitle = function(){
	pharPlugin.playerSettings['subtitles'] = [];
}
//---
pharPlugin.set_newPlayer = function(name, _function){
	pharPlugin.players[name] = _function;
}
pharPlugin.set_defaultPlayer = function(name){
	pharPlugin.playerSettings['defaultName'] = name;
}
pharPlugin.set_Players_URI = function(uri){
	pharPlugin.playerSettings['_players_uri'] = uri;
}
pharPlugin.set_playerViewSelector = function(selector) {
	pharPlugin.playerViewSelector = selector;
}
pharPlugin.set_onPlayerReady = function(func) {
	pharPlugin.onPlayerReady = func;
}
//---
pharPlugin.load_player = function(){
	if(jQuery(pharPlugin.playerViewSelector).length === 0){
		pharPlugin.show_error('O Selector para o Player Não foi encontrado! (js_0x0)');
		return;
	}
	var playerName = pharPlugin.playerSettings['defaultName'];
	if(playerName === ''){
		pharPlugin.show_error('É preciso definir o nome do player padrão! (js_0x0)');
		return;
	}
	if(pharPlugin.players.hasOwnProperty(playerName)){
		if(typeof pharPlugin.players[playerName] === 'function'){
			pharPlugin.players[playerName](pharPlugin);
		}else
			pharPlugin.show_error('O Object do Player com o nome "'+playerName+'" Não tem uma função valida! (js_0x0)');
	}else{
		pharPlugin.show_error('O Object do Player com o nome "'+playerName+'" Não foi encontrado! Tente Novamente... (js_0x0)');
	}
}
pharPlugin.destroy_player = function(){
	if(typeof pharPlugin.onDestroyPlayer === 'function') pharPlugin.onDestroyPlayer();
};

pharPlugin.playerReady = function(){
	if(typeof pharPlugin.onPlayerReady === 'function') pharPlugin.onPlayerReady();

}
pharPlugin.playerError = function(msg){
	if(typeof pharPlugin.onDestroyPlayer === 'function') pharPlugin.onDestroyPlayer();
	pharPlugin.show_error(msg);
	return;
}
