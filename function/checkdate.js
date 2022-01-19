/** 
 * Javascript equivalent to php `checkdate`
 * 
 * Validate a Gregorian date
 * @see https://www.php.net/manual/en/function.checkdate.php
 * 
 * @param int month
 * @param int day
 * @param int year
 * @return bool
 */
const {
	check_date,
} = require("../lib/date_util");


const checkdate = (m, d, y)=>{
	return check_date({y,m,d});
}

module.exports = {checkdate}