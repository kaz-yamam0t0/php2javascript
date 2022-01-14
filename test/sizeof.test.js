
const {
	sizeof, 
	COUNT_NORMAL, 
	COUNT_RECURSIVE
} = require("../function/sizeof.js");

test("test sizeof()", ()=>{
	expect(sizeof([1,3,5])).toStrictEqual(3) 
	expect(sizeof(["a","c","e"])).toStrictEqual(3) 
	expect(sizeof({"a":"b","c":"d","e":"f"})).toStrictEqual(3) 
	expect(sizeof([1,[3,5]],COUNT_NORMAL)).toStrictEqual(2) 
	expect(sizeof([1,[3,5]],COUNT_RECURSIVE)).toStrictEqual(4) 	
})