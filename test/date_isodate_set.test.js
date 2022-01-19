
const {date_isodate_set} = require("../function/date_isodate_set.js");

test("test date_isodate_set()", ()=>{
	const d = date_isodate_set(new Date(), 2021, 1, 2);
	expect(d.getFullYear()).toStrictEqual(2021);
	expect(d.getMonth() + 1).toStrictEqual(1);
	expect(d.getDate()).toStrictEqual(4);
})