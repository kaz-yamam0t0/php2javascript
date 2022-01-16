
const {wordwrap} = require("../function/wordwrap.js");


test("test wordwrap()", ()=>{
	expect(wordwrap("The quick brown fox jumped over the lazy dog.",20,"<br />\n")).toStrictEqual("The quick brown fox<br />\njumped over the lazy<br />\ndog.") 
	expect(wordwrap("A very long woooooooooooord.",8,"\n",true)).toStrictEqual("A very\nlong\nwooooooo\nooooord.") 
	expect(wordwrap("A very long wooooooooooooooooord.",8,"\n",true)).toStrictEqual("A very\nlong\nwooooooo\noooooooo\noord.") 
	expect(wordwrap("A very long woooooooooooord.",8,"\n",false)).toStrictEqual("A very\nlong\nwoooooooooooord.") 	
})