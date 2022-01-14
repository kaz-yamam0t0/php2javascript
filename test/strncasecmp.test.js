
const {strncasecmp} = require("../function/strncasecmp.js");

test("test strncasecmp()", ()=>{
	expect(strncasecmp("hello","hello",3)).toStrictEqual(0) 
	expect(strncasecmp("HeLLo","hello",3)).toStrictEqual(0) 
	expect(strncasecmp("hello","hEllO",3)).toStrictEqual(0) 
	expect(strncasecmp("Yello\n","hello",0)).toStrictEqual(0) 
	expect(strncasecmp("Yello\n","hello",6)).toStrictEqual(17) 
	expect(strncasecmp("Yello","hello\n",0)).toStrictEqual(0) 
	expect(strncasecmp("Yello","hello\n",6)).toStrictEqual(17) 

	// different results from the case of C language
	expect(strncasecmp("hello\n","Hello",7)).toStrictEqual(1) 
	expect(strncasecmp("Hello","hello\n",7)).toStrictEqual(-1) 	
})