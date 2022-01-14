/** 
 * Javascript equivalent to php `strchr`
 * 
 * `strchr` is an alias of `strstr`.
 * @see https://www.php.net/manual/en/function.strchr.php
 * 
 * @param string haystack
 * @param string needle
 * @param bool before_needle
 * @return string|false
 */
 const { strstr } = require("./strstr");


 const strchr = function() {
	 return strstr.apply(null, arguments);
 }
 
 module.exports = {strchr}
  
 