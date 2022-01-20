/** 
 * Javascript equivalent to php `date_create`
 * 
 * Alias of DateTime::__construct
 * @see https://www.php.net/manual/en/function.date-create.php
 * 
 * @param string datetime
 * @param ?DateTimeZone timezone (ignored)
 * @return Date
 */
//
const {
	parse,
} = require("../lib/date_parser");

const date_create = (datetime)=>{
	const data = parse(datetime);
	return data.dt;
}

module.exports = {date_create}