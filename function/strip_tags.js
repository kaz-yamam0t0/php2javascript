/** 
 * Javascript equivalent to php `strip_tags`
 * 
 * Strip HTML and PHP tags from a string
 * @see https://www.php.net/manual/en/function.strip-tags.php
 * 
 * @param string s
 * @param array|string|null allowed_tags
 * @return string
 */

const strip_tags = (s, allowed_tags=null)=>{
	let allowed = null;
	if (allowed_tags) {
		if (typeof allowed_tags === 'object') {
			if (Array.isArray(allowed_tags)) {
				allowed = allowed_tags;
			} else {
				allowed = Object.values(allowed_tags);
			}
		} else {
			allowed = [];
			Array.from((""+allowed_tags).matchAll(/<([^\s>]+)>/g)).forEach(([_tag, _tagname])=>{
				allowed.push(_tagname);
			})
		}
	}
	return s.replace(/<\/?([^\s>]+)(.*?)>/g, (tag_, tagname_, in_)=>{
		if (allowed && allowed.includes(tagname_)) {
			return tag_;
		}
		return "";
	})
}

module.exports = {strip_tags}