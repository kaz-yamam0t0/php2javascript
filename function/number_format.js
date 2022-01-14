/** 
 * Javascript equivalent to php `number_format`
 * 
 * Format a number with grouped thousands
 * @see https://www.php.net/manual/en/function.number-format.php
 * 
 * @param float num
 * @param int decimals
 * @param ?string decimal_separator
 * @param ?string thousands_separator
 * @return string
 */

const number_format = (num, decimals=0, decimal_separator=".", thousands_separator=",")=>{
	num = 0 + num

	// negative
	if (num < 0) {
		return '-' + number_format(-num, decimals, decimal_separator, thousands_separator);
	}

	// round
	let p = 1
	if (decimals > 0) {
		p = Math.pow(10, decimals)
	}
	num = Math.round(num * p) / p

	// splits the integer part and the decimal part
	let [i_,d_] = (""+num).split(".", 2)
	d_ = ""+(d_ || "");

	// integer
	let parts = [], 
		pos = 0
	if (i_.length % 3 != 0) {
		parts.push(i_.substr(pos ,(i_.length % 3)));
		pos = i_.length % 3
	}
	while(pos < i_.length) {
		parts.push(i_.substr(pos,3));
		pos += 3
	}
	i_ = parts.join(thousands_separator)

	// decimal
	while (d_.length < decimals) d_ += "0"
	if (d_) i_ += (decimal_separator + d_)

	return i_
}

module.exports = {number_format}