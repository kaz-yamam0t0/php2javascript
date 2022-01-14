/** 
 * Javascript equivalent to php `array_change_key_case`
 * 
 * Changes the case of all keys in an array
 * @see https://www.php.net/manual/en/function.array-change-key-case.php
 * 
 * @param array array
 * @param int case
 * @return array
 */
/**
 * CASE_UPPER : 
 * CASE_LOWER : 
 */
const CASE_UPPER = 0
const CASE_LOWER = 1

const array_change_key_case = (ar, case_flg=CASE_LOWER)=>{
	if (typeof ar !== "object" || ar === null) {
		throw 'value is not an array.';
	}

	if (Array.isArray(ar)) return ar.slice();

	const ret = {};
	Object.keys(ar).forEach(k=>{
		const k_ = case_flg == CASE_UPPER ? k.toUpperCase() : k.toLowerCase();
		ret[k_] = ar[k];
	});
	return ret;
}

module.exports = {
	array_change_key_case, 
	CASE_UPPER, 
	CASE_LOWER
}