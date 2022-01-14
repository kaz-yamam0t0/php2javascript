/** 
 * Javascript equivalent to php `ctype_print`
 * 
 * Check for printable character(s)
 * @see https://www.php.net/manual/en/function.ctype-print.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_print = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[\x20-\x7E]+$/)
}

module.exports = {ctype_print}