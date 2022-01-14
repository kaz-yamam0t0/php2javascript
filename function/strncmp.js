/** 
 * Javascript equivalent to php `strncmp`
 * 
 * Binary safe string comparison of the first n characters
 * @see https://www.php.net/manual/en/function.strncmp.php
 * 
 * @param string string1
 * @param string string2
 * @param int length
 * @return int
 */

const strncmp = (s1, s2, length)=>{
	const len = Math.min(length, s1.length, s2.length)
	for (let i=0; i<len; i++) {
		if (s1[i] !== s2[i]) {
			return s1.charCodeAt(i) - s2.charCodeAt(i)
		}
	}
	if (len >= length) {
		return 0
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

module.exports = {strncmp}