
// used in `addclashes`, `bin2hex`, `count_chars`, `ltrim`, `ord`, `rtrim`, `trim`
const utf32to8 = (c)=>{
	if (c <= 0xFF)   return [c]
	if (c <= 0x7FF)  return [ (0xC0 | (c>>6)), (0x80 | (c&0x3F)) ]
	if (c <= 0xFFFF) return [ (0xE0 | (c>>12)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)),]
	                 return [ (0xF0 | (c>>18)), (0x80 | ((c>>12)&0x3F)), (0x80 | ((c>>6)&0x3F) ), (0x80 | (c&0x3F)), ]
};
// used in `stripcslashes`
const utf8to16 = (u)=>{
	return (new TextDecoder("utf-8")).decode(new Uint8Array(u))
};
const str2bytes = (s)=>{
	const bytes = [];
	for (let i=0,len=s.length; i<len; i++) {
		let code = s.charCodeAt(i);
		if (i + 1 < len && 0xD800 < code && code <= 0xDC00) {
			let low_ = s.charCodeAt(++i)
			code = 0x10000 + (code - 0xD800)*0x400 + (low_ - 0xDC00)
		}
		if (code > 0xFF) {
			utf32to8(code).forEach((b)=>bytes.push(b))
		} else {
			bytes.push(code);
		}
	}
	return bytes;
}


module.exports = {
	utf32to8,
	utf8to16,
	str2bytes,
};