/** 
 * Javascript equivalent to php `base64_encode`
 * 
 * Encodes data with MIME base64
 * @see https://www.php.net/manual/en/function.base64-encode.php
 * 
 * [Node]
 * You can also use `Buffer.toString("base64")` (NodeJS) or `window.btoa` (BrowserJS)
 * But you may have to note that `btoa` and `atob` do not support multi-byte characters.
 * 
 * @param string s
 * @return string
 */
const { str2bytes } = require('../lib/util');

const base64_encode = (s)=>{
	bytes = str2bytes(s);
	const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	let res = "";
	for (let i =0, len=bytes.length; i<len; i++) {
		const b = bytes[i];
		if (i + 1 >= len) {
			res += table[ (b & 0xFC) >> 2 ];
			res += table[ (b & 0x03) << 4 ];
			res += "=";
			res += "=";
		} else if (i + 2 >= len) {
			const b2 = bytes[++i];

			res += table[ (b & 0xFC) >> 2 ];
			res += table[ ((b & 0x03) << 4 ) | ((b2 & 0xF0) >> 4) ];
			res += table[ (b2 & 0x0F) << 2 ];
			res += "=";
		} else {
			const b2 = bytes[++i];
			const b3 = bytes[++i];

			res += table[ (b & 0xFC) >> 2 ];
			res += table[ ((b & 0x03) << 4 ) | ((b2 & 0xF0) >> 4) ];
			res += table[ ((b2 & 0x0F) << 2 ) | ((b3 & 0xC0) >> 6) ];
			res += table[ (b3 & 0x3F) ];
		}
	}
	return res;
}



module.exports = {base64_encode}