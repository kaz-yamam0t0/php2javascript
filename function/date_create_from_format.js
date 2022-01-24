/** 
 * Javascript equivalent to php `date_create_from_format`
 * 
 * Parses a time string according to a specified format
 * @see https://www.php.net/manual/en/datetime.createfromformat.php
 * 
 * @param string format
 * @param string datetime
 * @return Date
 */
const {
	parse_from_format, 
} = require("../lib/date_format_parser");


const date_create_from_format = (format, datetime)=>{
	const data = parse_from_format(format, datetime);
	return data.dt;
}


module.exports = {date_create_from_format}