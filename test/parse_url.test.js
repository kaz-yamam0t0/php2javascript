
const {
	parse_url, 
	PHP_URL_SCHEME, 
	PHP_URL_HOST, 
	PHP_URL_PORT, 
	PHP_URL_USER, 
	PHP_URL_PASS, 
	PHP_URL_PATH, 
	PHP_URL_QUERY, 
	PHP_URL_FRAGMENT
} = require("../function/parse_url.js");


test("test parse_url()", ()=>{
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor")).toStrictEqual({"scheme":"http","host":"hostname","port":9090,"user":"username","pass":"password","path":"/path","query":"arg=value","fragment":"anchor"}) 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_SCHEME)).toStrictEqual("http") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_HOST)).toStrictEqual("hostname") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_PORT)).toStrictEqual(9090) 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_USER)).toStrictEqual("username") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_PASS)).toStrictEqual("password") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_PATH)).toStrictEqual("/path") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_QUERY)).toStrictEqual("arg=value") 
	expect(parse_url("http://username:password@hostname:9090/path?arg=value#anchor",PHP_URL_FRAGMENT)).toStrictEqual("anchor") 

	// Missing Scheme
	expect(parse_url("//www.example.com/path?arg=value")).toStrictEqual({"host":"www.example.com","path":"/path","query":"arg=value"}) 	
})