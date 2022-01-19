
const {getdate} = require("../function/getdate.js");


test("test getdate()", ()=>{
	const d = new Date();

	// year date
	const d_ = new Date(d.getFullYear(), 0, 1,0,0,0);
	const yd = ~~((d.getTime() - d_.getTime()) / 86400 / 1000);

	expect(getdate(d)).toEqual(expect.objectContaining({
		seconds: d.getSeconds(),
		minutes: d.getMinutes(),
		hours: d.getHours(),
		mday: d.getDate(),
		mon: d.getMonth() + 1, // 1-12
		year: d.getFullYear(), 
		wday: d.getDay(),
		yday: yd,
		"0" : ~~(d.getTime() / 1000)
	}))
})
