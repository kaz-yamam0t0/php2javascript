
const {str_repeat} = require("../function/str_repeat.js");

test("test str_repeat()", ()=>{
	expect(str_repeat("-=",10)).toStrictEqual("-=-=-=-=-=-=-=-=-=-=") 	
})