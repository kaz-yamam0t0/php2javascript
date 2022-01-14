
const {str_ireplace} = require("../function/str_ireplace.js");

test("test str_ireplace()", ()=>{
	expect(str_ireplace("%body%","black","<body text='%BODY%'>")).toStrictEqual("<body text='black'>") 
	expect(str_ireplace("fruits","pizza","You should eat Fruits.")).toStrictEqual("You should eat pizza.") 
	expect(str_ireplace(["fruits","Vegetables","FIBER"],["pizza","beer","ice cream"],"You should eat FRUITS, vEgetables, and fibeR every day.")).toStrictEqual("You should eat pizza, beer, and ice cream every day.") 
	expect(str_ireplace(["abc","DEF"],["DEf","ghi"],"ABC")).toStrictEqual("ghi") 
	expect(str_ireplace(["abc","DEF"],"g","abc_def")).toStrictEqual("g_g") 
	expect(str_ireplace(["aBc","DeF"],["g"],"abC_dEf")).toStrictEqual("g_") 
	expect(str_ireplace(["aBc","dEf"],["deF","Ghi"],["AbC","DeF"])).toStrictEqual(["Ghi","Ghi"]) 	
})