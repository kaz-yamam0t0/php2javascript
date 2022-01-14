
const {array_map} = require("../function/array_map.js");

test("test array_map()", ()=>{
	expect(array_map((n)=>n * n * n,[1,2,3,4,5])).toStrictEqual([1,8,27,64,125]) 
	expect(array_map((n,m)=>[n,m],[1,2,3],["uno","dos","tres"])).toStrictEqual([[1,"uno"],[2,"dos"],[3,"tres"]]) 	
})