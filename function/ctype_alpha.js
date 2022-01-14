/** 
 * Javascript equivalent to php `ctype_alpha`
 * 
 * Check for alphabetic character(s)
 * @see https://www.php.net/manual/en/function.ctype-alpha.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_alpha = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[a-zA-Z]+$/)
}

module.exports = {ctype_alpha}