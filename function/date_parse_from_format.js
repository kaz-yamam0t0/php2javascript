/** 
 * Javascript equivalent to php `date_parse_from_format`
 * 
 * Get info about given date formatted according to the specified format
 * @see https://www.php.net/manual/en/function.date-parse-from-format.php
 * 
 * @param string format
 * @param string datetime
 * @return array
 */

const {
	parse_from_format, 
} = require("../lib/date_format_parser");

const date_parse_from_format = (format, datetime)=>{
	const data = parse_from_format(format, datetime);
	const d = data.dt;
	return {
		"year"   : d.getFullYear(),
		"month"  : (d.getMonth() + 1),
		"day"    : d.getDate(),
		"hour"   : d.getHours(),
		"minute" : d.getMinutes(),
		"second" : d.getSeconds(), 
		//"fraction" : d.getMilliseconds(), 
		//"warning_count" : 0,
		//"warnings" : [],
		//"error_count" : 0,
		//"errors" : [],
		//"is_localtime" : false,
	};
}

module.exports = {date_parse_from_format}