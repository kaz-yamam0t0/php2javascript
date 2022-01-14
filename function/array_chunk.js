/** 
 * Javascript equivalent to php `array_chunk`
 * 
 * Split an array into chunks
 * @see https://www.php.net/manual/en/function.array-chunk.php
 * 
 * @param array array
 * @param int length
 * @param bool preserve_keys (Only when `array` is an object)
 * @return array
 */

const array_chunk = (ar, length, preserve_keys=false)=>{
	if (typeof ar !== "object" || ar === null) {
		throw 'value is not an array.';
	}
	if (Array.isArray(ar)) {
		const len = ar.length;
		const ret = [];
		for (let pos=0; pos < len; pos += length) {
			const end = Math.min(len, pos + length);
			ret.push( ar.slice(pos, end) );
		}
		return ret;
	} else {
		const keys = Object.keys(ar);
		const len = keys.length;
		const ret = [];

		for (let pos=0; pos < len; pos += length) {
			const end = Math.min(len, pos + length);

			const ret_ = preserve_keys ? {} : [];
			keys.slice(pos, end).forEach(k=>{
				if (preserve_keys) {
					ret_[k] = ar[k];
				} else {
					ret_.push(ar[k]);
				}
			});
			ret.push(ret_);
		}
		return ret;
	}
}

module.exports = {array_chunk}