/** 
 * Javascript equivalent to php `array_keys`
 * 
 * Return all the keys or a subset of the keys of an array
 * @see https://www.php.net/manual/en/function.array-keys.php
 * 
 * @param array array
 * @param mixed search_value
 * @param bool strict
 * @return array
 */

const array_keys = (value, search_value=undefined, strict=false)=>{
	if (typeof value !== "object") {
		throw 'value is not an array';
	}
	let keys = null;
	if (Array.isArray(value)) {
		keys = [...value.keys()];
	} else {
		keys = Object.keys(value);
	}
	if (typeof search_value !== "undefined") {
		keys = keys.filter((k)=>{
			const v = value[k];
			if (strict) {
				return v === search_value;
			} 
			return v == search_value;
		})
	}
	return keys;
}


module.exports = {array_keys}