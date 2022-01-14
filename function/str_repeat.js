/** 
 * Javascript equivalent to php `str_repeat`
 * 
 * Repeat a string
 * @see https://www.php.net/manual/en/function.str-repeat.php
 * 
 * @param string s
 * @param int times
 * @return string
 */

const str_repeat = (s, times)=>s.repeat(times)

module.exports = {str_repeat}