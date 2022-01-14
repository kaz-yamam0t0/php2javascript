
const {array_splice} = require("../function/array_splice.js");

test("test array_splice()", ()=>{
	let _a = null;
	_a = ["red","green","blue","yellow"];
	expect(array_splice(_a,2)).toStrictEqual(["blue","yellow"]) 
	expect(_a).toStrictEqual(["red","green"])

	_a = ["red","green","blue","yellow"];
	expect(array_splice(_a,1,-1)).toStrictEqual(["green","blue"]) 
	expect(_a).toStrictEqual(["red","yellow"])

	_a = ["red","green","blue","yellow"];
	expect(array_splice(_a,1,4,"orange")).toStrictEqual(["green","blue","yellow"]) 
	expect(_a).toStrictEqual(["red","orange"])

	_a = ["red","green","blue","yellow"];
	expect(array_splice(_a,-1,1,["black","maroon"])).toStrictEqual(["yellow"]) 
	expect(_a).toStrictEqual(["red","green","blue","black","maroon"])
	
})