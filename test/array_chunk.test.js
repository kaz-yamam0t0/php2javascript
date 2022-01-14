
const {array_chunk} = require("../function/array_chunk.js");

test("test array_chunk()", ()=>{
	expect(array_chunk([1,2,3,4,5],2)).toStrictEqual([[1,2],[3,4],[5]]) 
	expect(array_chunk({"a":1,"b":2,"c":3,"d":4,"e":5},2)).toStrictEqual([[1,2],[3,4],[5]]) 	
})