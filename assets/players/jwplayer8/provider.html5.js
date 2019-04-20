/*!
   JW Player version 8.8.3
   Copyright (c) 2019, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.8.3/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[14],{105:function(e,t,n){"use strict";function r(e){return{bitrate:e.bitrate,label:e.label,width:e.width,height:e.height}}n.d(t,"a",function(){return r})},124:function(e,t,n){"use strict";var r=n(3),i=n(51),a={canplay:function(){this.trigger(r.E)},play:function(){this.stallTime=-1,this.video.paused||this.state===r.qb||this.setState(r.ob)},loadedmetadata:function(){var e={metadataType:"media",duration:this.getDuration(),height:this.video.videoHeight,width:this.video.videoWidth,seekRange:this.getSeekRange()},t=this.drmUsed;t&&(e.drm=t),this.trigger(r.K,e)},timeupdate:function(){var e=this.video.currentTime,t=this.getCurrentTime(),n=this.getDuration();if(!isNaN(n)){this.seeking||this.video.paused||this.state!==r.rb&&this.state!==r.ob||this.stallTime===e||(this.stallTime=-1,this.setState(r.qb),this.trigger(r.gb));var i={position:t,duration:n,currentTime:e,seekRange:this.getSeekRange(),metadata:{currentTime:e}};if(this.getPtsOffset){var a=this.getPtsOffset();a>=0&&(i.metadata.mpegts=a+t)}(this.state===r.qb||this.seeking)&&this.trigger(r.S,i)}},click:function(e){this.trigger(r.n,e)},volumechange:function(){var e=this.video;this.trigger(r.V,{volume:Math.round(100*e.volume)}),this.trigger(r.M,{mute:e.muted})},seeked:function(){this.seeking&&(this.seeking=!1,this.trigger(r.R))},playing:function(){-1===this.stallTime&&this.setState(r.qb),this.trigger(r.gb)},pause:function(){this.state!==r.lb&&(this.video.ended||this.video.error||this.video.currentTime!==this.video.duration&&this.setState(r.pb))},progress:function(){var e=this.getDuration();if(!(e<=0||e===1/0)){var t=this.video.buffered;if(t&&0!==t.length){var n=Object(i.a)(t.end(t.length-1)/e,0,1);this.trigger(r.D,{bufferPercent:100*n,position:this.getCurrentTime(),duration:e,currentTime:this.video.currentTime,seekRange:this.getSeekRange()})}}},ratechange:function(){this.trigger(r.P,{playbackRate:this.video.playbackRate})},ended:function(){this.videoHeight=0,this.streamBitrate=0,this.state!==r.nb&&this.state!==r.lb&&this.trigger(r.F)},loadeddata:function(){this.renderNatively&&this.setTextTracks(this.video.textTracks)}};t.a=a},125:function(e,t,n){"use strict";var r=n(6),i=n(23),a=n(78),s={container:null,volume:function(e){this.video.volume=Math.min(Math.max(0,e/100),1)},mute:function(e){this.video.muted=!!e,this.video.muted||this.video.removeAttribute("muted")},resize:function(e,t,n){var a=this.video,s=a.videoWidth,c=a.videoHeight;if(e&&t&&s&&c){var u={objectFit:"",width:"",height:""};if("uniform"===n){var o=e/t,d=s/c,l=Math.abs(o-d);l<.09&&l>.0025&&(u.objectFit="fill",n="exactfit")}if(r.Browser.ie||r.OS.iOS&&r.OS.version.major<9||r.Browser.androidNative)if("uniform"!==n){u.objectFit="contain";var h=e/t,f=s/c,v=1,g=1;"none"===n?v=g=h>f?Math.ceil(100*c/t)/100:Math.ceil(100*s/e)/100:"fill"===n?v=g=h>f?h/f:f/h:"exactfit"===n&&(h>f?(v=h/f,g=1):(v=1,g=f/h)),Object(i.e)(a,"matrix(".concat(v.toFixed(2),", 0, 0, ").concat(g.toFixed(2),", 0, 0)"))}else u.top=u.left=u.margin="",Object(i.e)(a,"");Object(i.d)(a,u)}},getContainer:function(){return this.container},setContainer:function(e){this.container=e,this.video.parentNode!==e&&e.appendChild(this.video)},remove:function(){this.stop(),this.destroy();var e=this.container;e&&e===this.video.parentNode&&e.removeChild(this.video)},atEdgeOfLiveStream:function(){if(!this.isLive())return!1;return Object(a.a)(this.video.buffered)-this.video.currentTime<=2}};t.a=s},126:function(e,t,n){"use strict";t.a={attachMedia:function(){this.eventsOn_()},detachMedia:function(){return this.eventsOff_(),this.video}}},127:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(1);function i(e,t,n){var i=e+1e3,s=r.o;return t>0?(403===t&&(s=r.q),i+=a(t)):"http:"===(""+n).substring(0,5)&&"https:"===document.location.protocol?i+=12:0===t&&(i+=11),{code:i,key:s}}var a=function(e){return e>=400&&e<600?e:6}},50:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(44),a=n(3),s=n(105),c=n(6),u=n(59),o=n(124),d=n(125),l=n(126),h=n(70),f=n(23),v=n(9),g=n(55),T=n(8),k=n(77),b=n(78),m=n(72),y=n(17),p=n(1),x=224e3,_=224005,w=221e3,O=window.clearTimeout,C="html5",j=function(){};function B(e,t){Object.keys(e).forEach(function(n){t.removeEventListener(n,e[n])})}function E(e,t,n){this.state=a.nb,this.seeking=!1;var i,g=this,E=t.minDvrWindow,L={progress:function(){o.a.progress.call(g),ve()},timeupdate:function(){V&&D!==R.currentTime&&Z(R.currentTime),o.a.timeupdate.call(g),ve(),c.Browser.ie&&Y()},resize:Y,ended:function(){U=-1,ge(),o.a.ended.call(g)},loadedmetadata:function(){var e=g.getDuration();Q&&e===1/0&&(e=0);var t={metadataType:"media",duration:e,height:R.videoHeight,width:R.videoWidth,seekRange:g.getSeekRange()};g.trigger(a.K,t),Y()},durationchange:function(){Q||o.a.progress.call(g)},loadeddata:function(){var e;o.a.loadeddata.call(g),function(e){if(F=null,!e)return;if(e.length){for(var t=0;t<e.length;t++)if(e[t].enabled){K=t;break}-1===K&&(e[K=0].enabled=!0),F=Object(r.A)(e,function(e){var t={name:e.label||e.language,language:e.language};return t})}g.addTracksListener(e,"change",oe),F&&g.trigger("audioTracks",{currentTrack:K,tracks:F})}(R.audioTracks),e=g.getDuration(),P&&-1!==P&&e&&e!==1/0&&g.seek(P),Y()},canplay:function(){M=!0,Q||fe(),c.Browser.ie&&9===c.Browser.version.major&&g.setTextTracks(g._textTracks),o.a.canplay.call(g)},seeking:function(){var e=null!==H?ee(H):g.getCurrentTime(),t=ee(D);D=H,H=null,P=0,g.seeking=!0,g.trigger(a.Q,{position:t,offset:e})},seeked:function(){o.a.seeked.call(g)},waiting:function(){g.seeking?g.setState(a.ob):g.state===a.qb&&(g.atEdgeOfLiveStream()&&g.setPlaybackRate(1),g.stallTime=g.video.currentTime,g.setState(a.rb))},webkitbeginfullscreen:function(e){V=!0,de(e)},webkitendfullscreen:function(e){V=!1,de(e)},error:function(){var e=g.video,t=e.error,n=t&&t.code||-1,r=x,i=p.o;1===n?r+=n:2===n?(i=p.l,r=w):3===n||4===n?(r+=n-1,4===n&&e.src===location.href&&(r=_)):i=p.r,se(),g.trigger(a.G,new p.s(i,r,t))}};Object.keys(o.a).forEach(function(e){if(!L[e]){var t=o.a[e];L[e]=function(e){t.call(g,e)}}}),Object(r.j)(this,T.a,d.a,l.a,k.a,{renderNatively:(i=t.renderCaptionsNatively,!(!c.OS.iOS&&!c.Browser.safari)||i&&c.Browser.chrome),eventsOn_:function(){var e,t;e=L,t=R,Object.keys(e).forEach(function(n){t.removeEventListener(n,e[n]),t.addEventListener(n,e[n])})},eventsOff_:function(){B(L,R)},detachMedia:function(){return l.a.detachMedia.call(g),ge(),this.removeTracksListener(R.textTracks,"change",this.textTrackChangeHandler),this.disableTextTrack(),R},attachMedia:function(){l.a.attachMedia.call(g),M=!1,this.seeking=!1,R.loop=!1,this.enableTextTrack(),this.renderNatively&&this.setTextTracks(this.video.textTracks),this.addTracksListener(R.textTracks,"change",this.textTrackChangeHandler)},isLive:function(){return R.duration===1/0}});var I,R=n,A={level:{}},N=null!==t.liveTimeout?t.liveTimeout:3e4,M=!1,P=0,H=null,D=null,U=-1,V=!1,q=j,F=null,K=-1,W=-1,X=!1,G=null,Q=!1,z=null,J=null,$=0;function Y(){var e=A.level;if(e.width!==R.videoWidth||e.height!==R.videoHeight){if(!R.videoWidth&&!he()||-1===U)return;e.width=R.videoWidth,e.height=R.videoHeight,fe(),A.reason=A.reason||"auto",A.mode="hls"===I[U].type?"auto":"manual",A.bitrate=0,e.index=U,e.label=I[U].label,g.trigger(a.U,A),A.reason=""}}function Z(e){D=e}function ee(e){var t=g.getSeekRange();return g.isLive()&&Object(h.a)(t.end-t.start,E)?Math.min(0,e-t.end):e}function te(e){var t;return Array.isArray(e)&&e.length>0&&(t=e.map(function(e,t){return{label:e.label||t}})),t}function ne(e){E=e.minDvrWindow,I=e.sources,U=function(e){var n=Math.max(0,U),r=t.qualityLabel;if(e)for(var i=0;i<e.length;i++)if(e[i].default&&(n=i),r&&e[i].label===r)return i;A.reason="initial choice",A.level.width&&A.level.height||(A.level={});return n}(I)}function re(){return R.paused&&R.played&&R.played.length&&g.isLive()&&!Object(h.a)(ue()-ce(),E)&&(g.clearTracks(),R.load()),R.play()||Object(m.a)(R)}function ie(e){P=0,ge();var t=R.src,n=document.createElement("source");n.src=I[U].file,n.src!==t?(ae(I[U]),t&&R.load()):0===e&&R.currentTime>0&&(P=-1,g.seek(e)),e>0&&R.currentTime!==e&&g.seek(e);var r=te(I);r&&g.trigger(a.I,{levels:r,currentQuality:U}),I.length&&"hls"!==I[0].type&&g.sendMediaType(I)}function ae(e){F=null,K=-1,A.reason||(A.reason="initial choice",A.level={}),M=!1;var t=document.createElement("source");t.src=e.file,R.src!==t.src&&(R.src=e.file)}function se(){R&&(g.disableTextTrack(),R.removeAttribute("preload"),R.removeAttribute("src"),Object(v.g)(R),Object(f.d)(R,{objectFit:""}),U=-1,!c.Browser.msie&&"load"in R&&R.load())}function ce(){var e=1/0;return["buffered","seekable"].forEach(function(t){for(var n=R[t],i=n?n.length:0;i--;){var a=Math.min(e,n.start(i));Object(r.s)(a)&&(e=a)}}),e}function ue(){var e=0;return["buffered","seekable"].forEach(function(t){for(var n=R[t],i=n?n.length:0;i--;){var a=Math.max(e,n.end(i));Object(r.s)(a)&&(e=a)}}),e}function oe(){for(var e=-1,t=0;t<R.audioTracks.length;t++)if(R.audioTracks[t].enabled){e=t;break}le(e)}function de(e){g.trigger("fullscreenchange",{target:e.target,jwstate:V})}function le(e){R&&R.audioTracks&&F&&e>-1&&e<R.audioTracks.length&&e!==K&&(R.audioTracks[K].enabled=!1,K=e,R.audioTracks[K].enabled=!0,g.trigger("audioTrackChanged",{currentTrack:K,tracks:F}))}function he(){return 0===R.videoHeight&&!((c.OS.iOS||c.Browser.safari)&&R.readyState<2)}function fe(){if("hls"===I[0].type){var e=he()?"audio":"video";g.trigger(a.T,{mediaType:e})}}function ve(){if(0!==N){var e=Object(b.a)(R.buffered);g.isLive()&&e&&G===e?-1===W&&(W=setTimeout(function(){X=!0,function(){if(X&&g.atEdgeOfLiveStream())return g.trigger(a.G,new p.s(p.p,S)),!0}()},N)):(ge(),X=!1),G=e}}function ge(){O(W),W=-1}this.isSDK=!!t.sdkplatform,this.video=R,this.supportsPlaybackRate=!0,g.getCurrentTime=function(){return function(e){var t=g.getSeekRange();if(g.isLive()&&Object(h.a)(t.end-t.start,E)){var n=!J||Math.abs(z-t.end)>1;return n&&function(e){z=e.end,J=Math.min(0,R.currentTime-z),$=Object(y.a)()}(t),J}return e}(R.currentTime)},g.getDuration=function(){var e=R.duration;if(Q&&e===1/0&&0===R.currentTime||isNaN(e))return 0;var t=ue();if(g.isLive()&&t){var n=t-ce();Object(h.a)(n,E)&&(e=-n)}return e},g.getSeekRange=function(){var e={start:0,end:R.duration};return R.seekable.length&&(e.end=ue(),e.start=ce()),e},this.stop=function(){ge(),se(),this.clearTracks(),c.Browser.ie&&R.pause(),this.setState(a.nb)},this.destroy=function(){q=j,B(L,R),this.removeTracksListener(R.audioTracks,"change",oe),this.removeTracksListener(R.textTracks,"change",g.textTrackChangeHandler),this.off()},this.init=function(e){ne(e);var t=I[U];(Q=Object(u.a)(t))&&(g.supportsPlaybackRate=!1,L.waiting=j),g.eventsOn_(),I.length&&"hls"!==I[0].type&&this.sendMediaType(I),A.reason=""},this.preload=function(e){ne(e);var t=I[U],n=t.preload||"metadata";"none"!==n&&(R.setAttribute("preload",n),ae(t))},this.load=function(e){ne(e),ie(e.starttime),this.setupSideloadedTracks(e.tracks)},this.play=function(){return q(),re()},this.pause=function(){ge(),q=function(){if(R.paused&&R.currentTime&&g.isLive()){var e=ue(),t=e-ce(),n=!Object(h.a)(t,E),i=e-R.currentTime;if(n&&e&&(i>15||i<0)){if(H=Math.max(e-10,e-t),!Object(r.s)(H))return;Z(R.currentTime),R.currentTime=H}}},R.pause()},this.seek=function(e){var t=g.getSeekRange(),n=e;if(e<0&&(n+=t.end),M||(M=!!ue()),M){P=0;try{if(g.seeking=!0,g.isLive()&&Object(h.a)(t.end-t.start,E))if(J=Math.min(0,n-z),e<0)n+=Math.min(12,(Object(y.a)()-$)/1e3);H=n,Z(R.currentTime),R.currentTime=n}catch(e){g.seeking=!1,P=n}}else P=n,c.Browser.firefox&&R.paused&&re()},this.setVisibility=function(e){(e=!!e)||c.OS.android?Object(f.d)(g.container,{visibility:"visible",opacity:1}):Object(f.d)(g.container,{visibility:"",opacity:0})},this.setFullscreen=function(e){if(e=!!e){try{var t=R.webkitEnterFullscreen||R.webkitEnterFullScreen;t&&t.apply(R)}catch(e){return!1}return g.getFullScreen()}var n=R.webkitExitFullscreen||R.webkitExitFullScreen;return n&&n.apply(R),e},g.getFullScreen=function(){return V||!!R.webkitDisplayingFullscreen},this.setCurrentQuality=function(e){U!==e&&e>=0&&I&&I.length>e&&(U=e,A.reason="api",A.level={},this.trigger(a.J,{currentQuality:e,levels:te(I)}),t.qualityLabel=I[e].label,ie(R.currentTime||0),re())},this.setPlaybackRate=function(e){R.playbackRate=R.defaultPlaybackRate=e},this.getPlaybackRate=function(){return R.playbackRate},this.getCurrentQuality=function(){return U},this.getQualityLevels=function(){return Array.isArray(I)?I.map(function(e){return Object(s.a)(e)}):[]},this.getName=function(){return{name:C}},this.setCurrentAudioTrack=le,this.getAudioTracks=function(){return F||[]},this.getCurrentAudioTrack=function(){return K}}Object(r.j)(E.prototype,g.a),E.getName=function(){return{name:"html5"}};var L=E,S=220001,I=n(27),R=n(76),A=n(127),N=function(e,t,n){L.call(this,e,t,n);var s=this,c=s.init,u=s.load,o=s.destroy,d=s.renderNatively;function l(e){Object(R.a)([e])?s.renderNatively=!1:s.renderNatively=d}function h(e){var t=e.sources[0];if(!s.fairplay||!Object.is(s.fairplay.source,t)){var n=t.drm;n&&n.fairplay?(s.fairplay=Object(r.j)({},{certificateUrl:"",processSpcUrl:"",licenseResponseType:"arraybuffer",licenseRequestHeaders:[],licenseRequestMessage:function(e){return e},licenseRequestFilter:function(){},licenseResponseFilter:function(){},extractContentId:function(e){return e.split("skd://")[1]},extractKey:function(e){return new Uint8Array(e)}},n.fairplay),s.fairplay.source=t,s.fairplay.destroy=function(){P(s.video,"webkitneedkey",f);var e=this.session;e&&(P(e,"webkitkeymessage",v),P(e,"webkitkeyerror",y)),s.fairplay=null},M(s.video,"webkitneedkey",f)):s.fairplay&&s.fairplay.destroy()}}function f(e){var t=e.target,n=e.initData;if(t.webkitKeys||t.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")),!t.webkitKeys)throw new Error("Could not create MediaKeys");var r=s.fairplay;r.initData=n,Object(I.a)(r.certificateUrl,function(e){var i=new Uint8Array(e.response),a=r.extractContentId(H(n));"string"==typeof a&&(a=function(e){for(var t=new ArrayBuffer(2*e.length),n=new Uint16Array(t),r=0,i=e.length;r<i;r++)n[r]=e.charCodeAt(r);return n}(a));var s=function(e,t,n){var r=0,i=new ArrayBuffer(e.byteLength+4+t.byteLength+4+n.byteLength),a=new DataView(i);new Uint8Array(i,r,e.byteLength).set(e),r+=e.byteLength,a.setUint32(r,t.byteLength,!0),r+=4;var s=new Uint16Array(i,r,t.length);return s.set(t),r+=s.byteLength,a.setUint32(r,n.byteLength,!0),r+=4,new Uint8Array(i,r,n.byteLength).set(n),new Uint8Array(i,0,i.byteLength)}(n,a,i),c=t.webkitKeys.createSession("video/mp4",s);if(!c)throw new Error("Could not create key session");M(c,"webkitkeymessage",v),M(c,"webkitkeyerror",y),r.session=c},m,{responseType:"arraybuffer"})}function v(e){var t=s.fairplay,n=e.target,r=e.message,i=new XMLHttpRequest;i.responseType=t.licenseResponseType,i.addEventListener("load",T,!1),i.addEventListener("error",x,!1);var a="";a="function"==typeof t.processSpcUrl?t.processSpcUrl(H(t.initData)):t.processSpcUrl,i.open("POST",a,!0),i.body=t.licenseRequestMessage(r,n),i.headers={},[].concat(t.licenseRequestHeaders||[]).forEach(function(e){i.setRequestHeader(e.name,e.value)});var c=t.licenseRequestFilter.call(e.target,i,t);c&&"function"==typeof c.then?c.then(function(){g(i)}):g(i)}function g(e){Object.keys(e.headers).forEach(function(t){e.setRequestHeader(t,e.headers[t])}),e.send(e.body)}function T(e){var t=s.fairplay,n=e.target,r={};(n.getAllResponseHeaders()||"").trim().split(/[\r\n]+/).forEach(function(e){var t=e.split(": "),n=t.shift();r[n]=t.join(": ")});var i={data:n.response,headers:r},a=t.licenseResponseFilter.call(e.target,i,t);a&&"function"==typeof a.then?a.then(function(){k(i.data)}):k(i.data)}function k(e){var t=s.fairplay.extractKey(e);"function"==typeof t.then?t.then(b):b(t)}function b(e){var t=s.fairplay.session,n=e;"string"==typeof n&&(n=function(e){for(var t=Object(i.a)(e),n=t.length,r=new Uint8Array(new ArrayBuffer(n)),a=0;a<n;a++)r[a]=t.charCodeAt(a);return r}(n)),t.update(n)}function m(e,t,n,r){r.code+=D,r.key=p.q,s.trigger(a.G,r)}function y(e){s.trigger(a.G,new p.s(p.q,D+650,e))}function x(e){s.trigger(a.G,new p.s(p.q,U+Object(A.a)(e.currentTarget.status),e))}this.init=function(e){h(e),l(e),c.call(this,e)},this.load=function(e){h(e),l(e),u.call(this,e)},this.destroy=function(e){this.fairplay&&this.fairplay.destroy(),o.call(this,e)}};function M(e,t,n){P(e,t,n),e.addEventListener(t,n,!1)}function P(e,t,n){e&&e.removeEventListener(t,n,!1)}function H(e){var t=new Uint16Array(e.buffer);return String.fromCharCode.apply(null,t)}Object(r.j)(N.prototype,L.prototype),N.getName=L.getName;t.default=N;var D=225e3,U=226e3},62:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(2);function i(e){var t=[],n=(e=Object(r.h)(e)).split("\r\n\r\n");1===n.length&&(n=e.split("\n\n"));for(var i=0;i<n.length;i++)if("WEBVTT"!==n[i]){var s=a(n[i]);s.text&&t.push(s)}return t}function a(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var i=1;if(n[0].indexOf(" --\x3e ")>0&&(i=0),n.length>i+1&&n[i+1]){var a=n[i],s=a.indexOf(" --\x3e ");s>0&&(t.begin=Object(r.f)(a.substr(0,s)),t.end=Object(r.f)(a.substr(s+5)),t.text=n.slice(i+1).join("\r\n"))}return t}},66:function(e,t,n){"use strict";var r=window.VTTCue;function i(e){if("string"!=typeof e)return!1;return!!{start:!0,middle:!0,end:!0,left:!0,right:!0}[e.toLowerCase()]&&e.toLowerCase()}if(!r){(r=function(e,t,n){var r=this;r.hasBeenReset=!1;var a="",s=!1,c=e,u=t,o=n,d=null,l="",h=!0,f="auto",v="start",g="auto",T=100,k="middle";Object.defineProperty(r,"id",{enumerable:!0,get:function(){return a},set:function(e){a=""+e}}),Object.defineProperty(r,"pauseOnExit",{enumerable:!0,get:function(){return s},set:function(e){s=!!e}}),Object.defineProperty(r,"startTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"endTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"text",{enumerable:!0,get:function(){return o},set:function(e){o=""+e,this.hasBeenReset=!0}}),Object.defineProperty(r,"region",{enumerable:!0,get:function(){return d},set:function(e){d=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"vertical",{enumerable:!0,get:function(){return l},set:function(e){var t=function(e){return"string"==typeof e&&!!{"":!0,lr:!0,rl:!0}[e.toLowerCase()]&&e.toLowerCase()}(e);if(!1===t)throw new SyntaxError("An invalid or illegal string was specified.");l=t,this.hasBeenReset=!0}}),Object.defineProperty(r,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(r,"line",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");f=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");v=t,this.hasBeenReset=!0}}),Object.defineProperty(r,"position",{enumerable:!0,get:function(){return g},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"size",{enumerable:!0,get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"align",{enumerable:!0,get:function(){return k},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");k=t,this.hasBeenReset=!0}}),r.displayState=void 0}).prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)}}t.a=r},68:function(e,t,n){"use strict";function r(e,t){var n=e.kind||"cc";return e.default||e.defaulttrack?"default":e._id||e.file||n+t}function i(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",(t+=1)>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},69:function(e,t,n){"use strict";var r=n(66),i=n(10),a=n(27),s=n(4),c=n(62),u=n(2),o=n(1);function d(e){throw new o.s(null,e)}function l(e,t,r){e.xhr=Object(a.a)(e.file,function(a){!function(e,t,r,a){var l,h,v=e.responseXML?e.responseXML.firstChild:null;if(v)for("xml"===Object(s.b)(v)&&(v=v.nextSibling);v.nodeType===v.COMMENT_NODE;)v=v.nextSibling;try{if(v&&"tt"===Object(s.b)(v))l=function(e){e||d(306007);var t=[],n=e.getElementsByTagName("p"),r=30,i=e.getElementsByTagName("tt");if(i&&i[0]){var a=parseFloat(i[0].getAttribute("ttp:frameRate"));isNaN(a)||(r=a)}n||d(306005),n.length||(n=e.getElementsByTagName("tt:p")).length||(n=e.getElementsByTagName("tts:p"));for(var s=0;s<n.length;s++){for(var c=n[s],o=c.getElementsByTagName("br"),l=0;l<o.length;l++){var h=o[l];h.parentNode.replaceChild(e.createTextNode("\r\n"),h)}var f=c.innerHTML||c.textContent||c.text||"",v=Object(u.h)(f).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var g=c.getAttribute("begin"),T=c.getAttribute("dur"),k=c.getAttribute("end"),b={begin:Object(u.f)(g,r),text:v};k?b.end=Object(u.f)(k,r):T&&(b.end=b.begin+Object(u.f)(T,r)),t.push(b)}}return t.length||d(306005),t}(e.responseXML),h=f(l),delete t.xhr,r(h);else{var g=e.responseText;g.indexOf("WEBVTT")>=0?n.e(17).then(function(e){return n(132).default}.bind(null,n)).catch(Object(i.c)(301131)).then(function(e){var n=new e(window);h=[],n.oncue=function(e){h.push(e)},n.onflush=function(){delete t.xhr,r(h)},n.parse(g)}).catch(function(e){delete t.xhr,a(Object(o.A)(null,o.b,e))}):(l=Object(c.a)(g),h=f(l),delete t.xhr,r(h))}}catch(e){delete t.xhr,a(Object(o.A)(null,o.b,e))}}(a,e,t,r)},function(e,t,n,i){r(Object(o.z)(i,o.b))})}function h(e){e&&e.forEach(function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})}function f(e){return e.map(function(e){return new r.a(e.begin,e.end,e.text)})}n.d(t,"c",function(){return l}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return f})},70:function(e,t,n){"use strict";function r(e,t){return e!==1/0&&Math.abs(e)>=Math.max(a(t),0)}function i(e,t){var n="VOD";return e===1/0?n="LIVE":e<0&&(n=r(e,a(t))?"DVR":"LIVE"),n}function a(e){return void 0===e?120:Math.max(e,0)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},72:function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){if(e.paused)return n(i("NotAllowedError",0,"play() failed."));var r=function(){e.removeEventListener("play",a),e.removeEventListener("playing",s),e.removeEventListener("pause",s),e.removeEventListener("abort",s),e.removeEventListener("error",s)},a=function(){e.addEventListener("playing",s),e.addEventListener("abort",s),e.addEventListener("error",s),e.addEventListener("pause",s)},s=function(e){if(r(),"playing"===e.type)t();else{var a='The play() request was interrupted by a "'.concat(e.type,'" event.');"error"===e.type?n(i("NotSupportedError",9,a)):n(i("AbortError",20,a))}};e.addEventListener("play",a)})}function i(e,t,n){var r=new Error(n);return r.name=e,r.code=t,r}n.d(t,"a",function(){return r})},74:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});var r={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function i(e,t){for(var n,r,i,a=e.length,s="",c=t||0;c<a;)if(0!==(n=e[c++])&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(n);break;case 12:case 13:r=e[c++],s+=String.fromCharCode((31&n)<<6|63&r);break;case 14:r=e[c++],i=e[c++],s+=String.fromCharCode((15&n)<<12|(63&r)<<6|(63&i)<<0)}return s}function a(e){var t=function(e){for(var t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var n=new Uint8Array(t.data),s=n.length;t={value:{key:"",data:""}};for(var c=10;c<14&&c<n.length&&0!==n[c];)t.value.key+=String.fromCharCode(n[c]),c++;var u=19,o=n[u];3!==o&&0!==o||(o=n[++u],s--);var d=0;if(1!==o&&2!==o)for(var l=u+1;l<s;l++)if(0===n[l]){d=l-u;break}if(d>0){var h=i(n.subarray(u,u+=d),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===h){var f=1&a(n.subarray(u,u+=4)),v=a(n.subarray(u,u+=4))+(f?4294967296:0);t.value.data=v}else t.value.data=i(n,u+1);t.value.info=h}else t.value.info=h,t.value.data=i(n,u+1)}else{var g=n[u];t.value.data=1===g||2===g?function(e,t){for(var n=e.length-1,r="",i=t||0;i<n;)254===e[i]&&255===e[i+1]||(r+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return r}(n,u+1):i(n,u+1)}}if(r.hasOwnProperty(t.value.key)&&(e[r[t.value.key]]=t.value.data),t.value.info){var T=e[t.value.key];T!==Object(T)&&(T={},e[t.value.key]=T),T[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e},{})}},76:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a});var r=n(10);function i(e){return window.WebGLRenderingContext&&e.some(function(e){return e.stereomode&&e.stereomode.length>0})}function a(e,t,i){var a=function(e){i.trigger("warning",e)};return n.e(7).then(function(r){var i=new(0,n(79).default)(e,t);e.addPlugin("vr",i),i.on("error",a)}.bind(null,n)).catch(Object(r.c)(301132)).catch(a)}},77:function(e,t,n){"use strict";var r=n(69),i=n(68),a=n(74),s=n(6),c=n(3),u=n(0),o={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_activeCues:null,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0},addTracksListener:function(e,t,n){if(!e)return;if(d(e,t,n),this.instreamMode)return;e.addEventListener?e.addEventListener(t,n):e["on"+t]=n},clearTracks:function(){Object(r.a)(this._itemTracks);var e=this._tracksById&&this._tracksById.nativemetadata;(this.renderNatively||e)&&(f(this.renderNatively,this.video.textTracks),e&&(e.oncuechange=null));this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCues=null,this.renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),f(this.renderNatively,this.video.textTracks))},clearMetaCues:function(){var e=this._tracksById&&this._tracksById.nativemetadata;e&&(f(this.renderNatively,[e]),e.mode="hidden",e.inuse=!0,this._cachedVTTCues[e._id]={})},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];if(e){e.mode="disabled";var t=e._id;t&&0===t.indexOf("nativecaptions")&&(e.mode="hidden")}}},enableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode="showing")}},getSubtitlesTrack:function(){return this._currentTextTrackIndex},removeTracksListener:d,addTextTracks:l,setTextTracks:function(e){if(this._currentTextTrackIndex=-1,!e)return;this._textTracks?(this._unknownCount=0,this._textTracks=this._textTracks.filter(function(e){var t=e._id;return this.renderNatively&&t&&0===t.indexOf("nativecaptions")?(delete this._tracksById[t],!1):(e.name&&0===e.name.indexOf("Unknown")&&this._unknownCount++,!0)},this),delete this._tracksById.nativemetadata):this._initTextTracks();if(e.length)for(var t=0,n=e.length;t<n;t++){var r=e[t];if(!r._id){if("captions"===r.kind||"metadata"===r.kind){if(r._id="native"+r.kind+t,!r.label&&"captions"===r.kind){var a=Object(i.b)(r,this._unknownCount);r.name=a.label,this._unknownCount=a.unknownCount}}else r._id=Object(i.a)(r,this._textTracks.length);if(this._tracksById[r._id])continue;r.inuse=!0}if(r.inuse&&!this._tracksById[r._id])if("metadata"===r.kind)r.mode="hidden",r.oncuechange=k.bind(this),this._tracksById[r._id]=r;else if(v(r.kind)){var c=r.mode,o=void 0;if(r.mode="hidden",!r.cues.length&&r.embedded)continue;if(r.mode=c,this._cuesByTrackId[r._id]&&!this._cuesByTrackId[r._id].loaded){for(var d=this._cuesByTrackId[r._id].cues;o=d.shift();)h(this.renderNatively,r,o);r.mode=c,this._cuesByTrackId[r._id].loaded=!0}T.call(this,r)}}this.renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||function(){var e=this.video.textTracks,t=Object(u.k)(e,function(e){return(e.inuse||!e._id)&&v(e.kind)});if(!this._textTracks||function(e){if(e.length>this._textTracks.length)return!0;for(var t=0;t<e.length;t++){var n=e[t];if(!n._id||!this._tracksById[n._id])return!0}return!1}.call(this,t))return void this.setTextTracks(e);for(var n=-1,r=0;r<this._textTracks.length;r++)if("showing"===this._textTracks[r].mode){n=r;break}n!==this._currentTextTrackIndex&&this.setSubtitlesTrack(n+1)}.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),(s.Browser.edge||s.Browser.firefox||s.Browser.safari)&&(this.addTrackHandler=this.addTrackHandler||function(){this.setTextTracks(this.video.textTracks)}.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler)));this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})},setupSideloadedTracks:function(e){if(!this.renderNatively)return;var t=e===this._itemTracks;t||Object(r.a)(this._itemTracks);if(this._itemTracks=e,!e)return;t||(this.disableTextTrack(),function(){if(!this._textTracks)return;var e=this._textTracks.filter(function(e){return e.embedded||"subs"===e.groupid});this._initTextTracks(),e.forEach(function(e){this._tracksById[e._id]=e}),this._textTracks=e}.call(this),this.addTextTracks(e))},setSubtitlesTrack:function(e){if(!this.renderNatively)return void(this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1));if(!this._textTracks)return;0===e&&this._textTracks.forEach(function(e){e.mode=e.embedded?"hidden":"disabled"});if(this._currentTextTrackIndex===e-1)return;this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing");this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})},textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:function(e){var t=this._tracksById[e.name];if(!t)return;t.source=e.source;for(var n=e.captions||[],i=[],a=!1,s=0;s<n.length;s++){var c=n[s],u=e.name+"_"+c.begin+"_"+c.end;this._metaCuesByTextTime[u]||(this._metaCuesByTextTime[u]=c,i.push(c),a=!0)}a&&i.sort(function(e,t){return e.begin-t.begin});var o=Object(r.b)(i);Array.prototype.push.apply(t.data,o)},addCaptionsCue:function(e){if(!e.text||!e.begin||!e.end)return;var t,n=e.trackid.toString(),i=this._tracksById&&this._tracksById[n];i||(i={kind:"captions",_id:n,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));e.useDTS&&(i.source||(i.source=e.source||"mpegts"));t=e.begin+"_"+e.text;var a=this._metaCuesByTextTime[t];if(!a){a={begin:e.begin,end:e.end,text:e.text},this._metaCuesByTextTime[t]=a;var s=Object(r.b)([a])[0];i.data.push(s)}},addVTTCue:function(e,t){this._tracksById||this._initTextTracks();var n=e.track?e.track:"native"+e.type,r=this._tracksById[n],i="captions"===e.type?"Unknown CC":"ID3 Metadata",a=e.cue;if(!r){var s={kind:e.type,_id:n,label:i,embedded:!0};r=g.call(this,s),this.renderNatively||"metadata"===r.kind?this.setTextTracks(this.video.textTracks):l.call(this,[r])}if(function(e,t,n){var r=e.kind;this._cachedVTTCues[e._id]||(this._cachedVTTCues[e._id]={});var i,a=this._cachedVTTCues[e._id];switch(r){case"captions":case"subtitles":i=n||Math.floor(20*t.startTime);var s="_"+t.line,c=Math.floor(20*t.endTime),u=a[i+s]||a[i+1+s]||a[i-1+s];return!(u&&Math.abs(u-c)<=1)&&(a[i+s]=c,!0);case"metadata":var o=t.data?new Uint8Array(t.data).join(""):t.text;return i=n||t.startTime+o,a[i]?!1:(a[i]=t.endTime,!0);default:return!1}}.call(this,r,a,t)){var c=this.renderNatively||"metadata"===r.kind;return c?h(c,r,a):r.data.push(a),a}return null},addVTTCuesToTrack:function(e,t){if(!this.renderNatively)return;var n,r=this._tracksById[e._id];if(!r)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[e._id]={cues:t,loaded:!1});if(this._cuesByTrackId[e._id]&&this._cuesByTrackId[e._id].loaded)return;this._cuesByTrackId[e._id]={cues:t,loaded:!0};for(;n=t.shift();)h(this.renderNatively,r,n)},triggerActiveCues:function(e){var t=this;if(!e||!e.length)return void(this._activeCues=null);var n=this._activeCues||[],r=Array.prototype.filter.call(e,function(e){if(n.some(function(t){return r=t,(n=e).startTime===r.startTime&&n.endTime===r.endTime&&n.text===r.text&&n.data===r.data&&n.value===r.value;var n,r}))return!1;if(e.data||e.value)return!0;if(e.text){var r=JSON.parse(e.text),i=e.startTime,a={metadataTime:i,metadata:r};r.programDateTime&&(a.programDateTime=r.programDateTime),r.metadataType&&(a.metadataType=r.metadataType,delete r.metadataType),t.trigger(c.K,a)}return!1});if(r.length){var i=Object(a.a)(r),s=r[0].startTime;this.trigger(c.K,{metadataType:"id3",metadataTime:s,metadata:i})}this._activeCues=Array.prototype.slice.call(e)},renderNatively:!1};function d(e,t,n){e&&(e.removeEventListener?e.removeEventListener(t,n):e["on"+t]=null)}function l(e){var t=this;e&&(this._textTracks||this._initTextTracks(),e.forEach(function(e){if(!e.kind||v(e.kind)){var n=g.call(t,e);T.call(t,n),e.file&&(e.data=[],Object(r.c)(e,function(e){t.addVTTCuesToTrack(n,e)},function(e){t.trigger(c.ub,e)}))}}),this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks}))}function h(e,t,n){if(s.Browser.ie){var r=n;(e||"metadata"===t.kind)&&(r=new window.TextTrackCue(n.startTime,n.endTime,n.text)),function(e,t){var n=[],r=e.mode;e.mode="hidden";for(var i=e.cues,a=i.length-1;a>=0&&i[a].startTime>t.startTime;a--)n.unshift(i[a]),e.removeCue(i[a]);e.addCue(t),n.forEach(function(t){return e.addCue(t)}),e.mode=r}(t,r)}else t.addCue(n)}function f(e,t){t&&t.length&&Object(u.i)(t,function(t){if(!(s.Browser.ie&&e&&/^(native|subtitle|cc)/.test(t._id))){t.mode="disabled",t.mode="hidden";for(var n=t.cues.length;n--;)t.removeCue(t.cues[n]);t.embedded||(t.mode="disabled"),t.inuse=!1}})}function v(e){return"subtitles"===e||"captions"===e}function g(e){var t,n=Object(i.b)(e,this._unknownCount),r=n.label;if(this._unknownCount=n.unknownCount,this.renderNatively||"metadata"===e.kind){var a=this.video.textTracks;(t=Object(u.m)(a,{label:r}))||(t=this.video.addTextTrack(e.kind,r,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=Object(i.a)(e,this._textTracks.length)),t}function T(e){this._textTracks.push(e),this._tracksById[e._id]=e}function k(e){this.triggerActiveCues(e.currentTarget.activeCues)}t.a=o},78:function(e,t,n){"use strict";function r(e){return e&&e.length?e.end(e.length-1):0}n.d(t,"a",function(){return r})}}]);