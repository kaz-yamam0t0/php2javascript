
const {ctype_alpha} = require("../function/ctype_alpha.js");

test("test ctype_alpha()", ()=>{
	expect(ctype_alpha("abcDE")).toStrictEqual(true) 
	expect(ctype_alpha("abcDE123")).toStrictEqual(false) 
	expect(ctype_alpha("abcDE#\x24")).toStrictEqual(false) 
	expect(ctype_alpha("abc_dE")).toStrictEqual(false) 
	expect(ctype_alpha("abC-dE")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_alpha("")).toStrictEqual(false) 
	expect(ctype_alpha(null)).toStrictEqual(false) 
	expect(ctype_alpha(["abC"])).toStrictEqual(false) 	
})