
const {implode} = require("../function/implode.js");

test("test implode()", ()=>{
	expect(implode(",",["lastname","email","phone"])).toStrictEqual("lastname,email,phone") 
	expect(implode("hello",[])).toStrictEqual("") // Empty string when using an empty array	
})