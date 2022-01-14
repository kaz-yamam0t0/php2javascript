/** 
 * Javascript equivalent to php `bin2hex`
 * 
 * Convert binary data into hexadecimal representation
 * @see https://www.php.net/manual/en/function.bin2hex.php
 * 
 * @param string s
 * @return string
 */
const _utf32to8 = (c)=>{
	if (c <= 0xFF)   return [c]
	if (c <= 0x7FF)  return [ (0xC0 | (c>>6)), (0x80 | (c&0x3F)) ]
	if (c <= 0xFFFF) return [ (0xE0 | (c>>12)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)),]
	                 return [ (0xF0 | (c>>18)), (0x80 | ((c>>12)&0x3F)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)), ]
}

const bin2hex = (s)=>{
	let dst = ""
	const hex_ = "0123456789abcdef"
	const add_ = (c)=>{
		dst += hex_[(c >> 4) & 0x0F]
		dst += hex_[c & 0x0F]
	}

	for (let i=0,len=s.length; i<len; i++) {
		let code = s.charCodeAt(i)

		if (len > i+1 && 0xD800 <= code && code <= 0xDC00) {
			let low_ = s.charCodeAt(++i);
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
			_utf32to8(code).forEach((c_)=>{
				add_(c_)
			})
		} else {
			if (code > 0xFF) {
				_utf32to8(code).forEach((c_)=>{
					add_(c_)
				})
			} else {
				add_(code)
			}
		}
	}
	return dst;
}

module.exports = {bin2hex}