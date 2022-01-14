
const {strtolower} = require("../function/strtolower.js");

test("test strtolower()", ()=>{
	expect(strtolower("Mary Had A Little Lamb and She LOVED It So")).toBe("mary had a little lamb and she loved it so") 	
})