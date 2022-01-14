
const {array_merge} = require("../function/array_merge.js");

test("test array_merge()", ()=>{
	expect(array_merge(["a","b","c"],["d","e"],["f"])).toStrictEqual(["a","b","c","d","e","f"]) 
	expect(array_merge(["a","b","c"],{"d":"e"},{"d":"f"})).toStrictEqual({"0":"a","1":"b","2":"c","d":"f"}) 
	expect(array_merge({"0":2,"1":4,"color":"red"},["a","b"])).toStrictEqual({"0":2,"1":4,"2":"a","3":"b","color":"red"}) 	
})