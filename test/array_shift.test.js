
const {array_shift} = require("../function/array_shift.js");

test("test array_shift()", ()=>{
	let _a = null;
	_a = ["orange","banana","apple","raspberry"];
	expect(array_shift(_a)).toStrictEqual("orange") 
	expect(_a).toStrictEqual(["banana","apple","raspberry"])

	_a = [1,"2",3,"4"];
	expect(array_shift(_a)).toStrictEqual(1) 
	expect(_a).toStrictEqual(["2",3,"4"])

	_a = [[1,2],[3,4],{"a":"b"}];
	expect(array_shift(_a)).toStrictEqual([1,2]) 
	expect(_a).toStrictEqual([[3,4],{"a":"b"}])

	_a = [{"a":"b"},[1,2],[3,4]];
	expect(array_shift(_a)).toStrictEqual({"a":"b"}) 
	expect(_a).toStrictEqual([[1,2],[3,4]])
	
})