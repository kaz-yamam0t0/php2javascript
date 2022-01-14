
const {
	array_filter, 
	ARRAY_FILTER_USE_KEY, 
	ARRAY_FILTER_USE_BOTH
} = require("../function/array_filter.js");

test("test array_filter()", ()=>{
	expect(array_filter([1,2,3,5,6],(n)=>n & 1)).toStrictEqual([1,3,5]) 
	expect(array_filter({"a":1,"b":2,"c":3,"d":5,"e":6},(n)=>n & 1)).toStrictEqual({"a":1,"c":3,"d":5}) 

	// without callback
	expect(array_filter(["foo",false,-1,null,"","0",0])).toStrictEqual(["foo",-1]) 	
})