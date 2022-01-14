/** 
 * Javascript equivalent to php `array_pop`
 * 
 * Pop the element off the end of array
 * @see https://www.php.net/manual/en/function.array-pop.php
 * 
 * @param array &array
 * @return mixed
 */

const array_pop = (ar)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';
	return ar.pop();
}

module.exports = {array_pop}