
const {ucfirst} = require("../function/ucfirst.js");

test("test ucfirst()", ()=>{
	expect(ucfirst("hello world!")).toBe("Hello world!") 
	expect(ucfirst("HELLO WORLD!")).toBe("HELLO WORLD!") 
	expect(ucfirst("  hello world!")).toBe("  hello world!") 	
})