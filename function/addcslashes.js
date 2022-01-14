/** 
 * php `addcslashes` with Javascript
 * 
 * Quote string with slashes in a C style
 * @see https://www.php.net/manual/en/function.addcslashes.php
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

const addcslashes = (s, characters)=>{
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
			dst += s[i_]
			if (i != i_) dst += s[i]
			continue
		}
		_chars.forEach((c)=> {
			if (flags[c]) {
				if (c < 32 || 126 < c) {
					dst += "\\"
					switch(c) {
						case 0x0a: dst += "n"; break
						case 0x09: dst += "t"; break
						case 0x0d: dst += "r"; break
						case 0x07: dst += "a"; break
						case 0x08: dst += "b"; break
						case 0x0b: dst += "v"; break
						case 0x0c: dst += "f"; break
						default: 
							let c_ = c.toString(8)
							while (c_.length < 3) c_ = "0"+ c_;
							dst += c_
					}
					return
				} 
				dst += "\\"
			}
			//dst += s[i]
			dst += String.fromCharCode(c)
		})
	}
	return dst
}

module.exports = {addcslashes}