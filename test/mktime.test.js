
const {mktime} = require("../function/mktime.js");


test("test mktime()", ()=>{
	const d = new Date(2022,0,19,12,23,34);

	expect(mktime(12,23,34,1,19,2022)).toStrictEqual(~~(d.getTime() / 1000))
})
