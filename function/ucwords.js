/** 
 * Javascript equivalent to php `ucwords`
 * 
 * Uppercase the first character of each word in a string
 * @see https://www.php.net/manual/en/function.ucwords.php
 * 
 * @param string s
 * @param string separators
 * @return string
 */
const ucwords = (s, separators=" \t\r\n\f\v")=>{
	const sep = ""+(separators || "")
	return s.replace(/(^|.)([a-z])/g, (m,m1,m2)=>{
		if ((m1||"").length <= 0 || sep.indexOf(m1) >= 0) {
			return (m1||"") + m2.toUpperCase()
		} else {
			return m
		}
	})
}

module.exports = {ucwords}