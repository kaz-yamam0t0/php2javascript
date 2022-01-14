/** 
 * Javascript equivalent to php `urlencode`
 * 
 * URL-encodes string
 * @see https://www.php.net/manual/en/function.urlencode.php
 * 
 * @param string s
 * @return string
 */

const urlencode = (s)=>{
	return encodeURIComponent(s)
				.replace(/[!'\(\)\*\~]/g, (c)=>'%' + c.charCodeAt(0).toString(16).toUpperCase())
				.replace(/%20/g, '+')
}

module.exports = {urlencode}