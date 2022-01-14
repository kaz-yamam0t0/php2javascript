
const {ctype_lower} = require("../function/ctype_lower.js");

test("test ctype_lower()", ()=>{
	expect(ctype_lower("abcde")).toStrictEqual(true) 
	expect(ctype_lower("abcDe")).toStrictEqual(false) 
	expect(ctype_lower("abcde#\x24")).toStrictEqual(false) 
	expect(ctype_lower("abc_de")).toStrictEqual(false) 
	expect(ctype_lower("abc-de")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_lower("")).toStrictEqual(false) 
	expect(ctype_lower(null)).toStrictEqual(false) 
	expect(ctype_lower(["abc"])).toStrictEqual(false) 	
})