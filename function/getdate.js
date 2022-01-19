/** 
 * Javascript equivalent to php `getdate`
 * 
 * Get date/time information
 * @see https://www.php.net/manual/en/function.getdate.php
 * 
 * @param ?int timestamp
 * @return array
 */
//
const {
	weeks, 
	months, 
} = require("../lib/date_util");

const getdate = (t=null)=>{
	if (t === null) {
		t = ~~((new Date()).getTime() / 1000);
	}
	const d = ((t instanceof Date) ? t : new Date(~~t * 1000));

	const d_ = new Date(d.getFullYear(), 0, 1,0,0,0);
	const _yd = ~~((d.getTime() - d_.getTime()) / 86400 / 1000);

	const 
		_s = d.getSeconds(), 
		_i = d.getMinutes(),
		_h = d.getHours(),
		_d = d.getDate(),
		_m = d.getMonth(),
		_y = d.getFullYear(),
		_w = d.getDay(), 
		_t = ~~(d.getTime()/1000);

	return {
		"seconds" : _s,
		"minutes" : _i, 
		"hours" : _h,
		"mday" : _d, 
		"wday" : _w, 
		"mon" : _m + 1, 
		"year" : _y,
		"yday" : _yd,
		"weekday" : weeks[_w] , 
		"month" : months[_m],
		"0" : _t, 
	}
}

module.exports = {getdate}