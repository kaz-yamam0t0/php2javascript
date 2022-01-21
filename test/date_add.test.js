
const {date_add} = require("../function/date_add.js");

test("test date_add()", ()=>{
	let d = new Date(2022,0,21,12,23,34);
	let d2 = date_add(d, 'P1Y2M3DT1H2M3S');
	
	expect(d).toStrictEqual(d2);
	expect(d.getFullYear()).toStrictEqual(2023);
	expect(d.getMonth() + 1).toStrictEqual(3);
	expect(d.getDate()).toStrictEqual(24);
	expect(d.getHours()).toStrictEqual(13);
	expect(d.getMinutes()).toStrictEqual(25);
	expect(d.getSeconds()).toStrictEqual(37);
})