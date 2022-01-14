/** 
 * php `substr` with Javascript
 * 
 * Return part of a string
 * @see https://www.php.net/manual/en/function.substr.php
 * 
 * @param string s
 * @param int offset
 * @param ?int length
 * @return string
 */
const substr = (s, offset, length)=>s.substr(offset,length)

module.exports = {substr}