/** 
 * Javascript equivalent to php `strrchr`
 * 
 * Find the last occurrence of a character in a string
 * @see https://www.php.net/manual/en/function.strrchr.php
 * 
 * @param string haystack
 * @param string needle
 * @return string|false
 */

const strrchr = (haystack, needle)=>{
	const pos = haystack.lastIndexOf(needle[0])
	return pos < 0 ? false : haystack.substr(pos - haystack.length)
}

module.exports = {strrchr}