
const {ord} = require("../function/ord.js");

test("test ord()", ()=>{
	expect(ord("\n")).toStrictEqual(10) 
	expect(ord("a")).toStrictEqual(97) 
	expect(ord("あ")).toStrictEqual(227) // code of the first char
	expect(ord("🐘")).toStrictEqual(240) // code of the first char	
})