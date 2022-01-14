
const {array_values} = require("../function/array_values.js");

test("test array_values()", ()=>{
	expect(array_values([11,22,33,44])).toStrictEqual([11,22,33,44]) 
	expect(array_values({"a":11,"b":22,"c":33,"d":44})).toStrictEqual([11,22,33,44]) // Actually returned order is not always same	
})