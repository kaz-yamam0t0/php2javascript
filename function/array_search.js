/** 
 * Javascript equivalent to php `array_search`
 * 
 * Searches the array for a given value and returns the first corresponding key if successful
 * @see https://www.php.net/manual/en/function.array-search.php
 * 
 * @param mixed needle
 * @param array haystack
 * @param bool strict
 * @return int|string|false
 */

const array_search = (needle, haystack, strict=false)=>{
	// if (! Array.isArray(haystack)) throw 'value is not an array.';
	if (typeof haystack !== "object" || haystack === null) {
		throw 'value is not an array.';
	}

	if (Array.isArray(haystack)) {
		let index = -1;
		
		if (strict) {
			index = haystack.indexOf(needle);
		} else {
			haystack.some((v, index_)=>{
				if (needle == v) {
					index = index_;
					return true;
				}
				return false;
			});
		}
		return index >= 0 ? index : false;
	} else {
		let key = false;
		Object.keys(haystack).some(k=>{
			if (strict == true) {
				if (haystack[k] === needle) {
					key = k;
					return true;
				}
			} else if (strict == false) {
				if (haystack[k] == needle) {
					key = k;
					return true;
				}
			}
			return false;
		});
		return key;
	}
}

module.exports = {array_search}