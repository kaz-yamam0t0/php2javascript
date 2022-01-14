/** 
 * Javascript equivalent to php `array_merge`
 * 
 * Merge one or more arrays
 * @see https://www.php.net/manual/en/function.array-merge.php
 * 
 * [Note]
 * This PHP `array_merge` equivalent supports combination of `Arrays` and `Objects`, but
 * if you want to just concat arrays, Array.prototype.concat() would be lighter.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * 
 * @param array ...args
 * @return array
 */

const array_merge = (...args)=>{
	// check each variable types
	let obj_flg = false;
	args.forEach((a)=>{
		if (typeof a !== "object") {
			throw 'arguments must be of type array.'
			//return false;
		}
		if (! Array.isArray(a)) {
			obj_flg = true;
		}
	});
	let ret = obj_flg ? {} : [];
	let index = 0;

	args.forEach((a)=>{
		if (Array.isArray(a)) {
			a.forEach((a_) => {
				ret[index++] = a_;
			});
		} else {
			let keys = Object.keys(a);
			keys.sort();
			keys.forEach((k_) => {
				if ((""+k_).match(/^\d+$/)) {
					ret[index++] = a[k_];
				} else {
					ret[k_] = a[k_];
				}
			});
		}
	});
	return ret;
}

module.exports = {array_merge}