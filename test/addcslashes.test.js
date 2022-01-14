
const {addcslashes} = require("../function/addcslashes.js");

test("test addcslashes()", ()=>{

	// Some characters are converted in C-like style
	expect(addcslashes("\n","\x00..\xff")).toBe("\\n") // Line Feed
	expect(addcslashes("\t","\x00..\xff")).toBe("\\t") // Horizontal Tab
	expect(addcslashes("\r","\x00..\xff")).toBe("\\r") // Carriage Return
	expect(addcslashes("\x07","\x00..\xff")).toBe("\\a") // Bell
	expect(addcslashes("\x0b","\x00..\xff")).toBe("\\v") // Vertical Tab
	expect(addcslashes("\x08","\x00..\xff")).toBe("\\b") // Backspace
	expect(addcslashes("\x0c","\x00..\xff")).toBe("\\f") // Form Feed

	// other non-alphanumeric characters with ASCII codes lower than 32 and higher than 126 are converted to octal representation.
	expect(addcslashes("\x00","\x00..\xff")).toBe("\\000") // NUll
	expect(addcslashes("\x01","\x00..\xff")).toBe("\\001") 
	expect(addcslashes("\x02","\x00..\xff")).toBe("\\002") 

	// alphanumeric characters are not converted.
	expect(addcslashes("a","\x00..\xff")).toBe("\\a") 
	expect(addcslashes("z","\x00..\xff")).toBe("\\z") 
	expect(addcslashes("A","\x00..\xff")).toBe("\\A") 
	expect(addcslashes("Z","\x00..\xff")).toBe("\\Z") 

	// [\]^_` are included between "A" and "z"
	expect(addcslashes("foo[ ]","A..z")).toBe("\\f\\o\\o\\[ \\]") 
	expect(addcslashes("foo[ ]","a..zA..Z")).toBe("\\f\\o\\o[ ]") 

	// No range is constructed when first char > last char, but this usage will actually show warning.
	// expect(addcslashes("zoo['.']","z..A")).toBe("\\zoo['\\.']") 

	// More than 2 byte characters are handles as like binary data
	expect(addcslashes("abcあいう","abc")).toBe("\\a\\b\\cあいう") 
	expect(addcslashes("abcあいう","abcあいう")).toBe("\\a\\b\\c\\343\\201\\202\\343\\201\\204\\343\\201\\206") 
	expect(addcslashes("abcあいう","abcあ..う")).toBe("\\a\\b\\c\\343\\201\\202\\343\\201\\204\\343\\201\\206") 
	expect(addcslashes("abcあいう","abcあう")).toBe("\\a\\b\\c\\343\\201\\202\\343\\201\x84\\343\\201\\206") 
	expect(addcslashes("abcあいう😃","abcあう")).toBe("\\a\\b\\c\\343\\201\\202\\343\\201\x84\\343\\201\\206😃") 
	expect(addcslashes("abcあいう😃","abc😃あう")).toBe("\\a\\b\\c\\343\\201\\202\\343\\201\x84\\343\\201\\206\\360\\237\\230\\203") 	
})