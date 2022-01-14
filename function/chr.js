/** 
 * Javascript equivalent to php `chr`
 * 
 * Generate a single-byte string from a number
 * @see https://www.php.net/manual/en/function.chr.php
 * 
 * @param int codepoint
 * @return string
 */
const chr = (codepoint)=>{
	while(codepoint < 0) codepoint += 256
	codepoint %= 256
	return String.fromCharCode(codepoint)
}

module.exports = {chr}