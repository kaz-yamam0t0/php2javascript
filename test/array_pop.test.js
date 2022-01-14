
const {array_pop} = require("../function/array_pop.js");

test("test array_pop()", ()=>{
	let _a = null;
	_a = ["orange","banana","apple","raspberry"];
	expect(array_pop(_a)).toStrictEqual("raspberry") 
	expect(_a).toStrictEqual(["orange","banana","apple"])

	_a = [1,"2",3,"4"];
	expect(array_pop(_a)).toStrictEqual("4") 
	expect(_a).toStrictEqual([1,"2",3])

	_a = [[1,2],[3,4],{"a":"b"}];
	expect(array_pop(_a)).toStrictEqual({"a":"b"}) 
	expect(_a).toStrictEqual([[1,2],[3,4]])

	_a = [{"a":"b"},[1,2],[3,4]];
	expect(array_pop(_a)).toStrictEqual([3,4]) 
	expect(_a).toStrictEqual([{"a":"b"},[1,2]])
	
})