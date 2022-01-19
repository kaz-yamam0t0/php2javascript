
const {idate} = require("../function/idate.js");


test("test idate()", ()=>{
	const d = new Date(2021, 7,10);

	expect(idate("Y",d)).toStrictEqual(2021) 
	expect(idate("y",d)).toStrictEqual(21) 
	expect(idate("m",d)).toStrictEqual(8) 
	expect(idate("d",d)).toStrictEqual(10) 
	expect(idate("n",d)).toStrictEqual(8) 
	expect(idate("j",d)).toStrictEqual(10) 
})