/** 
 * Javascript equivalent to php `str_replace`
 * 
 * Replace all occurrences of the search string with the replacement string
 * @see https://www.php.net/manual/en/function.str-replace.php
 * 
 * @param array|string search
 * @param array|string replace
 * @param string|array subject
 * @return string|array
 */

const str_replace = (search, replace, s)=>{
	if (Array.isArray(s)) {
		const dst = []
		s.forEach((s_) => {
			dst.push(str_replace(search, replace, s_))
		})
		return dst
	}
	if (Array.isArray(search)) {
		search.forEach((s_, index) => {
			const r = (Array.isArray(replace) ? (replace[index] || "") : replace);
			s = s.split(s_).join(r)
		})
		return s
	} else {
		if (Array.isArray(replace)) {
			replace = replace[0] || ""
		}
		// return s.replaceAll(search, replace)
		return s.split(search).join(replace)
	}
}

module.exports = {str_replace}