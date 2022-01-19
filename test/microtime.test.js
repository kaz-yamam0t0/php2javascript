
const {microtime} = require("../function/microtime.js");


test("test microtime()", ()=>{
	expect(~~microtime(true)).toStrictEqual(~~((new Date()).getTime()/ 1000)) 	
})