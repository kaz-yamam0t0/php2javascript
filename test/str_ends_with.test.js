
const {str_ends_with} = require("../function/str_ends_with.js");

test("test str_ends_with()", ()=>{
	expect(str_ends_with("abc","c")).toStrictEqual(true) 
	expect(str_ends_with("abc","abc")).toStrictEqual(true) 
	expect(str_ends_with("abc","b")).toStrictEqual(false) 
	expect(str_ends_with("abc","")).toStrictEqual(true) 
	expect(str_ends_with("abc","C")).toStrictEqual(false) 	
})