
const {in_array} = require("../function/in_array.js");

test("test in_array()", ()=>{
	expect(in_array("Irix",["Mac","NT","Irix","Linux"])).toStrictEqual(true) 
	expect(in_array("mac",["Mac","NT","Irix","Linux"])).toStrictEqual(false) 

	// Strict Comparison
	expect(in_array("12.4",["1.1",12.4,1.13],true)).toStrictEqual(false) 
	expect(in_array("1.1",["1.1",12.4,1.13],true)).toStrictEqual(true) 
	expect(in_array(12.4,["1.1",12.4,1.13],true)).toStrictEqual(true) 
	expect(in_array(1.1,["1.1",12.4,1.13],true)).toStrictEqual(false) 

	// Assoc
	expect(in_array("12.4",{"a":"1.1","b":12.4,"c":1.13},true)).toStrictEqual(false) 
	expect(in_array(12.4,{"a":"1.1","b":12.4,"c":1.13},true)).toStrictEqual(true) 
	expect(in_array(1.13,{"a":"1.1","b":12.4,"c":1.13})).toStrictEqual(true) 	
})