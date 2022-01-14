
const {array_merge_recursive} = require("../function/array_merge_recursive.js");

test("test array_merge_recursive()", ()=>{
	expect(array_merge_recursive(["a","b","c"],["d","e"],["f"])).toStrictEqual(["a","b","c","d","e","f"]);
	expect(array_merge_recursive(["a","b","c"],{"d":"e"},{"d":"f"})).toStrictEqual({"0":"a","1":"b","2":"c","d":["e","f"]}) ;
	expect(array_merge_recursive({"0":2,"1":4,"color":"red"},["a","b"])).toStrictEqual({"0":2,"1":4,"2":"a","3":"b","color":"red"});
	
	expect(array_merge_recursive(["a","b"],{"c":"d"},{"c":["e","f"]})).toStrictEqual({"0":"a","1":"b","c":["d","e","f"]}) 	;
})