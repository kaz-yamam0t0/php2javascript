
const {str_starts_with} = require("../function/str_starts_with.js");

test("test str_starts_with()", ()=>{
	expect(str_starts_with("abc","a")).toStrictEqual(true) 
	expect(str_starts_with("abc","abc")).toStrictEqual(true) 
	expect(str_starts_with("abc","")).toStrictEqual(true) 
	expect(str_starts_with("abc","A")).toStrictEqual(false) 	
})