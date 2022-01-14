
const {stripos} = require("../function/stripos.js");

test("test stripos()", ()=>{
	expect(stripos("abc","a")).toStrictEqual(0) 
	expect(stripos("abc","b")).toStrictEqual(1) 
	expect(stripos("abc","ab")).toStrictEqual(0) 
	expect(stripos("abc","bc")).toStrictEqual(1) 
	expect(stripos("abc","abc")).toStrictEqual(0) 
	expect(stripos("abc","A")).toStrictEqual(0) 
	expect(stripos("abc","B")).toStrictEqual(1) 
	expect(stripos("abc","AB")).toStrictEqual(0) 
	expect(stripos("abc","BC")).toStrictEqual(1) 
	expect(stripos("abc","bC")).toStrictEqual(1) 
	expect(stripos("abc","AbC")).toStrictEqual(0) 
	expect(stripos("あいうえお","あ")).toStrictEqual(0) 
	expect(stripos("あいう🐘えお","🐘え")).toStrictEqual(3) 
	expect(stripos("abc","cb")).toStrictEqual(false) 
	expect(stripos("abcdef","De",0)).toStrictEqual(3) 
	expect(stripos("abcdef","dEF",3)).toStrictEqual(3) 
	expect(stripos("abcdef","DeF",4)).toStrictEqual(false) 	
})