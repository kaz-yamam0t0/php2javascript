
const {ctype_graph} = require("../function/ctype_graph.js");

test("test ctype_graph()", ()=>{
	expect(ctype_graph("abc!%de")).toStrictEqual(true) 
	expect(ctype_graph("abc!%de ")).toStrictEqual(false) 
	expect(ctype_graph("\nab!%c \n")).toStrictEqual(false) 
	expect(ctype_graph("あ")).toStrictEqual(false) // All multibyte chars are regarded as not printable

	// Irregular arguments
	expect(ctype_graph("")).toStrictEqual(false) 
	expect(ctype_graph(null)).toStrictEqual(false) 
	expect(ctype_graph(["abc"])).toStrictEqual(false) 	
})