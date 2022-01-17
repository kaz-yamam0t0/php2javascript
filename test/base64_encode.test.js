
const {base64_encode} = require("../function/base64_encode.js");


test("test base64_encode()", ()=>{
	expect(base64_encode("This is an encoded string")).toStrictEqual("VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==") 
	expect(base64_encode("Encodes the given string with base64.\n\nThis encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean, such as mail bodies.\n\nBase64-encoded data takes about 33% more space than the original data.")).toStrictEqual("RW5jb2RlcyB0aGUgZ2l2ZW4gc3RyaW5nIHdpdGggYmFzZTY0LgoKVGhpcyBlbmNvZGluZyBpcyBkZXNpZ25lZCB0byBtYWtlIGJpbmFyeSBkYXRhIHN1cnZpdmUgdHJhbnNwb3J0IHRocm91Z2ggdHJhbnNwb3J0IGxheWVycyB0aGF0IGFyZSBub3QgOC1iaXQgY2xlYW4sIHN1Y2ggYXMgbWFpbCBib2RpZXMuCgpCYXNlNjQtZW5jb2RlZCBkYXRhIHRha2VzIGFib3V0IDMzJSBtb3JlIHNwYWNlIHRoYW4gdGhlIG9yaWdpbmFsIGRhdGEu") 
	expect(base64_encode("今日はいい天気🐱")).toStrictEqual("5LuK5pel44Gv44GE44GE5aSp5rCX8J+QsQ==") 	
})