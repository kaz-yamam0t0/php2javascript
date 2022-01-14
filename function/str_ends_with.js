/** 
 * Javascript equivalent to php `str_ends_with`
 * 
 * Checks if a string ends with a given substring
 * @see https://www.php.net/manual/en/function.str-ends-with.php
 * 
 * @param string haystack
 * @param string needle
 * @return bool
 */

const str_ends_with = (haystack, needle)=>{
	if (needle === "") return true
	return haystack.substr(-needle.length) === needle
}

module.exports = {str_ends_with}