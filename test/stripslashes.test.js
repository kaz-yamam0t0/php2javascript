
const {stripslashes} = require("../function/stripslashes.js");

test("test stripslashes()", ()=>{
	expect(stripslashes("\\")).toStrictEqual("") 
	expect(stripslashes("\\ ")).toStrictEqual(" ") 
	expect(stripslashes("Is your name O'reilly?")).toStrictEqual("Is your name O'reilly?") 
	expect(stripslashes("Is your name O\\\\'reilly?")).toStrictEqual("Is your name O\\'reilly?") 	
})