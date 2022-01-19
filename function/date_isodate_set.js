/** 
 * Javascript equivalent to php `date_isodate_set`
 * 
 * Alias of DateTime::setISODate
 * @see https://www.php.net/manual/en/function.date-isodate-set.php
 * 
 * @param void
 * @return void
 */
const {
	iso8601_first_date,
} = require("../lib/date_util");

const date_isodate_set = (d=null, year, week=1, day_of_week=1)=>{
	if (! d) d = new Date();

	let d_ = iso8601_first_date(new Date(year, 0,8,0,0,0));
	let t_ = d_.getTime() + ((week - 1) * 7 + day_of_week - 1) * 86400 * 1000;

	d_ = new Date(t_);
	d.setYear(d_.getFullYear());
	d.setMonth(d_.getMonth());
	d.setDate(d_.getDate());

	return d;
};

const date_isodate_get = (year, week=1, day_of_week=1)=>{
	return date_isodate_set(new Date(), year, week ,day_of_week);
};

module.exports = {
	date_isodate_set, 
	date_isodate_get, 
}