/** 
 * Javascript equivalent to php `array_values`
 * 
 * Return all the values of an array
 * @see https://www.php.net/manual/en/function.array-values.php
 * 
 * @param array array
 * @return array
 */

const array_values = (a)=>{
	if (typeof a !== 'object') {
		throw 'value is not an array';
	}
	if (Array.isArray(a)) {
		return a.slice(); // shallow clone
	} else {
		return Object.values(a);
	}
};

module.exports = {array_values}