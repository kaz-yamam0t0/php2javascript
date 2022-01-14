
const {strcasecmp} = require("../function/strcasecmp.js");

test("test strcasecmp()", ()=>{
	expect(strcasecmp("hello","hello")).toStrictEqual(0) 
	expect(strcasecmp("HeLLo","hello")).toStrictEqual(0) 
	expect(strcasecmp("hello","hEllO")).toStrictEqual(0) 
	expect(strcasecmp("Yello\n","hello")).toStrictEqual(17) 
	expect(strcasecmp("Yello","hello\n")).toStrictEqual(17) 

	// different results from the case of C language
	expect(strcasecmp("hello\n","Hello")).toStrictEqual(1) 
	expect(strcasecmp("Hello","hello\n")).toStrictEqual(-1) 	
})