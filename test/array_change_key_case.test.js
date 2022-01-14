
const {
	array_change_key_case, 
	CASE_UPPER, 
	CASE_LOWER
} = require("../function/array_change_key_case.js");

test("test array_change_key_case()", ()=>{

	// Array will not be modified
	expect(array_change_key_case([1,2,3])).toStrictEqual([1,2,3]) 
	expect(array_change_key_case([1,2,3],CASE_UPPER)).toStrictEqual([1,2,3]) 

	// Assoc
	expect(array_change_key_case({"FirSt":1,"SecOnd":4})).toStrictEqual({"first":1,"second":4}) 
	expect(array_change_key_case({"FirSt":1,"SecOnd":4},CASE_UPPER)).toStrictEqual({"FIRST":1,"SECOND":4}) 	
})