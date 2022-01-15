
const {
	htmlentities, 
	ENT_COMPAT, 
	ENT_QUOTES, 
	ENT_NOQUOTES, 
	ENT_IGNORE, 
	ENT_DISALLOWED, 
	ENT_SUBSTITUTE, 
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5
} = require("../function/htmlentities.js");


test("test htmlentities()", ()=>{

	// Tests for quotes
	expect(htmlentities("<a href='test'>\"Test\"</a>",ENT_QUOTES)).toStrictEqual("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;") 
	expect(htmlentities("<a href='test'>\"Test\"</a>",ENT_COMPAT)).toStrictEqual("&lt;a href='test'&gt;&quot;Test&quot;&lt;/a&gt;") 
	expect(htmlentities("<a href='test'>\"Test\"</a>",ENT_NOQUOTES)).toStrictEqual("&lt;a href='test'&gt;\"Test\"&lt;/a&gt;") 

	// htmlentities() will issue a warning with ENT_SUBSTITUTE and a multi-byte encoding other than UTF-8
	// expect(htmlentities("あいうえお<>",ENT_SUBSTITUTE,"Shift_JIS")).toStrictEqual("あいうえお&lt;&gt;") 

	// HTML entities tests for ENT_HTML401
	expect(htmlentities("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&amp;") 
	expect(htmlentities("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&quot;") 
	expect(htmlentities("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&amp;apos;") 
	expect(htmlentities("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&lt;") 
	expect(htmlentities("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&gt;") 
	expect(htmlentities("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&#x26;") 
	expect(htmlentities("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toStrictEqual("&amp;plus;") 
	expect(htmlentities("\xa9",ENT_HTML401,"utf-8",false)).toStrictEqual("&copy;") 
	expect(htmlentities("+",ENT_HTML401,"utf-8",false)).toStrictEqual("+") 
	expect(htmlentities("\xf7",ENT_HTML401,"utf-8",false)).toStrictEqual("&divide;") 

	// HTML entities tests for ENT_XML1
	expect(htmlentities("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&amp;") 
	expect(htmlentities("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&quot;") 
	expect(htmlentities("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&apos;") 
	expect(htmlentities("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&lt;") 
	expect(htmlentities("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&gt;") 
	expect(htmlentities("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&#x26;") 
	expect(htmlentities("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toStrictEqual("&amp;plus;") 
	expect(htmlentities("\xa9",ENT_XML1,"utf-8",false)).toStrictEqual("\xa9") 
	expect(htmlentities("+",ENT_XML1,"utf-8",false)).toStrictEqual("+") 
	expect(htmlentities("\xf7",ENT_XML1,"utf-8",false)).toStrictEqual("\xf7") 

	// HTML entities tests for ENT_XHTML
	expect(htmlentities("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&amp;") 
	expect(htmlentities("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&quot;") 
	expect(htmlentities("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&apos;") 
	expect(htmlentities("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&lt;") 
	expect(htmlentities("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&gt;") 
	expect(htmlentities("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&#x26;") 
	expect(htmlentities("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toStrictEqual("&amp;plus;") 
	expect(htmlentities("\xa9",ENT_XHTML,"utf-8",false)).toStrictEqual("&copy;") 
	expect(htmlentities("+",ENT_XHTML,"utf-8",false)).toStrictEqual("+") 
	expect(htmlentities("\xf7",ENT_XHTML,"utf-8",false)).toStrictEqual("&divide;") 

	// HTML entities tests for ENT_HTML5
	expect(htmlentities("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&amp;") 
	expect(htmlentities("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&quot;") 
	expect(htmlentities("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&apos;") 
	expect(htmlentities("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&lt;") 
	expect(htmlentities("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&gt;") 
	expect(htmlentities("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&#x26;") 
	expect(htmlentities("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toStrictEqual("&plus;") 
	expect(htmlentities("\xa9",ENT_HTML5,"utf-8",false)).toStrictEqual("&copy;") 
	expect(htmlentities("+",ENT_HTML5,"utf-8",false)).toStrictEqual("&plus;") 
	expect(htmlentities("\xf7",ENT_HTML5,"utf-8",false)).toStrictEqual("&divide;") 	
})