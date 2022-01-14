
const {range} = require("../function/range.js");

test("test range()", ()=>{
	expect(range(0,4)).toStrictEqual([0,1,2,3,4]) 
	expect(range(0,5,2)).toStrictEqual([0,2,4]) 
	expect(range("a","c")).toStrictEqual(["a","b","c"]) 

	// negative sequences
	expect(range(4,1)).toStrictEqual([4,3,2,1]) 
	expect(range(5,0,-2)).toStrictEqual([5,3,1]) 
	expect(range("c","a")).toStrictEqual(["c","b","a"]) 
	expect(range("E","A",-2)).toStrictEqual(["E","C","A"]) 	
})