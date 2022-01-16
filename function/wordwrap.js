/** 
 * Javascript equivalent to php `wordwrap`
 * 
 * Wraps a string to a given number of characters
 * @see https://www.php.net/manual/en/function.wordwrap.php
 * 
 * @param string s
 * @param int width
 * @param string break
 * @param bool cut_long_words
 * @return string
 */

const wordwrap = (s, width=75, break_s="\n", cut_long_words=false)=>{
	if (width <= 0) {
		throw "width must be greater than 0";
	}

	let res = "";
	let buf = "" , 
		buf_space = "";
	while(s.length > 0) {
		let chunk_, s_, space_;
		let m = s.match(/^([^\s\n]+)([\s\n]?)/);
		if (m) {
			[chunk_, s_, space_] = m; 
		} else {
			m = s.match(/^([\s\n]*)([\s\n])/);
			if (m) {
				[chunk_, s_, space_] = m; 
			} else {
				break;
			}
		}
		s = s.substr(chunk_.length);
		if (buf.length + s_.length > width) {
			if (buf) res += buf + break_s;

			while (cut_long_words == true && s_.length > width) {
				res += s_.substr(0, width) + break_s;
				s_ = s_.substr(width);
			}

			buf = s_;
			buf_space = space_;
		} else {
			buf += buf_space;
			buf += s_;
			buf_space = space_;
		}
	}
	if (buf) {
		res += buf;
	}

	return res;
}

module.exports = {wordwrap}