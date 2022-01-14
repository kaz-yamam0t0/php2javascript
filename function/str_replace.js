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
		/*
		let dst = "";
		for (let i=0,len=s.length; i<len; i++) {
			const index = search.findIndex((s_)=>{
				if (s_ === "") return true;
				return (len - i >= s_.length && s.substr(i,s_.length) === s_);
			});
			if (index >= 0) {
				dst += (Array.isArray(replace) ? (replace[index] || "") : replace);
				i += (search[index].length - 1)
			} else {
				dst += s[i]
			}
		}
		return dst
		*/
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