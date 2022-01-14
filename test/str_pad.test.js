
const {
	str_pad, 
	STR_PAD_RIGHT, 
	STR_PAD_LEFT, 
	STR_PAD_BOTH
} = require("../function/str_pad.js");

test("test str_pad()", ()=>{
	expect(str_pad("Alien",10)).toStrictEqual("Alien     ") 
	expect(str_pad("Alien",10,"-=",STR_PAD_LEFT)).toStrictEqual("-=-=-Alien") 
	expect(str_pad("Alien",10,"_",STR_PAD_BOTH)).toStrictEqual("__Alien___") 
	expect(str_pad("Alien",6,"___")).toStrictEqual("Alien_") 
	expect(str_pad("Alien",3,"*")).toStrictEqual("Alien") 
	expect(str_pad("Alien",16,"1234",STR_PAD_BOTH)).toStrictEqual("12341Alien123412") 	
})