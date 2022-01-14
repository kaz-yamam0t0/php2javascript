/** 
 * Javascript equivalent to php `count`
 * 
 * Counts all elements in an array or in a Countable object
 * @see https://www.php.net/manual/en/function.count.php
 * 
 * @param Countable|array value
 * @param int mode
 * @return int
 */
const {
	COUNT_NORMAL, 
	COUNT_RECURSIVE,
} = require('../lib/const');

const count = (value, mode=COUNT_NORMAL)=>{
	if (typeof value === 'object') {
		if (! Array.isArray(value)) {
			value = Object.values(value);
		}
	}
	if (! Array.isArray(value)) {
		throw 'value is not an array';
	}
	if (mode != COUNT_RECURSIVE) {
		return value.length;
	} 
	let cnts = 0;
	value.forEach((item)=>{
		cnts ++;
		if (Array.isArray(item)) {
			cnts += count(item,mode);
		}
	});
	return cnts;
};

module.exports = {
	count, 
	COUNT_NORMAL, 
	COUNT_RECURSIVE
}