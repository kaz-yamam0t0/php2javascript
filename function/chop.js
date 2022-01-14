/** 
 * Javascript equivalent to php `chop`
 * 
 * `chop` is an alias of `rtrim`.
 * @see https://www.php.net/manual/en/function.chop.php
 * 
 * @param string s
 * @param string characters
 * @return string
 */
const { rtrim } = require("./rtrim");


const chop = function() {
	return rtrim.apply(null, arguments);
}

module.exports = {chop}
 

