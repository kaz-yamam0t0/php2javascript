
const {strpos} = require("../function/strpos.js");

test("test strpos()", ()=>{
	expect(strpos("abc","a")).toStrictEqual(0) 
	expect(strpos("abc","b")).toStrictEqual(1) 
	expect(strpos("abc","ab")).toStrictEqual(0) 
	expect(strpos("abc","bc")).toStrictEqual(1) 
	expect(strpos("abc","abc")).toStrictEqual(0) 
	expect(strpos("あいうえお","あ")).toStrictEqual(0) 
	expect(strpos("あいう🐘えお","🐘え")).toStrictEqual(3) 
	expect(strpos("abc","cb")).toStrictEqual(false) 
	expect(strpos("abc","B")).toStrictEqual(false) 
	expect(strpos("abcdef","de",0)).toStrictEqual(3) 
	expect(strpos("abcdef","de",3)).toStrictEqual(3) 
	expect(strpos("abcdef","de",4)).toStrictEqual(false) 	
})