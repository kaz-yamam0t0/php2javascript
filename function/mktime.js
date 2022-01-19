/** 
 * Javascript equivalent to php `mktime`
 * 
 * Get Unix timestamp for a date
 * @see https://www.php.net/manual/en/function.mktime.php
 * 
 * @param int hour
 * @param ?int minute
 * @param ?int second
 * @param ?int month
 * @param ?int day
 * @param ?int year
 * @return int|false
 */

const mktime = (hour, minute, second, month, day, year)=>{
	const _value = (v, callback)=>{
		if (typeof v === "undefined" || v === null) {
			return callback();
		} else {
			return v;
		}
	};
	const _d = new Date();
	hour = _value(hour, ()=>_d.getHours());
	minute = _value(minute, ()=>_d.getMinutes());
	second = _value(second, ()=>_d.getSeconds());
	year = _value(year, ()=>_d.getFullYear());
	month = _value(month, ()=>_d.getMonth()+1);
	day = _value(day, ()=>_d.getDate());

	return ~~((new Date(year, month-1, day, hour,minute, second,0)).getTime() / 1000);
}

module.exports = {mktime}