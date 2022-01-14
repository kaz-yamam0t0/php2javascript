
const {
	sort, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_NATURAL, 
	SORT_FLAG_CASE
} = require("../function/sort.js");

test("test sort()", ()=>{
	let _a = null;
	_a = ["lemon","orange","banana","apple"];
	expect(sort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["apple","banana","lemon","orange"])

	_a = [1,4,3,20,5];
	expect(sort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual([1,3,4,5,20])

	_a = [1,4,3,"20",5];
	expect(sort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual([1,3,4,5,"20"])

	_a = [1,4,3,"20",5];
	expect(sort(_a,SORT_STRING)).toStrictEqual(true) 
	expect(_a).toStrictEqual([1,"20",3,4,5])

	_a = ["bCd","Abc","deF","cDE"];
	expect(sort(_a,SORT_STRING|SORT_FLAG_CASE)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["Abc","bCd","cDE","deF"])

	_a = ["aBc45","Abc123","deF","cDE"];
	expect(sort(_a,SORT_STRING|SORT_FLAG_CASE)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["Abc123","aBc45","cDE","deF"])

	_a = ["aBc45","Abc123","deF","cDE"];
	expect(sort(_a,SORT_STRING|SORT_FLAG_CASE|SORT_NATURAL)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["aBc45","Abc123","cDE","deF"])
	
})