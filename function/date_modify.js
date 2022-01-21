/** 
 * Javascript equivalent to php `date_modify`
 * 
 * Alters the timestamp
 * @see https://www.php.net/manual/en/function.date-modify.php
 * 
 * @param Date d
 * @param int|string $interval
 * @return Date
 */
const {
	parse, 
} = require("../lib/date_parser");

const date_modify = (d, interval_t)=>{
	if (!(d instanceof Date)) {
		throw 'arguments are not Date instances';
	}
	if (typeof interval_t === 'number') {
		d.setTime(d.getTime() + interval_t);
	} else if (typeof interval_t === "string") {
		const data = parse(interval_t, d);
		const dt = data.dt;
		d.setTime(dt.getTime());
	} else {
		throw 'unknown interval format';
	}

	return d;
}


module.exports = {date_modify}