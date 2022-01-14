/** 
 * Javascript equivalent to php `array_slice`
 * 
 * Extract a slice of the array
 * @see https://www.php.net/manual/en/function.array-slice.php
 * 
 * @param array array
 * @param int offset
 * @param ?int length
 * @param bool preserve_keys (ignored : Javascript object doesn't maitain the elements' order)
 * @return array
 */

const array_slice = (ar, offset, length=undefined)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';

	// offset
	if (offset < 0) {
		offset = Math.max(0, ar.length + offset);
	}

	// end
	let end = 0;
	if (typeof length === "undefined" || length === null) {
		end = ar.length;
	} else {
		if (length < 0) {
			end = ar.length + length;
		} else {
			end = offset + length;
		}
	}
	return ar.slice(offset, end);
}

module.exports = {array_slice}