var Tools = {}

Tools.replaceAll = function(string, search, replacement) {
	if(typeof string !== 'string') return '';
	return string.replace(new RegExp(search, 'g'), replacement);
};
Tools.randString = function() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
Tools.randString2 = function(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}
Tools.randInt = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
Tools.isJson = function(item) {
    item = typeof item !== "string" ? JSON.stringify(item) : item;
	try {
		item = JSON.parse(item);
	} catch (e) {
		return false;
	}
	if (typeof item === "object" && item !== null) {
		return true;
	}
	return false;
}
Tools.bytesToSize = function(bytes) {
	var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (bytes <= 0 || isNaN(bytes) === true) return '0 B';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + units[i]; 
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + (typeof units[i] !== 'undefined' ? units[i] : '(???)');
};
Tools.timeToString = function(seconds) {
	if (seconds <= 0 || isNaN(seconds) === true) seconds = 0;
	return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}
Tools.timeToString2 = function(seconds){
	var date = new Date(null);
	date.setSeconds(seconds); // specify value for SECONDS here
	var timeString = date.toISOString().substr(11, 8);
	return timeString;
}
Tools.timeToString3 = function(timeInSeconds) {
	var pad = function(num, size) { return ('000' + num).slice(size * -1); },
	time = parseFloat(timeInSeconds).toFixed(3),
	hours = Math.floor(time / 60 / 60),
	minutes = Math.floor(time / 60) % 60,
	seconds = Math.floor(time - minutes * 60);

	return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
}
Tools.randIntFromRange = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
Tools.rot13 = function(str) {
	if(typeof str === 'undefined') return '';
	var input	= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var output	= 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
	var lookup	= input.reduce((m,k,i) => Object.assign(m, {[k]: output[i]}), {});
	return str.split('').map(x => lookup[x] || x).join('');
}

Tools.getUnixTime = function() { return new Date().getTime()/1000|0 };

/** File **/
Tools.get_file_base64 = function(file) {
	return new Promise(function(resolve, reject) {
		var reader = new FileReader();
		reader.onload = function() { resolve(reader.result); };
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}
Tools.get_file_contents = function(file) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() { resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
Tools.get_file_slice = function(file, start, end) {
	var slice = file.mozSlice ? file.mozSlice :
		file.webkitSlice ? file.webkitSlice :
		file.slice ? file.slice : function(){
			alert("Error, slice file not supported!")
		};
	return slice.bind(file)(start, end);
}
Tools.get_fileName = function(filename){
	if(typeof filename === 'undefined') return '';
	return filename.split('.').slice(0,-1).join('.') || filename + ""
}
Tools.get_file_extension = function(filename){
	if(typeof filename === 'undefined') return '';
	return filename.split('.').pop();
}

Tools.get_contents = function(url, is_json = false) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		if(is_json === true) xhr.responseType = 'json';
		xhr.onload = function(){
			if(is_json == true){
				var result = false;
				if(Tools.isJson(xhr.response)){
					result = xhr.response;
				}
				if(result === false){
					reject();
				}else{
					resolve(result);
				}
			}
		};
		xhr.onerror = reject;
		xhr.send();
    });
}

/** Others **/
Tools.stop_event = function(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
}
Tools.removeA = function(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
Tools.copyToClipboard = function(_text) {
	var aux = document.createElement('input');
	aux.setAttribute('value', _text);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
};
Tools.xor_string = function(string, key) {
    string = string.split('');
    key = key.split('');
    var str_len = string.length;
    var key_len = key.length;
    var String_fromCharCode = String.fromCharCode;
    for(var i = 0; i < str_len; i++) {
        string[i] = String_fromCharCode(string[i].charCodeAt(0) ^ key[i % key_len].charCodeAt(0));
    }
    return string.join('');
}
Tools.is_mobileAndTablet = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

/** local Storage **/
Tools.localStorage_remove = function(name) {
	try {
		localStorage.removeItem(name);
		localStorage.removeItem(name + '_expiresIn');
	} catch(e) {
		console.log('localStorage_remove: Error removing key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
		return false;
	}
	return true;
}
Tools.localStorage_get = function(key) {
	var now = Date.now();
	var expiresIn = localStorage.getItem(key+'_expiresIn');
	if (expiresIn===undefined || expiresIn===null) { expiresIn = 0; }

	if (expiresIn < now) {// Expired
		Tools.localStorage_remove(key);
		return null;
	} else {
		try {
			var value = localStorage.getItem(key);
			return value;
        } catch(e) {
			console.log('localStorage_get: Error reading key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
			return null;
		}
	}
}
Tools.localStorage_set = function(key, value, expires){
	if (expires===undefined || expires===null) {
		expires = (24*60*60);  // default: seconds for 1 day
    } else {
		expires = Math.abs(expires); //make sure it's positive
    }
    var now = Date.now();  //millisecs since epoch time, lets deal only with integer
    var schedule = now + expires*1000; 
    try {
        localStorage.setItem(key, value);
        localStorage.setItem(key + '_expiresIn', schedule);
    } catch(e) {
        console.log('localStorage_set: Error setting key ['+ key + '] in localStorage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
};
// Simple JavaScript Templating
(function(){
	var cache = {};
   
	this.tmpl = function tmpl(str, data){
		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :
       
		// Generate a reusable function that will serve as a template
		// generator (and which will be cached).
		new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +
         
			// Introduce the data as local variables using with(){}
			"with(obj){p.push('" +
         
        // Convert the template into pure JavaScript
		str
			.replace(/[\r\t\n]/g, " ")
			.split("<%").join("\t")
			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
			.replace(/\t=(.*?)%>/g, "',$1,'")
			.split("\t").join("');")
			.split("%>").join("p.push('")
			.split("\r").join("\\'")
		+ "');}return p.join('');");
     
		// Provide some basic currying to the user
		return data ? fn( data ) : fn;
	};
})();
//--------------------------------------------------------

//PhantomAPI
var PhantomAPI = {}
PhantomAPI.init = function(api_url){
	PhantomAPI.api_url = api_url;
}
PhantomAPI.set_BasicAuth = function(auth_key){
	PhantomAPI.auth_key = auth_key;
}
PhantomAPI.req = function(handle, handle_args, callback, beforeSend){
	if(typeof callback !== 'function' || callback == null){return;}
	var data = {};
	data.handle = handle;
	data.handle_args = handle_args;
	
	var data = JSON.stringify(data);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', this.api_url, true);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Authorization', 'Basic ' + this.auth_key);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function(){
		xhr.responseJson = { 'error':'invalid json response' };
		if(Tools.isJson(xhr.response)){
			xhr.responseJson = xhr.response;
		}
		callback(xhr)
	};
	xhr.onerror = function(){ callback(xhr) };
	if(typeof beforeSend == 'function'){ beforeSend(xhr) }
	xhr.send(data);
	return xhr;
}
if (typeof api_url !== 'undefined') {
	PhantomAPI.init(api_url);
}
if (typeof user_email !== 'undefined' && typeof user_pass !== 'undefined') {
	PhantomAPI.set_BasicAuth(btoa(user_email+':'+user_pass));
}
