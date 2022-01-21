
const {date_sub} = require("../function/date_sub.js");

test("test date_sub()", ()=>{
	let d = new Date(2022,0,21,12,23,34);
	let d2 = date_sub(d, 'P1Y2M3DT1H2M3S');
	
	expect(d).toStrictEqual(d2);
	expect(d.getFullYear()).toStrictEqual(2020);
	expect(d.getMonth() + 1).toStrictEqual(11);
	expect(d.getDate()).toStrictEqual(18);
	expect(d.getHours()).toStrictEqual(11);
	expect(d.getMinutes()).toStrictEqual(21);
	expect(d.getSeconds()).toStrictEqual(31);
})