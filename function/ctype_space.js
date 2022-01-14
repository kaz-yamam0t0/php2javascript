/** 
 * Javascript equivalent to php `ctype_space`
 * 
 * Check for whitespace character(s)
 * @see https://www.php.net/manual/en/function.ctype-space.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_space = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[\n\r \t\x0B\x0C]+$/)
}

module.exports = {ctype_space}