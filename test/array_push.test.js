
const {array_push} = require("../function/array_push.js");

test("test array_push()", ()=>{
	let _a = null;
	_a = ["orange","banana","apple","raspberry"];
	expect(array_push(_a,"a","b",1,"c")).toStrictEqual(8) 
	expect(_a).toStrictEqual(["orange","banana","apple","raspberry","a","b",1,"c"])

	_a = [1,"2",3,"4"];
	expect(array_push(_a,[0,-1],[-2,-3],-4)).toStrictEqual(7) 
	expect(_a).toStrictEqual([1,"2",3,"4",[0,-1],[-2,-3],-4])

	_a = [[1,2],[3,4],{"a":"b"}];
	expect(array_push(_a,{"c":"d"},"e")).toStrictEqual(5) 
	expect(_a).toStrictEqual([[1,2],[3,4],{"a":"b"},{"c":"d"},"e"])
	
})