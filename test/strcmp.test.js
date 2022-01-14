
const {strcmp} = require("../function/strcmp.js");

test("test strcmp()", ()=>{
	expect(strcmp("hello","hello")).toStrictEqual(0) 
	expect(strcmp("Hello","hello")).toStrictEqual(-32) 
	expect(strcmp("hello","Hello")).toStrictEqual(32) 
	expect(strcmp("Hello\n","hello")).toStrictEqual(-32) 
	expect(strcmp("Hello","hello\n")).toStrictEqual(-32) 

	// different results from the case of C language
	expect(strcmp("hello\n","hello")).toStrictEqual(1) 
	expect(strcmp("hello","hello\n")).toStrictEqual(-1) 	
})