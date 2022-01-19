
const {checkdate} = require("../function/checkdate.js");

test("test checkdate()", ()=>{
	expect(checkdate(12,11,2008)).toStrictEqual(true)
	expect(checkdate(30,2,2008)).toStrictEqual(false) 
})