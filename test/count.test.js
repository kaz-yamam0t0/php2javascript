
const {
	count, 
	COUNT_NORMAL, 
	COUNT_RECURSIVE
} = require("../function/count.js");

test("test count()", ()=>{
	expect(count([1,3,5])).toStrictEqual(3) 
	expect(count(["a","c","e"])).toStrictEqual(3) 
	expect(count({"a":"b","c":"d","e":"f"})).toStrictEqual(3) 
	expect(count([1,[3,5]],COUNT_NORMAL)).toStrictEqual(2) 
	expect(count([1,[3,5]],COUNT_RECURSIVE)).toStrictEqual(4) 	
})