
const {ltrim} = require("../function/ltrim.js");

test("test ltrim()", ()=>{
	expect(ltrim("\t\tThese are a few words :) ...  ")).toBe("These are a few words :) ...  ") 
	expect(ltrim("\t\tThese are a few words :) ...  "," \t.")).toBe("These are a few words :) ...  ") 
	expect(ltrim("Hello World","Hdle")).toBe("o World") 
	expect(ltrim("\tExample string\n","\x00..\x1f")).toBe("Example string\n") 	
})