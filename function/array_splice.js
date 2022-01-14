/** 
 * Javascript equivalent to php `array_splice`
 * 
 * Remove a portion of the array and replace it with something else
 * @see https://www.php.net/manual/en/function.array-splice.php
 * 
 * @param array &array
 * @param int offset
 * @param ?int length
 * @param mixed replacement
 * @return array
 */

const array_splice = (ar, offset, length=null, replacement=undefined)=>{
	if (! Array.isArray(ar)) throw 'value is not an array.';

	// offset
	if (offset < 0) {
		offset = Math.max(0, ar.length + offset);
	}
	// delete count
	let del_count = 0;
	if (typeof length === "undefined" || length === null) {
		del_count = ar.length - offset;
	} else {
		if (length < 0) {
			del_count = Math.max(0, ar.length + length - offset);
		} else {
			del_count = Math.min(ar.length - offset, length);
		}
	}
	if (replacement) {
		if (Array.isArray(replacement)) {
			return ar.splice(offset, del_count, ...replacement);
		} else {
			return ar.splice(offset, del_count, replacement);
		}
	}
	return ar.splice(offset, del_count);
}

module.exports = {array_splice}