/** 
 * Javascript equivalent to php `implode`
 * 
 * Join array elements with a string
 * @see https://www.php.net/manual/en/function.implode.php
 * 
 * @param string separator
 * @param array array
 * @return string
 */

const implode = (separator, a)=>a.join(separator)

module.exports = {implode}