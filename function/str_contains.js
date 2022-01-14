/** 
 * Javascript equivalent to php `str_contains`
 * 
 * Determine if a string contains a given substring
 * @see https://www.php.net/manual/en/function.str-contains.php
 * 
 * @param string haystack
 * @param string needle
 * @return bool
 */

const str_contains = (haystack, needle)=>haystack.indexOf(needle) >= 0

module.exports = {str_contains}