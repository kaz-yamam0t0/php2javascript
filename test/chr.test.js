
const {chr} = require("../function/chr.js");

test("test chr()", ()=>{
	expect(chr(97)).toBe("a") 
	expect(chr(99)).toBe("c") 

	// Overflow behavior
	// expect(chr(-159)).toBe("a") // Overflow behavior
	// expect(chr(833)).toBe("A") // Overflow behavior	
})