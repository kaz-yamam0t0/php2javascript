
const {trim} = require("../function/trim.js");

test("test trim()", ()=>{
	expect(trim("\t\tThese are a few words :) ...  ")).toBe("These are a few words :) ...") 
	expect(trim("\t\tThese are a few words :) ...  "," \t.")).toBe("These are a few words :)") 
	expect(trim("Hello World","Hdle")).toBe("o Wor") 
	expect(trim("\tExample string\n","\x00..\x1f")).toBe("Example string") 	
})