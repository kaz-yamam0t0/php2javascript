
const {bin2hex} = require("../function/bin2hex.js");

test("test bin2hex()", ()=>{
	expect(bin2hex("\x00\n\r")).toStrictEqual("000a0d") 
	expect(bin2hex("あ🐘")).toStrictEqual("e38182f09f9098") 	
})