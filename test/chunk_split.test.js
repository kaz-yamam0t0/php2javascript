
const {chunk_split} = require("../function/chunk_split.js");


test("test chunk_split()", ()=>{
	expect(chunk_split("abcdefghijklmn",4)).toStrictEqual("abcd\r\nefgh\r\nijkl\r\nmn\r\n") 
	expect(chunk_split("abcdefghijklmnop",4)).toStrictEqual("abcd\r\nefgh\r\nijkl\r\nmnop\r\n") 
	expect(chunk_split("abcd\nefghijklmn",4,"\n")).toStrictEqual("abcd\n\nefg\nhijk\nlmn\n") 	
})