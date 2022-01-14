
const {array_search} = require("../function/array_search.js");

test("test array_search()", ()=>{
	expect(array_search("green",["blue","red","green","red"])).toStrictEqual(2) 
	expect(array_search("red",["blue","red","green","red"])).toStrictEqual(1) 

	// Strict mode
	expect(array_search(2,[1,2,3,4])).toStrictEqual(1) 
	expect(array_search("2",[1,2,3,4])).toStrictEqual(1) 
	expect(array_search("2",[1,2,3,4],true)).toStrictEqual(false) 
	expect(array_search("0",[1,0,2,3,4])).toStrictEqual(1) 
	expect(array_search("0",[1,0,2,3,4],true)).toStrictEqual(false) 

	// Assoc
	expect(array_search("2",{"a":1,"b":2,"c":3})).toStrictEqual("b") 
	expect(array_search("2",{"a":1,"b":2,"c":3},true)).toStrictEqual(false) 	
})