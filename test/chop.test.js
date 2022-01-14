
const {chop} = require("../function/chop.js");

test("test chop()", ()=>{
	expect(chop("\t\tThese are a few words :) ...  ")).toBe("\t\tThese are a few words :) ...") 
	expect(chop("\t\tThese are a few words :) ...  "," \t.")).toBe("\t\tThese are a few words :)") 
	expect(chop("Hello World","Hdle")).toBe("Hello Wor") 
	expect(chop("\tExample string\n","\x00..\x1f")).toBe("\tExample string") 	
})