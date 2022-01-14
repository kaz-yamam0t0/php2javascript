
const {
	htmlspecialchars, 
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
} = require("../function/htmlspecialchars.js");

test("test htmlspecialchars()", ()=>{

	// Tests for quotes
	expect(htmlspecialchars("<a href='test'>\"Test\"</a>",ENT_QUOTES)).toBe("&lt;a href=&#039;test&#039;&gt;&quot;Test&quot;&lt;/a&gt;") 
	expect(htmlspecialchars("<a href='test'>\"Test\"</a>",ENT_COMPAT)).toBe("&lt;a href='test'&gt;&quot;Test&quot;&lt;/a&gt;") 
	expect(htmlspecialchars("<a href='test'>\"Test\"</a>",ENT_NOQUOTES)).toBe("&lt;a href='test'&gt;\"Test\"&lt;/a&gt;") 

	// Returns an empty string if contains invalid code unit sequences
	expect(htmlspecialchars("\x81\x81<>",ENT_QUOTES,"utf-8")).toBe("") 

	// Convert invalid code unit sequences to ï¿½ (U+FFFD) with `ENT_SUBSTITUTE`
	expect(htmlspecialchars("\x81\x81<>",ENT_SUBSTITUTE,"utf-8")).toBe("\xef\xbf\xbd\xef\xbf\xbd&lt;&gt;") 

	// Usually invalid chars within Non-UTF-8 strings are converted to "&#xFFFD;" but seem to be ignored when called from the command line.
	// expect(htmlspecialchars("\x81\x81<>",ENT_SUBSTITUTE,"Shift_JIS")).toBe("&#xFFFD;&#xFFFD;&lt;&gt;") 
	expect(htmlspecialchars("\x81\x81<>",ENT_SUBSTITUTE,"Shift_JIS")).toBe("\x81\x81&lt;&gt;") 

	// HTML entities tests for ENT_HTML401
	expect(htmlspecialchars("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&amp;") 
	expect(htmlspecialchars("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&quot;") 
	expect(htmlspecialchars("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&amp;apos;") 
	expect(htmlspecialchars("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&lt;") 
	expect(htmlspecialchars("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&gt;") 
	expect(htmlspecialchars("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&#x26;") 
	expect(htmlspecialchars("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML401,"utf-8",false)).toBe("&amp;plus;") 

	// HTML entities tests for ENT_XML1
	expect(htmlspecialchars("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&amp;") 
	expect(htmlspecialchars("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&quot;") 
	expect(htmlspecialchars("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&apos;") 
	expect(htmlspecialchars("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&lt;") 
	expect(htmlspecialchars("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&gt;") 
	expect(htmlspecialchars("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&#x26;") 
	expect(htmlspecialchars("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XML1,"utf-8",false)).toBe("&amp;plus;") 

	// HTML entities tests for ENT_XHTML
	expect(htmlspecialchars("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&amp;") 
	expect(htmlspecialchars("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&quot;") 
	expect(htmlspecialchars("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&apos;") 
	expect(htmlspecialchars("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&lt;") 
	expect(htmlspecialchars("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&gt;") 
	expect(htmlspecialchars("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&#x26;") 
	expect(htmlspecialchars("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_XHTML,"utf-8",false)).toBe("&amp;plus;") 

	// HTML entities tests for ENT_HTML5
	expect(htmlspecialchars("&amp;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&amp;") 
	expect(htmlspecialchars("&quot;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&quot;") 
	expect(htmlspecialchars("&apos;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&apos;") 
	expect(htmlspecialchars("&lt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&lt;") 
	expect(htmlspecialchars("&gt;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&gt;") 
	expect(htmlspecialchars("&#x26;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&#x26;") 
	expect(htmlspecialchars("&plus;",ENT_NOQUOTES|ENT_SUBSTITUTE|ENT_HTML5,"utf-8",false)).toBe("&plus;") 	
})