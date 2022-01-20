/** 
 * Javascript equivalent to php `strtotime`
 * 
 * Parse about any English textual datetime description into a Unix timestamp
 * @see https://www.php.net/manual/en/function.strtotime.php
 * 
 * Original source is following:
 * @see https://github.com/php/php-src/blob/master/ext/date/lib/parse_date.re
 * @see https://github.com/php/php-src/blob/master/ext/date/lib/parse_date.c
 * 
 * @param string datetime
 * @param ?int baseTimestamp
 * @return int|false
 */
const {
	parse,
} = require("../lib/date_parser");

const strtotime = (datetime, t=null)=>{
	const data = parse(datetime, t);
	return data.t;
}


module.exports = {strtotime}