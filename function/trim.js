/** 
 * Javascript equivalent to php `trim`
 * 
 * Strip whitespace (or other characters) from the beginning and end of a string
 * @see https://www.php.net/manual/en/function.trim.php
 * 
 * [Node]
 * If you want to just remove whitespaces, you can also use `String.prototype.trim()`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * 
 * @param string s
 * @param string characters
 * @return string
 */
const _utf32to8 = (c)=>{
	if (c <= 0xFF)   return [c]
	if (c <= 0x7FF)  return [ (0xC0 | (c>>6)), (0x80 | (c&0x3F)) ]
	if (c <= 0xFFFF) return [ (0xE0 | (c>>12)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)),]
	                 return [ (0xF0 | (c>>18)), (0x80 | ((c>>12)&0x3F)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)), ]
}

const trim = (s, characters=" \n\r\t\v\0")=>{
	let dst = "";

	const flags = [];
	const chars = [];
	for (let i=0, len=characters.length; i<len; i++) {
		let code = characters.charCodeAt(i);
		if (i+1<len && 0xD800 <= code && code <= 0xDC00) {
			let low_ = characters.charCodeAt(++i);
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
		}
		_utf32to8(code).forEach(c=>chars.push(c))
	}
	
	for (let i=0, len=chars.length; i<len; i++) {
		const c = chars[i]

		if (len > i + 2 && chars[i+1] == 0x2E && chars[i+2] == 0x2E) { // 0x2E == '.'
			if (len <= i + 3) {
				console.warn("Invalid '..'-range, '..'-range needs to be incrementing");
				flags[c] = 1;
				flags[0x2E] = 1;
				break;
			}
			const lastc = chars[i+=3]

			if (c > lastc) {
				console.warn("Invalid '..'-range, '..'-range needs to be incrementing");
				flags[c] = 1;
				flags[lastc] = 1;
				flags[0x2E] = 1;
			} else {
				for (let c_=c; c_<lastc; c_++) flags[c_] = 1
			}
		} else {
			flags[c] = 1
		}
	}
	let left_flg = true
	let buf = ""

	for (let i=0, len=s.length; i<len; i++) {
		let i_ = i

		let code = s.charCodeAt(i);
		if (i+1<len && 0xD800 <= code && code <= 0xDC00) {
			let low_ = s.charCodeAt(++i);
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
		}

		//const code = s.charCodeAt(i);
		const _chars = _utf32to8(code)
		if (! _chars.some((_c)=>flags[_c])) {
			if (left_flg == false) {
				if (buf) {
					dst += buf
					buf = ""
				}
			}
			left_flg = false

			dst += s[i_]
			if (i != i_) dst += s[i]
			continue
		}
		let buf_ = ""
		_chars.forEach((c)=> {
			if (flags[c]) {
				if (!left_flg) buf_ += String.fromCharCode(c)
			} else {
				if (left_flg) left_flg = false;
				dst += buf + buf_ + String.fromCharCode(c)
				buf = ""
				buf_ = ""
			}
		})
		if (buf_) buf += buf_
	}
	return dst
}

module.exports = {trim}