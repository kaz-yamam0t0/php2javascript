
const {array_keys} = require("../function/array_keys.js");

test("test array_keys()", ()=>{
	expect(array_keys([1,2,3,4,5])).toStrictEqual([0,1,2,3,4]) 
	expect(array_keys({"a":"b","c":"d","e":"f"})).toStrictEqual(["a","c","e"]) 
	expect(array_keys({"a":"b","c":"d","e":"f","g":[1,2,3]})).toStrictEqual(["a","c","e","g"]) 

	// with $search_value
	expect(array_keys([1,2,3,"3",5],3)).toStrictEqual([2,3]) 
	expect(array_keys([1,2,3,"3",5],3,true)).toStrictEqual([2]) 
	expect(array_keys([1,2,3,"3",5],"3",true)).toStrictEqual([3]) 
	expect(array_keys({"a":"b","c":"b","e":"1"},"b")).toStrictEqual(["a","c"]) 
	expect(array_keys({"a":"b","c":"b","e":"1"},"1",true)).toStrictEqual(["e"]) 
	expect(array_keys({"a":"b","c":"b","e":"1"},1,true)).toStrictEqual([]) 	
})