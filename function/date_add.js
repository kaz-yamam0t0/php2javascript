/** 
 * Javascript equivalent to php `date_add`
 * 
 * Adds an amount of days, months, years, hours, minutes and seconds to a DateTime object.
 * @see https://www.php.net/manual/en/datetime.add.php
 * 
 * @param Date d
 * @param int|string $interval
 * @return Date
 */

const {
	parse, 
} = require("../lib/date_parser");

const date_add = (d, interval_t)=>{
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

module.exports = {date_add}