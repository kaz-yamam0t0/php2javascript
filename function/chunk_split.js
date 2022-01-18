/** 
 * Javascript equivalent to php `chunk_split`
 * 
 * Split a string into smaller chunks
 * @see https://www.php.net/manual/en/function.chunk-split.php
 * 
 * @param string s
 * @param int length
 * @param string separator
 * @return string
 */

const chunk_split = (s, length=76, separator="\r\n")=>{
	let res = "";
	for (let pos=0, s_len=s.length; pos < s_len; pos += length) {
		res += s.substr(pos, Math.min(length, s_len - pos)) + separator;
	}
	return res;
}

module.exports = {chunk_split}