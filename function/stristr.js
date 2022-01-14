/** 
 * Javascript equivalent to php `stristr`
 * 
 * Case-insensitive strstr
 * @see https://www.php.net/manual/en/function.stristr.php
 * 
 * @param string haystack
 * @param string needle
 * @param bool before_needle
 * @return string|false
 */

const stristr = (haystack, needle, before_needle=false)=>{
	let i = haystack.toLowerCase().indexOf(needle.toLowerCase())
	if (i < 0) return false;
	return before_needle ? haystack.substr(0,i) : haystack.substr(i)
}

module.exports = {stristr}