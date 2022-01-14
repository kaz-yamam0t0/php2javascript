
const {array_slice} = require("../function/array_slice.js");

test("test array_slice()", ()=>{
	expect(array_slice(["a","b","c","d","e"],2)).toStrictEqual(["c","d","e"]) 
	expect(array_slice(["a","b","c","d","e"],-2)).toStrictEqual(["d","e"]) 
	expect(array_slice(["a","b","c","d","e"],-2,1)).toStrictEqual(["d"]) 
	expect(array_slice(["a","b","c","d","e"],0,3)).toStrictEqual(["a","b","c"]) 
	expect(array_slice(["a","b","c","d","e"],2,-1)).toStrictEqual(["c","d"]) 

	// irregular arguments
	expect(array_slice(["a","b","c","d","e"],6)).toStrictEqual([]) 
	expect(array_slice(["a","b","c","d","e"],-6)).toStrictEqual(["a","b","c","d","e"]) 
	expect(array_slice(["a","b","c","d","e"],-6,3)).toStrictEqual(["a","b","c"]) 
	expect(array_slice(["a","b","c","d","e"],-6,-3)).toStrictEqual(["a","b"]) 	
})