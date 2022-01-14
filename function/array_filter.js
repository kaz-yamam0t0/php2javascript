/** 
 * Javascript equivalent to php `array_filter`
 * 
 * Filters elements of an array using a callback function
 * @see https://www.php.net/manual/en/function.array-filter.php
 * 
 * @param array array
 * @param ?callable callback
 * @param int mode
 * @return array
 */
/**
 * ARRAY_FILTER_USE_KEY  : pass key as the only argument to callback instead of the value
 * ARRAY_FILTER_USE_BOTH : pass both value and key as arguments to callback instead of the value
 */
const {
	ARRAY_FILTER_USE_KEY, 
	ARRAY_FILTER_USE_BOTH, 
} = require('../lib/const');



const array_filter = (ar, callback=null, mode=0)=>{
	if (typeof ar !== "object") {
		throw 'value is not an array.';
	}
	// default callback
	if (! callback) {
		callback = (v, index)=> {
			if (v === "0") return false;
			return !!v;
		};
	}
	// filter
	const filter_ = (v, k)=>{
		const args = [];
		if (mode != ARRAY_FILTER_USE_KEY) {
			args.push(v);
		} 
		if (mode == ARRAY_FILTER_USE_KEY || mode == ARRAY_FILTER_USE_BOTH) {
			args.push(k);
		} 
		return callback.apply(null, args);
	};
	// apply filter to the array
	if (Array.isArray(ar)) {
		return ar.filter(filter_);
	} else {
		let ret = {};
		Object.keys(ar).forEach((k)=>{
			if (filter_(ar[k], k)) {
				ret[k] = ar[k];
			}
		});
		return ret;
	}
}

module.exports = {
	array_filter, 
	ARRAY_FILTER_USE_KEY, 
	ARRAY_FILTER_USE_BOTH
}