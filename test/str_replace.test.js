
const {str_replace} = require("../function/str_replace.js");

test("test str_replace()", ()=>{
	expect(str_replace("%body%","black","<body text='%body%'>")).toStrictEqual("<body text='black'>") 
	expect(str_replace("fruits","pizza","You should eat fruits.")).toStrictEqual("You should eat pizza.") 
	expect(str_replace(["fruits","vegetables","fiber"],["pizza","beer","ice cream"],"You should eat fruits, vegetables, and fiber every day.")).toStrictEqual("You should eat pizza, beer, and ice cream every day.") 
	expect(str_replace(["abc","def"],["def","ghi"],"abc")).toStrictEqual("ghi") 
	expect(str_replace(["abc","def"],"g","abc_def")).toStrictEqual("g_g") 
	expect(str_replace(["abc","def"],["g"],"abc_def")).toStrictEqual("g_") 
	expect(str_replace(["abc","def"],["def","ghi"],["abc","def"])).toStrictEqual(["ghi","ghi"]) 	
})