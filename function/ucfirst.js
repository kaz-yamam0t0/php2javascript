/** 
 * Javascript equivalent to php `ucfirst`
 * 
 * Make a string's first character uppercase
 * @see https://www.php.net/manual/en/function.ucfirst.php
 * 
 * @param string s
 * @return string
 */
const ucfirst = (s)=>s.replace(/^([a-z])/g, (m)=>m.toUpperCase())

module.exports = {ucfirst}