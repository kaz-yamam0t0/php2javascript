/** 
 * Javascript equivalent to php `strpos`
 * 
 * Find the position of the first occurrence of a substring in a string
 * @see https://www.php.net/manual/en/function.strpos.php
 * 
 * @param string haystack
 * @param string needle
 * @param int offset
 * @return int|false
 */

const strpos = (haystack, needle, offset=0)=>{
	let i = haystack.indexOf(needle, offset)
	return i >= 0 ? i : false
}

module.exports = {strpos}