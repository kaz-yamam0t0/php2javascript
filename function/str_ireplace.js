/** 
 * Javascript equivalent to php `str_ireplace`
 * 
 * Case-insensitive version of str_replace
 * @see https://www.php.net/manual/en/function.str-ireplace.php
 * 
 * @param array|string search
 * @param array|string replace
 * @param string|array subject
 * @return string|array
 */

const str_ireplace = (search, replace, s)=>{
	if (Array.isArray(s)) {
		const dst = []
		s.forEach((s_) => {
			dst.push(str_ireplace(search, replace, s_))
		})
		return dst
	}
	if (! Array.isArray(search)) {
		search = [search]
	}
	search.forEach((s_, index)=>{
		r_ = (Array.isArray(replace) ? (replace[index] || "") : replace);

		if (s_ === "") {
			s = r_.repeat(index)
			return
		}

		let dst = "";
		for (let i=0,len=s.length; i<len; i++) {
			if (len - i >= s_.length && s.substr(i, s_.length).toLowerCase() === s_.toLowerCase()) {
				dst += r_
				i += (s_.length - 1)
			} else {
				dst += s[i]
			}
		}
		s = dst;
	});
	return s
}

module.exports = {str_ireplace}