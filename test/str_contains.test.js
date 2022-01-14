
const {str_contains} = require("../function/str_contains.js");

test("test str_contains()", ()=>{
	expect(str_contains("abc","a")).toStrictEqual(true) 
	expect(str_contains("abc","b")).toStrictEqual(true) 
	expect(str_contains("abc","ab")).toStrictEqual(true) 
	expect(str_contains("abc","bc")).toStrictEqual(true) 
	expect(str_contains("abc","abc")).toStrictEqual(true) 
	expect(str_contains("あいうえお","あ")).toStrictEqual(true) 
	expect(str_contains("あいう🐘えお","🐘え")).toStrictEqual(true) 
	expect(str_contains("abc","cb")).toStrictEqual(false) 
	expect(str_contains("abc","B")).toStrictEqual(false) 	
})