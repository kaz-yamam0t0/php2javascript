/** 
 * Javascript equivalent to php `http_build_query`
 * 
 * Generate URL-encoded query string
 * @see https://www.php.net/manual/en/function.http-build-query.php
 * 
 * @param array|object data
 * @param string numeric_prefix
 * @param ?string arg_separator
 * @param int encoding_type
 * @return string
 */
/**
 * PHP_QUERY_RFC1738 : encoding is performed per » RFC 1738 and the application/x-www-form-urlencoded media type, which implies that spaces are encoded as plus (+) signs.
 * PHP_QUERY_RFC3986 : encoding is performed according to » RFC 3986, and spaces will be percent encoded (%20).
 */
const PHP_QUERY_RFC1738 = 1
const PHP_QUERY_RFC3986 = 2

const { urlencode } = require('./urlencode.js');
const { rawurlencode } = require('./rawurlencode.js');

const http_build_query = (data, numeric_prefix="", arg_separator="&", encoding_type=PHP_QUERY_RFC1738)=>{
	if (typeof data !== "object" || data === null) {
		throw "the argument must be an array or an object.";
	}
	const encode = encoding_type == PHP_QUERY_RFC3986 ? rawurlencode : urlencode;

	let res = [];
	const add = (data, name)=>{
		if (typeof data === "undefined" || data === null) {
			return;
		}
		if (typeof data === "object") {
			if (Array.isArray(data)) {
				data.forEach((value, index)=>{
					let _name = "";
					if (name) {
						_name = `${name}[${index}]`;
					} else {
						_name = numeric_prefix + index;
					}
					add(value, _name);
				});			
			} else {
				Object.keys(data).forEach((k)=>{
					const value = data[k];
					let k_ = k;
					if (k_.match(/^\d+$/)) {
						k_ = numeric_prefix + k_;
					}

					let _name = "";
					if (name) {
						_name = `${name}[${k_}]`;
					} else {
						_name = k_;
					}
					add(value, _name);
				});
			}
			return;
		}
		if (data === true) data = "1";
		else if (data === false) data = "0";
		
		res.push(`${encode(name)}=${encode(`${data}`)}`)
	};
	add(data);

	return res.join(arg_separator);	
}

module.exports = {
	http_build_query, 
	PHP_QUERY_RFC1738, 
	PHP_QUERY_RFC3986
}