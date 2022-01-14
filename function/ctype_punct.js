/** 
 * Javascript equivalent to php `ctype_punct`
 * 
 * Check for any printable character which is not whitespace or an
 *    alphanumeric character
 * @see https://www.php.net/manual/en/function.ctype-punct.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_punct = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[!"#$%&'\(\)\*\+,\-\./:;<\=>\?@\[\\\]^_\`\{\|\}\~]+$/)
}

//

module.exports = {ctype_punct}