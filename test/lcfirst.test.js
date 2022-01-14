
const {lcfirst} = require("../function/lcfirst.js");

test("test lcfirst()", ()=>{
	expect(lcfirst("Hello World!")).toBe("hello World!") 
	expect(lcfirst("HELLO WORLD!")).toBe("hELLO WORLD!") 
	expect(lcfirst("hello world!")).toBe("hello world!") 
	expect(lcfirst("  Hello world!")).toBe("  Hello world!") 	
})