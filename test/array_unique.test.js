
const {
	array_unique, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_LOCALE_STRING
} = require("../function/array_unique.js");

test("test array_unique()", ()=>{

	// with ar Array
	expect(array_unique([1,2,2,3,3,3,4,5])).toStrictEqual([1,2,3,4,5]) 
	expect(array_unique([1,2,"2.0",3,3,3,4,5],SORT_REGULAR)).toStrictEqual([1,2,3,4,5]) 
	expect(array_unique([1,2,"2.0",3,3,3,4,5],SORT_STRING)).toStrictEqual([1,2,"2.0",3,4,5]) 

	// with ar Object
	expect(array_unique({"a":"b","c":"d","e":"f","g":"d"})).toStrictEqual({"a":"b","c":"d","e":"f"}) 
	expect(array_unique({"a":1,"b":2,"c":"2.0","d":"3"},SORT_REGULAR)).toStrictEqual({"a":1,"b":2,"d":"3"}) 
	expect(array_unique({"a":1,"b":2,"c":"2.0","d":"3"},SORT_STRING)).toStrictEqual({"a":1,"b":2,"c":"2.0","d":"3"}) 	
})