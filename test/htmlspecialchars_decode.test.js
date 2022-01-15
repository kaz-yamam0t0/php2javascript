
const {
	htmlspecialchars_decode, 
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
} = require("../function/htmlspecialchars_decode.js");


test("test htmlspecialchars_decode()", ()=>{

	// Tests for quotes
	expect(htmlspecialchars_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_QUOTES)).toStrictEqual("<a href='test'>\"Test\"</a>") 
	expect(htmlspecialchars_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_COMPAT)).toStrictEqual("<a href=&#039;test&#039;>\"Test\"</a>") 
	expect(htmlspecialchars_decode("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;",ENT_NOQUOTES)).toStrictEqual("<a href=&#039;test&#039;>&quot;Test&quot;</a>") 

	// (Unlike `htmlspecialchars`, )`htmlspecialchars_decode` doesn't convert invalid character sequences.
	expect(htmlspecialchars_decode("\x81\x81&lt;&gt;",ENT_QUOTES)).toStrictEqual("\x81\x81<>") 
	expect(htmlspecialchars_decode("\x81\x81&lt;&gt;",ENT_SUBSTITUTE)).toStrictEqual("\x81\x81<>") 	
})