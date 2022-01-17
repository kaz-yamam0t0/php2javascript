/** 
 * Javascript equivalent to php `base64_decode`
 * 
 * Decodes data encoded with MIME base64
 * @see https://www.php.net/manual/en/function.base64-decode.php
 * 
* [Node]
 * You can also use `window.atob` (BrowserJS)
 * But you may have to note that `btoa` and `atob` do not support multi-byte characters.
 * 
 * @param string s
 * @param bool strict
 * @return string|false
 */
const { utf8to16 } = require('../lib/util');

const base64_decode = (s, strict_flg=true)=>{
	const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	const bytes = [];

	if (strict_flg) {
		if (s.length % 4 != 0 || !s.match(/^([0-9a-zA-Z\+\/]+)={0,2}$/)) {
			return false;
		}
	}

	let buf = 0;
	let bits = 0;
	for (let i=0,len=s.length; i<len; i++) {
		const index = table.indexOf(s[i]);
		if (index < 0) {
			continue; // ignore
		}
		buf = (buf << 6) + index; 
		bits += 6;
		if (bits >= 8) {
			bits -= 8;
			bytes.push( (buf >>> bits) & 0xFF );
		}
	}
	return utf8to16(bytes);
}

module.exports = {base64_decode}