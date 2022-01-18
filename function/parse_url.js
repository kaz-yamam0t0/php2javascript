/** 
 * Javascript equivalent to php `parse_url`
 * 
 * Parse a URL and return its components
 * @see https://www.php.net/manual/en/function.parse-url.php
 * 
 * @param string url
 * @param int component
 * @return mixed
 */
/**
 * PHP_URL_SCHEME   : 
 * PHP_URL_HOST     : 
 * PHP_URL_PORT     : 
 * PHP_URL_USER     : 
 * PHP_URL_PASS     : 
 * PHP_URL_PATH     : 
 * PHP_URL_QUERY    : 
 * PHP_URL_FRAGMENT : 
 */
const PHP_URL_SCHEME   = 0
const PHP_URL_HOST     = 1
const PHP_URL_PORT     = 2
const PHP_URL_USER     = 3
const PHP_URL_PASS     = 4
const PHP_URL_PATH     = 5
const PHP_URL_QUERY    = 6
const PHP_URL_FRAGMENT = 7

const parse_url = (u, component_flg=-1)=>{
	let url = `${u || ""}`;
	const res = {}

	if (url.indexOf("#") >= 0) {
		let [u, a] = url.split("#",2);
		res["fragment"] = a;
		url = u;
	}
	if (url.indexOf("?") >= 0) {
		let [u, q] = url.split("?",2);
		res["query"] = q;
		url = u;
	}
	if (m = url.match(/^(([0-9a-zA-Z\-]+?):)?\/\/([^/]+)\/?/)) {
		if (RegExp.$1) res["scheme"] = m[2];
		let hostname = m[3];
		if (hostname.indexOf("@") >= 0) {
			let [username, hostname_] = hostname.split("@", 2);
			hostname = hostname_;

			if (username.indexOf(":") >= 0) {
				let [user_ ,pass_] = username.split(":" , 2);
				res["user"] = user_;
				res["pass"] = pass_;
			} else {
				res["user"] = username;
			}
		} 
		if (hostname.indexOf(":") >= 0) {
			let [hostname_, port] = hostname.split(":", 2);
			try {
				res["port"] = parseInt(port);
			} catch(e_) {
				return false;
			}
			hostname = hostname_;
		}
		res["host"] = hostname;

		url = url.substr(m[0].length);
		if (url[0] != "/") {
			url = "/" + url;
		}
	}
	res["path"] = url;

	if (component_flg >= 0) {
		switch(component_flg) {
			case PHP_URL_SCHEME:   return res["scheme"] || null;
			case PHP_URL_HOST:     return res["host"] || null;
			case PHP_URL_PORT:     return res["port"] || null;
			case PHP_URL_USER:     return res["user"] || null;
			case PHP_URL_PASS:     return res["pass"] || null;
			case PHP_URL_PATH:     return res["path"] || null;
			case PHP_URL_QUERY:    return res["query"] || null;
			case PHP_URL_FRAGMENT: return res["fragment"] || null;
		}
	}

	return res;
}


module.exports = {
	parse_url, 
	PHP_URL_SCHEME, 
	PHP_URL_HOST, 
	PHP_URL_PORT, 
	PHP_URL_USER, 
	PHP_URL_PASS, 
	PHP_URL_PATH, 
	PHP_URL_QUERY, 
	PHP_URL_FRAGMENT
}