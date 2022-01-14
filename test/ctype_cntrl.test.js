
const {ctype_cntrl} = require("../function/ctype_cntrl.js");

test("test ctype_cntrl()", ()=>{
	expect(ctype_cntrl("\x00\x01\x02\x03\x04\x05\n\r\t\x08\x0b")).toStrictEqual(true) 
	expect(ctype_cntrl("\x00\x01\x02\x03 ")).toStrictEqual(false) 
	expect(ctype_cntrl("あ")).toStrictEqual(false) // All multibyte chars are regarded as not puctuations

	// Irregular arguments
	expect(ctype_cntrl("")).toStrictEqual(false) 
	expect(ctype_cntrl(null)).toStrictEqual(false) 
	expect(ctype_cntrl(["\n\r\t\x08\x0b"])).toStrictEqual(false) 	
})