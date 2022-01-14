/** 
 * Javascript equivalent to php `ord`
 * 
 * Convert the first byte of a string to a value between 0 and 255
 * @see https://www.php.net/manual/en/function.ord.php
 * 
 * @param string character
 * @return int
 */
const _utf32to8 = (c)=>{
	if (c <= 0xFF)   return [c]
	if (c <= 0x7FF)  return [ (0xC0 | (c>>6)), (0x80 | (c&0x3F)) ]
	if (c <= 0xFFFF) return [ (0xE0 | (c>>12)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)),]
	                 return [ (0xF0 | (c>>18)), (0x80 | ((c>>12)&0x3F)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)), ]
}

const ord = (c)=>{
	// if the first letter is utf16, convert it to utf8 and extract the first char code
	c = ""+c
	let code = c.charCodeAt(0);
	if (c.length > 1 && 0xD800 <= code && code <= 0xDC00) {
		let low_ = c.charCodeAt(1);
		code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
	} 
	if (code > 0xFF) {
		const chars = _utf32to8(code)
		return chars[0]
	}
	return Math.min(255, code)
}

module.exports = {ord}