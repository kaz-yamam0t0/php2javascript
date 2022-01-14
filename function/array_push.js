/** 
 * Javascript equivalent to php `array_push`
 * 
 * Push one or more elements onto the end of array
 * @see https://www.php.net/manual/en/function.array-push.php
 * 
 * @param array &array
 * @param mixed ...args
 * @return int
 */

const array_push = (ar, ...args)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';
	return ar.push(...args);
}

module.exports = {array_push}