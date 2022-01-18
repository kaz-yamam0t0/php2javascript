
const {md5} = require("../function/md5.js");


test("test md5()", ()=>{
	expect(md5("")).toStrictEqual("d41d8cd98f00b204e9800998ecf8427e") 
	expect(md5("abcde")).toStrictEqual("ab56b4d92b40713acc5af89985d4b786") 
	expect(md5("今日はいい天気")).toStrictEqual("bd817371d2b9bf5cc9740069695af96d") 
	expect(md5("😃😃☀️")).toStrictEqual("be0990750a27212be2dc9e364a9edb2c") 

	// php2javascript.md5(string s, true) returns an Uint8Array instance.
	// md5("",true) -> new Uint8Array([0xD4, 0x1D, ...])
	// md5("😃😃☀️",true)  -> new Uint8Array([0xBE, 0x09, ...])
})