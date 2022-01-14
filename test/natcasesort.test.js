
const {
	natcasesort, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_NATURAL, 
	SORT_FLAG_CASE
} = require("../function/natcasesort.js");

test("test natcasesort()", ()=>{
	let _a = null;
	_a = ["aBc45","abC123","Abc10678","abc1"];
	expect(natcasesort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["abc1","aBc45","abC123","Abc10678"])
	
})