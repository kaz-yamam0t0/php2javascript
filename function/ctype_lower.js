/** 
 * Javascript equivalent to php `ctype_lower`
 * 
 * Check for lowercase character(s)
 * @see https://www.php.net/manual/en/function.ctype-lower.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_lower = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[a-z]+$/)
}


module.exports = {ctype_lower}