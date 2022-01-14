
const {
	rsort, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_NATURAL, 
	SORT_FLAG_CASE
} = require("../function/rsort.js");

test("test rsort()", ()=>{
	let _a = null;

	// regular sorting
	_a = ["lemon","orange","banana","apple"];
	expect(rsort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["orange","lemon","banana","apple"])

	_a = [1,4,3,20,5];
	expect(rsort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual([20,5,4,3,1])

	_a = [1,4,3,"20",5];
	expect(rsort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["20",5,4,3,1])


	// sorting with flags
	_a = [1,4,3,"20",5];
	expect(rsort(_a,SORT_STRING)).toStrictEqual(true) 
	expect(_a).toStrictEqual([5,4,3,"20",1])

	_a = ["bCd","Abc","deF","cDE"];
	expect(rsort(_a,SORT_STRING|SORT_FLAG_CASE)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["deF","cDE","bCd","Abc"])

	_a = ["aBc45","Abc123","deF","cDE"];
	expect(rsort(_a,SORT_STRING|SORT_FLAG_CASE)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["deF","cDE","aBc45","Abc123"])

	_a = ["aBc45","Abc123","deF","cDE"];
	expect(rsort(_a,SORT_STRING|SORT_FLAG_CASE|SORT_NATURAL)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["deF","cDE","Abc123","aBc45"])
	
})