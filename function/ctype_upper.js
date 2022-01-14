/** 
 * Javascript equivalent to php `ctype_upper`
 * 
 * Check for uppercase character(s)
 * @see https://www.php.net/manual/en/function.ctype-upper.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_upper = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[A-Z]+$/)
}

module.exports = {ctype_upper}