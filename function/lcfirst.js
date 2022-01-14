/** 
 * Javascript equivalent to php `lcfirst`
 * 
 * Make a string's first character lowercase
 * @see https://www.php.net/manual/en/function.lcfirst.php
 * 
 * @param string s
 * @return string
 */
const lcfirst = (s)=>s.replace(/^([A-Z])/g, (m)=>m.toLowerCase())

module.exports = {lcfirst}