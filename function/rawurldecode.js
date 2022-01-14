/** 
 * Javascript equivalent to php `rawurldecode`
 * 
 * Decode URL-encoded strings
 * @see https://www.php.net/manual/en/function.rawurldecode.php
 * 
 * @param string s
 * @return string
 */

const rawurldecode = (s)=>decodeURIComponent(s)

module.exports = {rawurldecode}