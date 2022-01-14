/** 
 * Javascript equivalent to php `ctype_digit`
 * 
 * Check for numeric character(s)
 * @see https://www.php.net/manual/en/function.ctype-digit.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_digit = (s)=>{
	if (typeof s !== "string" && typeof s !== "number") {
		return false;
	}
	return !!(""+s).match(/^[0-9]+$/)
}


module.exports = {ctype_digit}