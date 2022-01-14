/** 
 * Javascript equivalent to php `strlen`
 * 
 * Get string length
 * @see https://www.php.net/manual/en/function.strlen.php
 * 
 * @param string s
 * @return int
 */
const strlen = (s)=>(""+(s||"")).length

module.exports = {strlen}