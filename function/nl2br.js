/** 
 * Javascript equivalent to php `nl2br`
 * 
 * Inserts HTML line breaks before all newlines in a string
 * @see https://www.php.net/manual/en/function.nl2br.php
 * 
 * @param string s
 * @param bool use_xhtml
 * @return string
 */

const nl2br = (s, use_xhtml="true")=>s.replace(/(\n\r?|\r\n?)/g, (s_)=>(use_xhtml ? '<br />':'<br>')+s_)

module.exports = {nl2br}