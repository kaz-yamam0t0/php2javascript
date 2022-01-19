/** 
 * Javascript equivalent to php `date_parse`
 * 
 * Returns associative array with detailed info about given date/time
 * @see https://www.php.net/manual/en/function.date-parse.php
 * 
 * @param string datetime
 * @return array
 */
const {
	parse, 
} = require("../lib/date_parser");


const date_parse = (datetime)=>{
	const data = parse(datetime);
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

module.exports = {date_parse}