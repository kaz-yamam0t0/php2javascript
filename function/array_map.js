/** 
 * Javascript equivalent to php `array_map`
 * 
 * Applies the callback to the elements of the given arrays
 * @see https://www.php.net/manual/en/function.array-map.php
 * 
 * @param ?callable callback
 * @param array array
 * @param array ...args
 * @return array
 */

const array_map = (callback, ar, ...args)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';

	return ar.slice().map((v, index)=>{
		let args_ = [v];
		args.forEach((a)=>{
			args_.push(a[index] || undefined);
		});

		return callback.apply(0, args_);
	});
}

module.exports = {array_map}