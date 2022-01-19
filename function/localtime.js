/** 
 * Javascript equivalent to php `localtime`
 * 
 * Get the local time
 * @see https://www.php.net/manual/en/function.localtime.php
 * 
 * @param ?int timestamp
 * @param bool associative
 * @return array
 */

const localtime = (t=null, associative=false)=>{
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
		_y = d.getFullYear() - 1900,
		_w = d.getDay(),
		//_yd = -1, 
		_isdst = -1; // @TODO Summer Time

	if (associative) {
		return {
			tm_sec: _s, 
			tm_min: _i,
			tm_hour: _h,
			tm_mday: _d,
			tm_mon: _m,
			tm_year: _y,
			tm_wday: _w, 
			tm_yday: _yd,
			tm_isdst: _isdst, 
		}
	} else {
		return [_s, _i, _h, _d, _m, _y, _w,  _yd, _isdst];
	}
}


module.exports = {localtime}