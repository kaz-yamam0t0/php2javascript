
const {date_create} = require("../function/date_create.js");

test("test date_create()", ()=>{
	const d = date_create('3rd January 2021');
	expect(d.getFullYear()).toStrictEqual(2021);
	expect(d.getMonth() + 1).toStrictEqual(1);
	expect(d.getDate()).toStrictEqual(3);
})