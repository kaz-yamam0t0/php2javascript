/** 
 * Javascript equivalent to php `ctype_xdigit`
 * 
 * Check for character(s) representing a hexadecimal digit
 * @see https://www.php.net/manual/en/function.ctype-xdigit.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_xdigit = (s)=>{
	if (typeof s !== "string" && typeof s !== "number") {
		return false;
	}
	return !!(""+s).match(/^[0-9a-fA-F]+$/)
}

module.exports = {ctype_xdigit}