
const {explode} = require("../function/explode.js");

test("test explode()", ()=>{
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6")).toStrictEqual(["piece1","piece2","piece3","piece4","piece5","piece6"]) 
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6",3)).toStrictEqual(["piece1","piece2","piece3 piece4 piece5 piece6"]) 
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6",1)).toStrictEqual(["piece1 piece2 piece3 piece4 piece5 piece6"]) 
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6",0)).toStrictEqual(["piece1 piece2 piece3 piece4 piece5 piece6"]) 
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6",-1)).toStrictEqual(["piece1","piece2","piece3","piece4","piece5"]) 
	expect(explode(" ","piece1 piece2 piece3 piece4 piece5 piece6",-3)).toStrictEqual(["piece1","piece2","piece3"]) 	
})