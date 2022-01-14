
const {parse_str} = require("../function/parse_str.js");


test("test parse_str()", ()=>{
	let _a = null;
	_a = {};
	expect(parse_str("first=value&arr[]=foo+bar&arr[]=baz",_a)).toStrictEqual(undefined) 
	expect(_a).toStrictEqual({"first":"value","arr":["foo bar","baz"]})

	_a = {};
	expect(parse_str("a b.c=value",_a)).toStrictEqual(undefined) 
	expect(_a).toStrictEqual({"a_b_c":"value"})

	_a = {};
	expect(parse_str("a b.c[d.e-f_]=value",_a)).toStrictEqual(undefined) 
	expect(_a).toStrictEqual({"a_b_c":{"d.e-f_":"value"}})
	
})