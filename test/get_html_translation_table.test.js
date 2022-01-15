
const {
	get_html_translation_table, 
	HTML_SPECIALCHARS, 
	HTML_ENTITIES, 
	ENT_COMPAT, 
	ENT_QUOTES, 
	ENT_NOQUOTES, 
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5
} = require("../function/get_html_translation_table.js");


test("test get_html_translation_table()", ()=>{
	// Test for HTML table	
	let table = get_html_translation_table(HTML_ENTITIES, ENT_HTML5);
	expect(typeof table).toBe("object");
})

