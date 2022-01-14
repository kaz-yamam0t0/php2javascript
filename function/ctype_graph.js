/** 
 * Javascript equivalent to php `ctype_graph`
 * 
 * Check for any printable character(s) except space
 * @see https://www.php.net/manual/en/function.ctype-graph.php
 * 
 * @param mixed text
 * @return bool
 */

const ctype_graph = (s)=>{
	if (typeof s !== "string") {
		return false;
	}
	return !!s.match(/^[\x21-\x7E]+$/)
}

module.exports = {ctype_graph}