/** 
 * Javascript equivalent to php `strcasecmp`
 * 
 * Binary safe case-insensitive string comparison
 * @see https://www.php.net/manual/en/function.strcasecmp.php
 * 
 * @param string string1
 * @param string string2
 * @return int
 */

const strcasecmp = (s1, s2)=>{
	const len = Math.min(s1.length, s2.length)
	for (let i=0; i<len; i++) {
		if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
			return s1.toLowerCase().charCodeAt(i) - s2.toLowerCase().charCodeAt(i)
		}
	}
	if (s1.length > s2.length) {
		return 1
		//return s1.charCodeAt(s2.length)
	} else if (s1.length < s2.length) {
		return -1
		//return -s2.charCodeAt(s1.length)
	} else {
		return 0
	}
}

module.exports = {strcasecmp}