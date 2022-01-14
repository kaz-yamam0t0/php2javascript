
const {array_sum} = require("../function/array_sum.js");

test("test array_sum()", ()=>{
	expect(array_sum([1,2,3,4])).toStrictEqual(10) 
	expect(array_sum([1,3,"5"])).toStrictEqual(9) 
	expect(array_sum([1.1,3.4,"5.6"])).toStrictEqual(10.1) 
	expect(array_sum([1.1,3.4,["5.6"]])).toStrictEqual(4.5) // ignore non-numeric values
	expect(array_sum([1.1,3.4,true])).toStrictEqual(5.5) // true will be regarded as 1	
})