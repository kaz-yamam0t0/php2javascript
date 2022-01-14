/** 
 * Javascript equivalent to php `array_shift`
 * 
 * Shift an element off the beginning of array
 * @see https://www.php.net/manual/en/function.array-shift.php
 * 
 * @param array &array
 * @return mixed
 */

const array_shift = (ar)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';
	return ar.shift();
}

module.exports = {array_shift}