
const {join} = require("../function/join.js");

test("test join()", ()=>{
	expect(join(",",["lastname","email","phone"])).toStrictEqual("lastname,email,phone") 
	expect(join("hello",[])).toStrictEqual("") // Empty string when using an empty array	
})