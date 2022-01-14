
const {ctype_print} = require("../function/ctype_print.js");

test("test ctype_print()", ()=>{
	expect(ctype_print("abcde ")).toStrictEqual(true) 
	expect(ctype_print("\nabc \n")).toStrictEqual(false) 
	expect(ctype_print("あ")).toStrictEqual(false) // All multibyte chars are not regarded as printable

	// Irregular arguments
	expect(ctype_print("")).toStrictEqual(false) 
	expect(ctype_print(null)).toStrictEqual(false) 
	expect(ctype_print(["abc"])).toStrictEqual(false) 	
})