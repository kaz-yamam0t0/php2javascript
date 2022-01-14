
const {rtrim} = require("../function/rtrim.js");

test("test rtrim()", ()=>{
	expect(rtrim("\t\tThese are a few words :) ...  ")).toBe("\t\tThese are a few words :) ...") 
	expect(rtrim("\t\tThese are a few words :) ...  "," \t.")).toBe("\t\tThese are a few words :)") 
	expect(rtrim("Hello World","Hdle")).toBe("Hello Wor") 
	expect(rtrim("\tExample string\n","\x00..\x1f")).toBe("\tExample string") 	
})