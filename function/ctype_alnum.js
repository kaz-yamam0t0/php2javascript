/** 
 * Javascript equivalent to php `ctype_alnum`
 * 
 * Check for alphanumeric character(s)
 * @see https://www.php.net/manual/en/function.ctype-alnum.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_alnum = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[a-zA-Z\d]+$/)
}

module.exports = {ctype_alnum}