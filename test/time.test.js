
const {time} = require("../function/time.js");


test("test time()", ()=>{
	expect(time()).toStrictEqual(Math.floor((new Date()).getTime()/1000)) 	
})