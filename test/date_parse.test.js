
const {date_parse} = require("../function/date_parse.js");


test("test date_parse()", ()=>{

	expect(date_parse("Wednesday 29th December 2021 06:24:12 PM")).toEqual(expect.objectContaining({
		year: 2021,
		month: 12,
		day: 29,
		hour: 18,
		minute: 24,
		second: 12
	}));

})
