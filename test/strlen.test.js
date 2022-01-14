
const {strlen} = require("../function/strlen.js");

test("test strlen()", ()=>{
	expect(strlen("abcdef")).toStrictEqual(6) 
	expect(strlen(" ab cd ")).toStrictEqual(7) 
	expect(strlen("")).toStrictEqual(0) 	
})