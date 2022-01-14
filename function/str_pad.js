/** 
 * Javascript equivalent to php `str_pad`
 * 
 * Pad a string to a certain length with another string
 * @see https://www.php.net/manual/en/function.str-pad.php
 * 
 * @param string s
 * @param int length
 * @param string pad_string
 * @param int pad_type
 * @return string
 */
/**
 * STR_PAD_RIGHT : undefined
 * STR_PAD_LEFT  : undefined
 * STR_PAD_BOTH  : undefined
 */
const {
	STR_PAD_RIGHT, 
	STR_PAD_LEFT, 
	STR_PAD_BOTH,
} = require('../lib/const');

const str_pad = (s, len, pad_string=" ", pad_type=STR_PAD_RIGHT)=>{
	if (s.length >= len) 
		return s
	
	if (! pad_string || pad_string.length <= 0) 
		pad_string = " ";

	let n = len - s.length, 
		left = 0, 
		right = 0;
	
	switch(pad_type) {
		case STR_PAD_LEFT:
			left = n
			break
		case STR_PAD_BOTH:
			left = ~~(n / 2);
			right = n - left;
			break
		case STR_PAD_RIGHT:
		default:
			right = n;
			break
	}
	if (left > 0) {
		s = (pad_string.repeat(Math.ceil(left / pad_string.length)).substr(0,left)) + s
	}
	if (right > 0) {
		s += (pad_string.repeat(Math.ceil(right / pad_string.length)).substr(0,right))
	}
	return s;
}

module.exports = {
	str_pad, 
	STR_PAD_RIGHT, 
	STR_PAD_LEFT, 
	STR_PAD_BOTH
}