/** 
 * Javascript equivalent to php `array_unique`
 * 
 * Removes duplicate values from an array
 * @see https://www.php.net/manual/en/function.array-unique.php
 * 
 * @param array array
 * @param int flags
 * @return array
 */

/**
 * SORT_REGULAR       : compare items normally (don't change types)
 * SORT_NUMERIC       : compare items numerically
 * SORT_STRING        : compare items as strings
 * SORT_LOCALE_STRING : compare items as strings, based on the current locale. (ignored)
 */
const SORT_REGULAR       = 0
const SORT_NUMERIC       = 1
const SORT_STRING        = 2
const SORT_LOCALE_STRING = 5 // ignored

const array_unique = (ar, flags=SORT_STRING)=>{
	/*
	// Light version

	if (Array.isArray(ar)) {
		return Array.from(new Set(ar));
	} else {
		const map = new Map(Object.keys(ar).map(k=>{
			return [ar[k], k];
		}));
		const keys = Array.from(map.values());

		const ret = {};
		keys.forEach((k)=>{
			ret[k] = ar[k];
		});
		return ret;
	}
	*/
	const filter_ = (v)=>{
		let v_ = v;
		let flags_ = ~~flags;
		if ((flags_ & SORT_STRING) != SORT_STRING && (flags_ & SORT_NUMERIC) != SORT_NUMERIC) {
			if ((""+v).match(/^\d+(\.\d+)?$/g)) {
				flags_ |= SORT_NUMERIC;
			} else {
				flags_ |= SORT_STRING;
			}
		}
		if ((flags_ & SORT_STRING) == SORT_STRING) {
			v_ = ""+v_;
		} else if ((flags_ & SORT_NUMERIC) == SORT_NUMERIC) {
			v_ = +v_;

		}
		return v_;
	};
	if (Array.isArray(ar)) {
		const tmp = [];
		return ar.filter(v=>{
			const v_ = filter_(v);
			if (tmp.includes(v_)) {
				return false;
			}
			tmp.push(v_);
			return true;
		});
	} else {
		const tmp = [];
		const ret = {};
		Object.keys(ar).filter(k=>{
			const v = ar[k];
			const v_ = filter_(v);
			if (tmp.includes(v_)) {
				return false;
			}
			tmp.push(v_);
			return true;
		}).forEach(k=>{
			ret[k] = ar[k];
		});
		return ret;
	}
}

module.exports = {
	array_unique, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_LOCALE_STRING
}