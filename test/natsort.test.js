
const {
	natsort, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_NATURAL, 
	SORT_FLAG_CASE
} = require("../function/natsort.js");

test("test natsort()", ()=>{
	let _a = null;
	_a = ["abc45","abc123","abc10678","abc1"];
	expect(natsort(_a)).toStrictEqual(true) 
	expect(_a).toStrictEqual(["abc1","abc45","abc123","abc10678"])
	
})