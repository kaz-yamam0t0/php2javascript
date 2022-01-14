/** 
 * Javascript equivalent to php `array_merge_recursive`
 * 
 * Merge one or more arrays recursively
 * @see https://www.php.net/manual/en/function.array-merge-recursive.php
 * 
 * [Note]
 * This PHP `array_merge_recursive` equivalent supports combination of `Arrays` and `Objects`, but
 * if you want to just concat arrays, Array.prototype.concat() would be lighter.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * 
 * @param array ...args
 * @return array
 */

const array_merge_recursive = (...args)=>{
	const _merge = (args, depth=0)=>{
		// check each variable types
		let obj_flg = false;
		args.forEach((a)=>{
			if (depth == 0 && typeof a !== "object") {
				throw 'arguments must be of type array.'
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
						if (k_ in ret) {
							// if (!Array.isArray(ret[k_])) 
							if (typeof ret[k_] !== "object") {
								ret[k_] = [ ret[k_] ];
							}
							if (typeof a[k_] !== "object") {
								a[k_] = [ a[k_] ];
							}
							ret[k_] = _merge([ret[k_], a[k_]], depth+1);
						} else {
							ret[k_] = a[k_];
						}
					}
				});
			}
		});
		return ret;
	};
	return _merge(args, 0);
}

module.exports = {array_merge_recursive}