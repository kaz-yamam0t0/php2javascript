
const {number_format} = require("../function/number_format.js");

test("test number_format()", ()=>{
	expect(number_format(1234)).toStrictEqual("1,234") 
	expect(number_format(1234.56)).toStrictEqual("1,235") 
	expect(number_format(1234.56,2,","," ")).toStrictEqual("1 234,56") // French notation
	expect(number_format(1234.5678,2,".","")).toStrictEqual("1234.57") // English notation without thousands separator

	// negative numbers
	expect(number_format(-1234)).toStrictEqual("-1,234") 
	expect(number_format(-1234.56)).toStrictEqual("-1,235") 
	expect(number_format(-1234.56,2,","," ")).toStrictEqual("-1 234,56") // French notation
	expect(number_format(-1234.5678,2,".","")).toStrictEqual("-1234.57") // English notation without thousands separator	
})