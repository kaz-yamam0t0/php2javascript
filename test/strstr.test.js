
const {strstr} = require("../function/strstr.js");

test("test strstr()", ()=>{
	expect(strstr("name@example.com","@")).toStrictEqual("@example.com") 
	expect(strstr("name@example.com","@",true)).toStrictEqual("name") 
	expect(strstr("name@example.com","name")).toStrictEqual("name@example.com") 
	expect(strstr("name@example.com","name",true)).toStrictEqual("") 
	expect(strstr("name@example.com","@example.com")).toStrictEqual("@example.com") 
	expect(strstr("name@example.com","@example.com",true)).toStrictEqual("name") 
	expect(strstr("name@example.com","~")).toStrictEqual(false) 
	expect(strstr("name@example.com","~",true)).toStrictEqual(false) 	
})