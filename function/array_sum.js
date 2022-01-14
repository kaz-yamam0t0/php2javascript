/** 
 * Javascript equivalent to php `array_sum`
 * 
 * Calculate the sum of values in an array
 * @see https://www.php.net/manual/en/function.array-sum.php
 * 
 * @param array array
 * @return int|float
 */

const array_sum = (ar)=>{
	if (typeof ar !== "object" || ar === null) {
		throw 'value is not an array.';
	}
	if (!Array.isArray(ar)) {
		ar = Object.values(ar);
	}
	return ar.reduce((sum, v)=>{
		if (typeof v === 'object') return sum;
		return sum + (+v);
	}, 0);
}

module.exports = {array_sum}