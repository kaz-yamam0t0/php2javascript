/** 
 * php `addslashes` with Javascript
 * 
 * Quote string with slashes
 * @see https://www.php.net/manual/en/function.addslashes.php
 * 
 * @param string s
 * @return string
 */
const addslashes = (s)=>s.replace(/(["'\\])/g, '\\$1')

module.exports = {addslashes}