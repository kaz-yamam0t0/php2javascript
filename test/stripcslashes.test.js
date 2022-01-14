
const {stripcslashes} = require("../function/stripcslashes.js");

test("test stripcslashes()", ()=>{

	// Some characters are converted in C-like style
	expect(stripcslashes("\\n")).toStrictEqual("\n") // Line Feed
	expect(stripcslashes("\\t")).toStrictEqual("\t") // Horizontal Tab
	expect(stripcslashes("\\r")).toStrictEqual("\r") // Carriage Return
	expect(stripcslashes("\\a")).toStrictEqual("\x07") // Bell
	expect(stripcslashes("\\v")).toStrictEqual("\x0b") // Vertical Tab
	expect(stripcslashes("\\b")).toStrictEqual("\x08") // Backspace
	expect(stripcslashes("\\f")).toStrictEqual("\x0c") // Form Feed
	expect(stripcslashes("\\\\")).toStrictEqual("\\") // Double backslashes

	// other non-alphanumeric characters with ASCII codes lower than 32 and higher than 126 are converted to octal representation.
	expect(stripcslashes("\\000")).toStrictEqual("\x00") // NUll
	expect(stripcslashes("\\001")).toStrictEqual("\x01") 
	expect(stripcslashes("\\002")).toStrictEqual("\x02") 
	expect(stripcslashes("\\x11")).toStrictEqual("\x11") 
	expect(stripcslashes("\\x12")).toStrictEqual("\x12") 

	// Other characters are not converted.
	expect(stripcslashes("\\あ")).toStrictEqual("あ") 

	// More than 2 byte characters are handles as like binary data
	expect(stripcslashes("ab\\cあいう")).toStrictEqual("abcあいう") 
	expect(stripcslashes("ab\\c\\343\\201\\202\\343\\201\\204\\343\\201\\206")).toStrictEqual("abcあいう") 
	expect(stripcslashes("ab\\c\\343\\201\\202\\343\\201\\204\\343\\201\\206😃")).toStrictEqual("abcあいう😃") 
	expect(stripcslashes("ab\\c\\343\\201\\202\\343\\201\\204\\343\\201\\206\\360\\237\\230\\203")).toStrictEqual("abcあいう😃") 	
})