/** 
 * Javascript equivalent to php `ctype_cntrl`
 * 
 * Check for control character(s)
 * @see https://www.php.net/manual/en/function.ctype-cntrl.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_cntrl = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[\x00-\x1F]+$/)
}

module.exports = {ctype_cntrl}