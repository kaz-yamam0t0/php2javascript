/** 
 * Javascript equivalent to php `idate`
 * 
 * Format a local time/date as integer
 * @see https://www.php.net/manual/en/function.idate.php
 * 
 * @param string format
 * @param ?int timestamp
 * @return int|false
 */
//

const {
	format_params,
} = require("../lib/date_util");

const idate = (format, t=null)=>{
	if (t === null) {
		t = ~~((new Date()).getTime() / 1000);
	}
	const d = ((t instanceof Date) ? t : new Date(~~t * 1000));

	if (format.length != 1 || !(format in format_params)) {
		throw 'idate(): Unrecognized date format token';
	}
	let i = `${format_params[format](d) || ""}`;
	if (! i.match(/^\d+$/)) {
		throw 'idate(): Unrecognized date format token';
	}
	i = i.replace(/^0+/,"");
	return ~~i;
}

module.exports = {idate}