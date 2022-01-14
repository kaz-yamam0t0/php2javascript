/** 
 * Javascript equivalent to php `stripcslashes`
 * 
 * Un-quote string quoted with addcslashes
 * @see https://www.php.net/manual/en/function.stripcslashes.php
 * 
 * @param string s
 * @return string
 */

const chrs = {
	'n' : 0x0a,
	't' : 0x09,
	'r' : 0x0d,
	'a' : 0x07,
	'b' : 0x08,
	'v' : 0x0b,
	'f' : 0x0c,
	'\\' : 0x5c, 
}

const { utf8to16 } = require('../lib/util');

const stripcslashes = (s)=>{
	s = s.replace(/(\\[0-9]{3})+/g, (s_)=>{
		const c = []
		for (let i=0, len=s_.length/4; i<len; i++) {
			c.push(parseInt(s_.substr(i*4+1, 3), 8))
		}
		return utf8to16(c)
	})
	s = s.replace(/(\\x[0-9a-fA-F]{2})+/g, (s_)=>{
		const c = []
		for (let i=0, len=s_.length/4; i<len; i++) {
			c.push(parseInt(s_.substr(i*4+2, 2), 16))
		}
		return utf8to16(c)
	})
	s = s.replace(/(\\)([ntravbf\\])?/g, (s_,c1,c2)=>{
		if (chrs[c2]) {
			return String.fromCharCode(chrs[c2])
		}
		return c2 || ""
	})
	return s
}

module.exports = {stripcslashes}