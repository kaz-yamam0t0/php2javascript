
const {substr} = require("../function/substr.js");

test("test substr()", ()=>{
	expect(substr("abcdef",1)).toStrictEqual("bcdef") 
	expect(substr("abcdef",1,2)).toStrictEqual("bc") 
	expect(substr("abcdef",-1)).toStrictEqual("f") 
	expect(substr("abcdef",-3,1)).toStrictEqual("d") 	
})