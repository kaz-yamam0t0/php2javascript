/** 
 * Javascript equivalent to php `strstr`
 * 
 * Find the first occurrence of a string
 * @see https://www.php.net/manual/en/function.strstr.php
 * 
 * @param string haystack
 * @param string needle
 * @param bool before_needle
 * @return string|false
 */

const strstr = (haystack, needle, before_needle=false)=>{
	let i = haystack.indexOf(needle)
	if (i < 0) return false;
	return before_needle ? haystack.substr(0,i) : haystack.substr(i)
}

module.exports = {strstr}