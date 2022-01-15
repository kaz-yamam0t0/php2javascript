
const {
	html_entity_decode, 
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
} = require("../function/html_entity_decode.js");


test("test html_entity_decode()", ()=>{

	// Tests for quotes
	expect(html_entity_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_QUOTES)).toStrictEqual("<a href='test'>\"Test\"</a>") 
	expect(html_entity_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_COMPAT)).toStrictEqual("<a href=&#039;test&#039;>\"Test\"</a>") 
	expect(html_entity_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_NOQUOTES)).toStrictEqual("<a href=&#039;test&#039;>&quot;Test&quot;</a>") 

	// HTML entities tests for ENT_HTML401
	expect(html_entity_decode("&copy;",ENT_HTML401,"utf-8")).toStrictEqual("\xa9") 
	expect(html_entity_decode("&plus;",ENT_HTML401,"utf-8")).toStrictEqual("&plus;") 
	expect(html_entity_decode("&divide;",ENT_HTML401,"utf-8")).toStrictEqual("\xf7") 

	// HTML entities tests for ENT_XML1
	expect(html_entity_decode("&copy;",ENT_XML1,"utf-8")).toStrictEqual("&copy;") 
	expect(html_entity_decode("&plus;",ENT_XML1,"utf-8")).toStrictEqual("&plus;") 
	expect(html_entity_decode("&divide;",ENT_XML1,"utf-8")).toStrictEqual("&divide;") 

	// HTML entities tests for ENT_XHTML
	expect(html_entity_decode("&copy;",ENT_XHTML,"utf-8")).toStrictEqual("\xa9") 
	expect(html_entity_decode("&plus;",ENT_XHTML,"utf-8")).toStrictEqual("&plus;") 
	expect(html_entity_decode("&divide;",ENT_XHTML,"utf-8")).toStrictEqual("\xf7") 

	// HTML entities tests for ENT_HTML5
	expect(html_entity_decode("&copy;",ENT_HTML5,"utf-8")).toStrictEqual("\xa9") 
	expect(html_entity_decode("&plus;",ENT_HTML5,"utf-8")).toStrictEqual("+") 
	expect(html_entity_decode("&divide;",ENT_HTML5,"utf-8")).toStrictEqual("\xf7") 	
})