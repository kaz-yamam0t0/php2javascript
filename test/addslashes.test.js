
const {addslashes} = require("../function/addslashes.js");

test("test addslashes()", ()=>{
	expect(addslashes("Is your name O'Reilly?")).toBe("Is your name O\\'Reilly?") 
	expect(addslashes("\"Web Ninja\"")).toBe("\\\"Web Ninja\\\"") 
	expect(addslashes("\"Web\\ Ninja\"")).toBe("\\\"Web\\\\ Ninja\\\"") 	
})