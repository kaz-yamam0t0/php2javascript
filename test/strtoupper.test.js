
const {strtoupper} = require("../function/strtoupper.js");

test("test strtoupper()", ()=>{
	expect(strtoupper("Mary Had A Little Lamb and She LOVED It So")).toBe("MARY HAD A LITTLE LAMB AND SHE LOVED IT SO") 	
})