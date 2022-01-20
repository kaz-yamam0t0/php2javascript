
/** 
 * Javascript equivalent to php `date`
 * 
 * Format a local time/date (Some formats are not supported)
 * @see https://www.php.net/manual/en/function.date.php
 * 
 * @param string format
 * @param ?int|Date timestamp
 * @return string
 */
const {
	format_params,
} = require("../lib/date_util");


const date = (format, t=null)=>{
	if (t === null) {
		t = ~~((new Date()).getTime() / 1000);
	}
	const d = ((t instanceof Date) ? t : new Date(~~t * 1000));

	// convert to UTC
	// d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);

	return format.replace(/(.?)([a-zA-Z])/g, (_s,s,f)=>{
		if (!(f in format_params)) {
			return s + f;
		} 
		if (s == "\\") {
			return f;
		}
		return s + format_params[f](d);
	});
}

module.exports = {date}