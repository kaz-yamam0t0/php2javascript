
const {localtime} = require("../function/localtime.js");


test("test localtime()", ()=>{
	const d = new Date();

	// year date
	const d_ = new Date(d.getFullYear(), 0, 1,0,0,0);
	const yd = ~~((d.getTime() - d_.getTime()) / 86400 / 1000);

	expect(localtime(d, true)).toEqual(expect.objectContaining({
		tm_sec: d.getSeconds(),
		tm_min: d.getMinutes(),
		tm_hour: d.getHours(),
		tm_mday: d.getDate(),
		tm_mon: d.getMonth(), // 0-11
		tm_year: d.getFullYear() - 1900, 
		tm_wday: d.getDay(),
		tm_yday: yd,
	}))
	expect(localtime(d, false)).toEqual(expect.arrayContaining([
		d.getSeconds(),
		d.getMinutes(),
		d.getHours(),
		d.getDate(),
		d.getMonth(), // 0-11
		d.getFullYear() - 1900, 
		d.getDay(),
		yd,
	])) 
})

