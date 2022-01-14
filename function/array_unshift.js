/** 
 * Javascript equivalent to php `array_unshift`
 * 
 * Prepend one or more elements to the beginning of an array
 * @see https://www.php.net/manual/en/function.array-unshift.php
 * 
 * @param array &array
 * @param mixed ...args
 * @return int
 */

const array_unshift = (ar, ...args)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';
	return ar.unshift(...args);
}

module.exports = {array_unshift}