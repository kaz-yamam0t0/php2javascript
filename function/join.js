/** 
 * Javascript equivalent to php `join`
 * 
 * `join` is an alias of `implode`.
 * @see https://www.php.net/manual/en/function.chop.php
 * 
 * @param string separator
 * @param array array
 * @return string
 */
const { implode } = require("./implode");


const join = function() {
	return implode.apply(null, arguments);
}

module.exports = {join}

