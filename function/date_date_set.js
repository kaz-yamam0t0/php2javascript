/** 
 * Javascript equivalent to php `date_date_set`
 * 
 *  Sets the date
 * @see https://www.php.net/manual/en/function.date-date-set.php
 * 
 * @param Date dt
 * @param int y
 * @param int m
 * @param int d
 * @return Date
 */

const date_date_set = (dt,y,m,d)=>{
	dt.setYear(y);
	dt.setMonth(m - 1);
	dt.setDate(d);
	return dt;
}

module.exports = {date_date_set}