/** 
 * Javascript equivalent to php `rawurlencode`
 * 
 * URL-encode according to RFC 3986
 * @see https://www.php.net/manual/en/function.rawurlencode.php
 * 
 * @param string s
 * @return string
 */

const rawurlencode = (s)=>{
	return encodeURIComponent(s)
				.replace(/[!'\(\)\*]/g, (c)=>'%' + c.charCodeAt(0).toString(16).toUpperCase())
}

module.exports = {rawurlencode}