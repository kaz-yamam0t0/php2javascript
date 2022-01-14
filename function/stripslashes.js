/** 
 * Javascript equivalent to php `stripslashes`
 * 
 * Un-quotes a quoted string
 * @see https://www.php.net/manual/en/function.stripslashes.php
 * 
 * @param string s
 * @return string
 */
const stripslashes = (s)=>s.replace(/(\\)(.)?/, (s_,c1,c2)=>c2||"")

module.exports = {stripslashes}