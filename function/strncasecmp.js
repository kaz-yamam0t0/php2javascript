/** 
 * Javascript equivalent to php `strncasecmp`
 * 
 * Binary safe case-insensitive string comparison of the first n characters
 * @see https://www.php.net/manual/en/function.strncasecmp.php
 * 
 * @param string string1
 * @param string string2
 * @param int length
 * @return int
 */

const strncasecmp = (s1, s2, length)=>{
	const len = Math.min(length, s1.length, s2.length)
	for (let i=0; i<len; i++) {
		if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
			return s1.toLowerCase().charCodeAt(i) - s2.toLowerCase().charCodeAt(i)
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

module.exports = {strncasecmp}