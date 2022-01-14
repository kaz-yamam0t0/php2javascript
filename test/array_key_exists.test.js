
const {array_key_exists} = require("../function/array_key_exists.js");

test("test array_key_exists()", ()=>{
	expect(array_key_exists(1,[4,5,6])).toStrictEqual(true) 
	expect(array_key_exists(4,[4,5,6])).toStrictEqual(false) 
	expect(array_key_exists("a",{"a":"b","c":"d","e":"f"})).toStrictEqual(true) 
	expect(array_key_exists("g",{"a":"b","c":"d","e":"f"})).toStrictEqual(false) 	
})