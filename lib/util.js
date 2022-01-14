
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

module.exports = {
	utf32to8,
	utf8to16,
};