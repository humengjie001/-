var _isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let means = {
	isIPhone: function () {
		return new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
	},
	trim: function () {
		return this.replace(/(^\s*)|(\s*$)/g, '');
	},
	format: function () {
		var result = this;
		if (arguments.length > 0) {
			var parameters = (arguments.length == 1 && $.isArray(arguments[0])) ? arguments[0] : $.makeArray(arguments);
			$.each(parameters, function (i, n) {
				result = result.replace(new RegExp("\\{" + i + "\\}", "g"), n);
			});
		}
		return result;
	},
	substitute: function (data) {
		if (data && typeof (data) == 'object') {
			return this.replace(/\{([^{}]+)\}/g, function (match, key) {
				var value = data[key];
				return (value !== undefined) ? '' + value : '';
			});
		} else {
			return this.toString();
		}
	},
	parseJSON: function () {
		return (new Function("return " + this.toString()))();
	},
	parseDate: function () {
		return (new Date()).parse(this.toString());
	},
	replaceAll: function (os, ns) {
		return this.replace(new RegExp(os, 'gm'), ns);
	},
	parseAttrJSON: function () {
		var d = {},
			a = this.toString().split(';');
		for (var i = 0; i < a.length; i++) {
			if (a[i].trim() === '' || a[i].indexOf(':') < 1) continue;
			var item = a[i].sliceBefore(':').trim(),
				val = a[i].sliceAfter(':').trim();
			if (item !== '' && val !== '') d[item.toCamelCase()] = val._toRealValue();
		}
		return d;
	},
	padLeft: function (width, ch) {
		if (this.length >= width) return this.toString();
		return this._pad(width, ch, 0);
	},
	_pad: function (width, ch, side) {
		var str = [side ? '' : this, side ? this : ''];
		while (str[side].length < (width ? width : 0) && (str[side] = str[1] + (ch || ' ') + str[0]));
		return str[side];
	},
	isMobile: function () {
		return (new RegExp(/^(13|14|15|17|18)\d{9}$/).test(this.trim()));
	},
	substitute: function (a) {
		return a && "object" == typeof a ? this.replace(/\{([^{}]+)\}/g, function (b, c) {
			var d = a[c];
			return void 0 !== d ? "" + d : ""
		}) : this.toString()
	},
	trimNoteChar: function () {
		return this.replace(/^[^\{]*\{\s*\/\*!?|\*\/[;|\s]*\}$/g, "").trim()
	},
	sliceAfter: function (str) {
		return (this.indexOf(str) >= 0) ? this.substring(this.indexOf(str) + str.length, this.length) : '';
	},
	sliceBefore: function (str) {
		return (this.indexOf(str) >= 0) ? this.substring(0, this.indexOf(str)) : '';
	},
	escapeReg: function () {
		return this.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	},
	GetRequest: function () {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		var strs;
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},
	//写cookies
	setCookie: function (name, value) {
		var exp = new Date();
		//exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);//30天过期
		exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		return true;
	},
	//获取Cookie
	getCookie: function (name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) return unescape(arr[2]);
		return null;
	},
	unicodeToBase64: function (s) {
		return window.btoa(unescape(encodeURIComponent(s)))
	},
	//上传图片
	UploadPictures: function (fn) {
		var uploadPhotosUrl = _isIPhone ? 'ulemobile://action-goodupload' : 'ulemobile://action&&takeShopPhoto&&&&';
		window.location.href = uploadPhotosUrl;
		window.UploadPhotosBack = function(res){
			try {
				typeof res === 'string' && (res = JSON.parse(res));
			} catch (e) { };
			console.log('这里证明回调了', res);
			fn && fn(res);
			console.log('这里证明回调了2', res);
		}
	},


};
export default means