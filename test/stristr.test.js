
const {stristr} = require("../function/stristr.js");

test("test stristr()", ()=>{
	expect(stristr("NAME@EXAMPLE.COM","e")).toStrictEqual("E@EXAMPLE.COM") 
	expect(stristr("NAME@EXAMPLE.COM","e",true)).toStrictEqual("NAM") 
	expect(stristr("NAME@EXAMPLE.COM","name")).toStrictEqual("NAME@EXAMPLE.COM") 
	expect(stristr("NAME@EXAMPLE.COM","name",true)).toStrictEqual("") 
	expect(stristr("NAME@EXAMPLE.COM","@example.com")).toStrictEqual("@EXAMPLE.COM") 
	expect(stristr("NAME@EXAMPLE.COM","@example.com",true)).toStrictEqual("NAME") 
	expect(stristr("NAME@EXAMPLE.COM","~")).toStrictEqual(false) 
	expect(stristr("NAME@EXAMPLE.COM","~",true)).toStrictEqual(false) 	
})