/** 
 * Javascript equivalent to php `in_array`
 * 
 * Checks if a value exists in an array
 * @see https://www.php.net/manual/en/function.in-array.php
 * 
 * @param mixed needle
 * @param array haystack
 * @param bool strict
 * @return bool
 */

const in_array = (needle, haystack, strict=false)=>{
	// if (! Array.isArray(haystack))
	if (typeof haystack !== "object" || haystack === null) {
		throw 'haystack is not an array.';
	}
	const cmp_ = (a,b)=>{
		if (strict) {
			return (a === b);
		} else {
			return (a == b);
		}
	};
	if (Array.isArray(haystack)) {
		return haystack.some((v)=>cmp_(needle, v));
	} else {
		return Object.keys(haystack).some((k)=>cmp_(needle, haystack[k]))
	}
};

module.exports = {in_array}