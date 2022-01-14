
const {ctype_punct} = require("../function/ctype_punct.js");

test("test ctype_punct()", ()=>{
	expect(ctype_punct("!\"#\x24%&'()*+,-./:;<=>?@[]^_\x60{|}~")).toStrictEqual(true) 
	expect(ctype_punct("\n!@\x60 \n")).toStrictEqual(false) 
	expect(ctype_punct("あ")).toStrictEqual(false) // All multibyte chars are regarded as not puctuations

	// Irregular arguments
	expect(ctype_punct("")).toStrictEqual(false) 
	expect(ctype_punct(null)).toStrictEqual(false) 
	expect(ctype_punct(["!@"])).toStrictEqual(false) 	
})