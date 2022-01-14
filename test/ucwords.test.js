
const {ucwords} = require("../function/ucwords.js");

test("test ucwords()", ()=>{
	expect(ucwords("hello world!")).toBe("Hello World!") 
	expect(ucwords("HELLO WORLD!")).toBe("HELLO WORLD!") 
	expect(ucwords("HELLO ..woRLD!")).toBe("HELLO ..woRLD!") 
	expect(ucwords("  hello world!")).toBe("  Hello World!") 

	// Separators
	expect(ucwords("hello|world!","|")).toBe("Hello|World!") 
	expect(ucwords("|hello_world!","_|")).toBe("|Hello_World!") 	
})