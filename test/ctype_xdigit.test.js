
const {ctype_xdigit} = require("../function/ctype_xdigit.js");

test("test ctype_xdigit()", ()=>{
	expect(ctype_xdigit(12345)).toStrictEqual(true) 
	expect(ctype_xdigit("7f")).toStrictEqual(true) 
	expect(ctype_xdigit(123.45)).toStrictEqual(false) 
	expect(ctype_xdigit("7f.45")).toStrictEqual(false) 
	expect(ctype_xdigit("7f#\x24")).toStrictEqual(false) 
	expect(ctype_xdigit("7f_3c")).toStrictEqual(false) 
	expect(ctype_xdigit("7f-3c")).toStrictEqual(false) 
	expect(ctype_xdigit("7,f3c")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_xdigit("")).toStrictEqual(false) 
	expect(ctype_xdigit(null)).toStrictEqual(false) 
	expect(ctype_xdigit(["7f"])).toStrictEqual(false) 	
})