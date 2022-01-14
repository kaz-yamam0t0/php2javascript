const { getConsoleOutput } = require("@jest/console")

/** 
 * Javascript equivalent to php `count_chars`
 * 
 * Return information about characters used in a string
 * @see https://www.php.net/manual/en/function.count-chars.php
 * 
 * @param string s
 * @param int mode (ignored)
 * @return array|string
 */
const { utf32to8 } = require('../lib/util');

const count_chars = (s, mode=0)=>{
	const ret = []
	for (let i=0; i<256;i++) ret[i] = 0

	for (let i=0,len=s.length; i<len; i++) {
		let code = s.charCodeAt(i)

		if (len > i+1 && 0xD800 <= code && code <= 0xDC00) {
			let low_ = s.charCodeAt(++i);
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
			utf32to8(code).forEach((c_)=>{
				ret[c_ & 0xFF]++
			})
		} else {
			if (code > 0xFF) {
				utf32to8(code).forEach((c_)=>{
					ret[c_ & 0xFF]++
				})
			} else {
				ret[code & 0xFF]++
			}
		}
	}
	return ret;
}


module.exports = {count_chars}