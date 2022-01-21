
const {date_date_set} = require("../function/date_date_set.js");

test("test date_date_set()", ()=>{
	const d = new Date();
	const d2 = date_date_set(d, 2021,3,20);

	expect(d).toStrictEqual(d2);
	expect(d.getFullYear()).toStrictEqual(2021);
	expect(d.getMonth() + 1).toStrictEqual(3);
	expect(d.getDate()).toStrictEqual(20);
})