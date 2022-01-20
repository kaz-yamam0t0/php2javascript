
const {date_diff} = require("../function/date_diff.js");

test("test date_create()", ()=>{
	const d = new Date(2022, 0, 10, 12, 23,34 );
	const target_d = new Date(2023, 0, 11, 13, 21,31 );

	expect(date_diff(d, target_d)).toStrictEqual(31625877);
	expect(date_diff(target_d, d)).toStrictEqual(-31625877);
	expect(date_diff(target_d, d, true)).toStrictEqual(31625877);
})