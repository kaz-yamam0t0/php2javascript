
const {strip_tags} = require("../function/strip_tags.js");

test("test strip_tags()", ()=>{
	expect(strip_tags("<b>sample</b> text with <div>tags</div>")).toStrictEqual("sample text with tags") 
	expect(strip_tags("<p>Test paragraph.</p><!-- Comment --> <a href=\"#fragment\">Other text</a>","<p><a>")).toStrictEqual("<p>Test paragraph.</p> <a href=\"#fragment\">Other text</a>") 
	expect(strip_tags("<p>Test paragraph.</p><!-- Comment --> <a href=\"#fragment\">Other text</a>",["p","a"])).toStrictEqual("<p>Test paragraph.</p> <a href=\"#fragment\">Other text</a>") 
	expect(strip_tags("<p>Test paragraph.</p>",{"q":"p"})).toStrictEqual("<p>Test paragraph.</p>") // <p> is allowed.
	expect(strip_tags("<p>Test paragraph.</p>",{"p":"q"})).toStrictEqual("Test paragraph.") // <q> is allowed.	
})