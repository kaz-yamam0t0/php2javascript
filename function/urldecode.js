/** 
 * Javascript equivalent to php `urldecode`
 * 
 * Decodes URL-encoded string
 * @see https://www.php.net/manual/en/function.urldecode.php
 * 
 * @param string s
 * @return string
 */

const urldecode = (s)=>decodeURIComponent(s.replace('+','%20'))

module.exports = {urldecode}