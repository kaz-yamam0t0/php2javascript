/** 
 * Javascript equivalent to php `stripos`
 * 
 * Find the position of the first occurrence of a case-insensitive substring in a string
 * @see https://www.php.net/manual/en/function.stripos.php
 * 
 * @param string haystack
 * @param string needle
 * @param int offset
 * @return int|false
 */

const stripos = (haystack, needle, offset=0)=>{
	let i = haystack.toLowerCase().indexOf(needle.toLowerCase(), offset)
	return i >= 0 ? i : false
}

module.exports = {stripos}