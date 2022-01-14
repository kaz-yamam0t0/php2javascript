
const {array_unshift} = require("../function/array_unshift.js");

test("test array_unshift()", ()=>{
	let _a = null;
	_a = ["orange","banana","apple","raspberry"];
	expect(array_unshift(_a,"a","b",1,"c")).toStrictEqual(8) 
	expect(_a).toStrictEqual(["a","b",1,"c","orange","banana","apple","raspberry"])

	_a = [1,"2",3,"4"];
	expect(array_unshift(_a,[0,-1],[-2,-3],-4)).toStrictEqual(7) 
	expect(_a).toStrictEqual([[0,-1],[-2,-3],-4,1,"2",3,"4"])

	_a = [[1,2],[3,4],{"a":"b"}];
	expect(array_unshift(_a,{"c":"d"},"e")).toStrictEqual(5) 
	expect(_a).toStrictEqual([{"c":"d"},"e",[1,2],[3,4],{"a":"b"}])
	
})