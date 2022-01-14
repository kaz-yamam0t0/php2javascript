
const {dirname} = require("../function/dirname.js");

test("test dirname()", ()=>{
	expect(dirname("/etc/passwd")).toStrictEqual("/etc") 
	expect(dirname("/etc/")).toStrictEqual("/") 
	expect(dirname(".")).toStrictEqual(".") 
	expect(dirname("/usr/local/lib",2)).toStrictEqual("/usr") 	
})