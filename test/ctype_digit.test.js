
const {ctype_digit} = require("../function/ctype_digit.js");

test("test ctype_digit()", ()=>{
	expect(ctype_digit(12345)).toStrictEqual(true) 
	expect(ctype_digit("12345")).toStrictEqual(true) 
	expect(ctype_digit(123.45)).toStrictEqual(false) 
	expect(ctype_digit("123.45")).toStrictEqual(false) 
	expect(ctype_digit("12345#\x24")).toStrictEqual(false) 
	expect(ctype_digit("123_45")).toStrictEqual(false) 
	expect(ctype_digit("123-45")).toStrictEqual(false) 
	expect(ctype_digit("12,345")).toStrictEqual(false) 

	// Irregular arguments
	expect(ctype_digit("")).toStrictEqual(false) 
	expect(ctype_digit(null)).toStrictEqual(false) 
	expect(ctype_digit(["123"])).toStrictEqual(false) 	
})