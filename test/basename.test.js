
const {basename} = require("../function/basename.js");

test("test basename()", ()=>{
	expect(basename("/etc/sudoers.d",".d")).toStrictEqual("sudoers") 
	expect(basename("/etc/sudoers.d")).toStrictEqual("sudoers.d") 
	expect(basename("/etc/passwd")).toStrictEqual("passwd") 
	expect(basename("/etc/")).toStrictEqual("etc") 
	expect(basename(".")).toStrictEqual(".") 
	expect(basename("/")).toStrictEqual("") 	
})