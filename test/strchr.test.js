
const {strchr} = require("../function/strchr.js");

test("test strstr()", ()=>{
	expect(strchr("name@example.com","@")).toStrictEqual("@example.com") 
	expect(strchr("name@example.com","@",true)).toStrictEqual("name") 
	expect(strchr("name@example.com","name")).toStrictEqual("name@example.com") 
	expect(strchr("name@example.com","name",true)).toStrictEqual("") 
	expect(strchr("name@example.com","@example.com")).toStrictEqual("@example.com") 
	expect(strchr("name@example.com","@example.com",true)).toStrictEqual("name") 
	expect(strchr("name@example.com","~")).toStrictEqual(false) 
	expect(strchr("name@example.com","~",true)).toStrictEqual(false) 	
})