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
const _utf32to8 = (c)=>{
	if (c <= 0xFF)   return [c]
	if (c <= 0x7FF)  return [ (0xC0 | (c>>6)), (0x80 | (c&0x3F)) ]
	if (c <= 0xFFFF) return [ (0xE0 | (c>>12)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)),]
	                 return [ (0xF0 | (c>>18)), (0x80 | ((c>>12)&0x3F)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)), ]
}

const count_chars = (s, mode=0)=>{
	const ret = []
	for (let i=0; i<256;i++) ret[i] = 0

	for (let i=0,len=s.length; i<len; i++) {
		let code = s.charCodeAt(i)

		if (len > i+1 && 0xD800 <= code && code <= 0xDC00) {
			let low_ = s.charCodeAt(++i);
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
			_utf32to8(code).forEach((c_)=>{
				ret[c_ & 0xFF]++
			})
		} else {
			if (code > 0xFF) {
				_utf32to8(code).forEach((c_)=>{
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