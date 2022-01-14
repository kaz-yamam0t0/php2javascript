
const {strncmp} = require("../function/strncmp.js");

test("test strncmp()", ()=>{
	expect(strncmp("helLo","hello",3)).toStrictEqual(0) 
	expect(strncmp("Hello","helLo",3)).toStrictEqual(-32) 
	expect(strncmp("hEllo","Hello",3)).toStrictEqual(32) 
	expect(strncmp("Hello\n","hello",0)).toStrictEqual(0) 
	expect(strncmp("Hello\n","hello",6)).toStrictEqual(-32) 
	expect(strncmp("Hello","hello\n",0)).toStrictEqual(0) 
	expect(strncmp("Hello","hello\n",6)).toStrictEqual(-32) 

	// different results from the case of C language
	expect(strncmp("hello\n","hello",7)).toStrictEqual(1) 
	expect(strncmp("hello","hello\n",7)).toStrictEqual(-1) 	
})