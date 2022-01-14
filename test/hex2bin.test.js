
const {hex2bin} = require("../function/hex2bin.js");

test("test hex2bin()", ()=>{
	expect(hex2bin("6578616d706c65206865782064617461")).toStrictEqual("example hex data") 
	expect(hex2bin("e38182f09f9098")).toStrictEqual("あ🐘") 	
})