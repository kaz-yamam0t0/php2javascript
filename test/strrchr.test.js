
const {strrchr} = require("../function/strrchr.js");

test("test strrchr()", ()=>{
	expect(strrchr("/usr/bin:/bin:/usr/local/bin",":")).toStrictEqual(":/usr/local/bin") 
	expect(strrchr("aaa\nbbbb\ncccccc","\n")).toStrictEqual("\ncccccc") 
	expect(strrchr("/www/public_html/index.html","/")).toStrictEqual("/index.html") 
	expect(strrchr("abc","d")).toStrictEqual(false) 	
})