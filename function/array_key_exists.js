/** 
 * Javascript equivalent to php `array_key_exists`
 * 
 * Checks if the given key or index exists in the array
 * @see https://www.php.net/manual/en/function.array-key-exists.php
 * 
 * @param string|int key
 * @param array array
 * @return bool
 */

const array_key_exists = (key, ar)=>{
	if (typeof ar !== "object") {
		throw 'value is not an array.';
	}
	return (key in ar);
}

module.exports = {array_key_exists}