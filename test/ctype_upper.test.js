
const {ctype_upper} = require("../function/ctype_upper.js");

test("test ctype_upper()", ()=>{
	expect(ctype_upper("ABCDE")).toStrictEqual(true) 
	expect(ctype_upper("ABcDE")).toStrictEqual(false) 
	expect(ctype_upper("ABCDE#\x24")).toStrictEqual(false) 
	expect(ctype_upper("ABC_DE")).toStrictEqual(false) 
	expect(ctype_upper("ABC-DE")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_upper("")).toStrictEqual(false) 
	expect(ctype_upper(null)).toStrictEqual(false) 
	expect(ctype_upper(["ABC"])).toStrictEqual(false) 	
})