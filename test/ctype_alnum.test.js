
const {ctype_alnum} = require("../function/ctype_alnum.js");

test("test ctype_alnum()", ()=>{
	expect(ctype_alnum("abcDE123")).toStrictEqual(true) 
	expect(ctype_alnum("abcDE123#\x24")).toStrictEqual(false) 
	expect(ctype_alnum("abc_dE123")).toStrictEqual(false) 
	expect(ctype_alnum("abc-dE123")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_alnum("")).toStrictEqual(false) 
	expect(ctype_alnum(null)).toStrictEqual(false) 
	expect(ctype_alnum(["abC123"])).toStrictEqual(false) 	
})