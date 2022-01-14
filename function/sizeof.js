/** 
 * Javascript equivalent to php `sizeof`
 * 
 * `sizeof` is an alias of `count`.
 * @see https://www.php.net/manual/en/function.sizeof.php
 * 
 * @param Countable|array value
 * @param int mode
 * @return int
 */
const { 
	COUNT_NORMAL, 
	COUNT_RECURSIVE,
	count ,
} = require("./count");


const sizeof = function() {
	return count.apply(null, arguments);
}
 
module.exports = {
	sizeof,
	COUNT_NORMAL, 
	COUNT_RECURSIVE,
}

