/** 
 * Javascript equivalent to php `str_starts_with`
 * 
 * Checks if a string starts with a given substring
 * @see https://www.php.net/manual/en/function.str-starts-with.php
 * 
 * @param string haystack
 * @param string needle
 * @return bool
 */

const str_starts_with = (haystack, needle)=>haystack.indexOf(needle) === 0

module.exports = {str_starts_with}