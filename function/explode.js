/** 
 * Javascript equivalent to php `explode`
 * 
 * Split a string by a string
 * @see https://www.php.net/manual/en/function.explode.php
 * 
 * @param string separator
 * @param string s
 * @param int limit 
 * @return array
 */

const explode = (separator, s, limit=2^53)=>{
	let remove_num = 0
	if (limit < 0) {
		remove_num = -limit
		limit = 2^53
	}
	//let ret = s.split(separator, Math.max(1, limit))
	limit = Math.max(1, limit)
	let ret = s.split(separator)
	if (ret.length > limit) {
		ret = [...ret.slice(0,limit-1), ret.slice(limit-1).join(separator)]
	}
	if (remove_num > 0) {
		if (ret.length > remove_num) {
			ret = ret.slice(0, ret.length - remove_num)
		} else {
			ret = []
		}
	} 

	return ret
}

module.exports = {explode}