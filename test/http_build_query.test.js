
const {http_build_query} = require("../function/http_build_query.js");


test("test http_build_query()", ()=>{
	expect(http_build_query({"foo":"bar","baz":"boom","null":null,"false":false,"true":true})).toStrictEqual("foo=bar&baz=boom&false=0&true=1") 

	// arg separator
	expect(http_build_query({"foo":"bar","baz":"boom"},"","&amp;")).toStrictEqual("foo=bar&amp;baz=boom") 

	// numeric prefix
	expect(http_build_query(["foo","bar"])).toStrictEqual("0=foo&1=bar") 
	expect(http_build_query(["foo","bar"],"myvar_")).toStrictEqual("myvar_0=foo&myvar_1=bar") 

	// complex arrays
	/*
	Actually Javascript objects don't maintain their order.
	
	expect(http_build_query({
		"user": {
			"name": "Bob Smith",
			"age": 47,
			"sex": "M",
			"dob": "5/12/1956",
		},
		"pastimes" : ["golf","opera","poker","rap"],
		"children" : {
			"bobby" : {"age": 12, "sex": "M"},
			"sally" : {"age": 8, "sex": "F"},
		},
		"0": "SEO", 
	},"flags_")).toStrictEqual("user%5Bname%5D=Bob+Smith&user%5Bage%5D=47&user%5Bsex%5D=M&user%5Bdob%5D=5%2F12%2F1956&pastimes%5B0%5D=golf&pastimes%5B1%5D=opera&pastimes%5B2%5D=poker&pastimes%5B3%5D=rap&children%5Bbobby%5D%5Bage%5D=12&children%5Bbobby%5D%5Bsex%5D=M&children%5Bsally%5D%5Bage%5D=8&children%5Bsally%5D%5Bsex%5D=F&flags_0=CEO") 
	*/	
})