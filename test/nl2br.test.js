
const {nl2br} = require("../function/nl2br.js");

test("test nl2br()", ()=>{
	expect(nl2br("foo\nbar")).toBe("foo<br />\nbar") 
	expect(nl2br("foo\rbar")).toBe("foo<br />\rbar") 
	expect(nl2br("foo\r\nbar")).toBe("foo<br />\r\nbar") 
	expect(nl2br("foo\n\rbar")).toBe("foo<br />\n\rbar") 
	expect(nl2br("foo\nbar",false)).toBe("foo<br>\nbar") 
	expect(nl2br("foo\rbar",false)).toBe("foo<br>\rbar") 
	expect(nl2br("foo\r\nbar",false)).toBe("foo<br>\r\nbar") 
	expect(nl2br("foo\n\rbar",false)).toBe("foo<br>\n\rbar") 
	expect(nl2br("foo\n\n\nbar")).toBe("foo<br />\n<br />\n<br />\nbar") 
	expect(nl2br("foo\r\r\rbar")).toBe("foo<br />\r<br />\r<br />\rbar") 
	expect(nl2br("foo\r\n\rbar")).toBe("foo<br />\r\n<br />\rbar") 
	expect(nl2br("foo\n\r\rbar")).toBe("foo<br />\n\r<br />\rbar") 
	expect(nl2br("foo\n\r\nbar")).toBe("foo<br />\n\r<br />\nbar") 	
})