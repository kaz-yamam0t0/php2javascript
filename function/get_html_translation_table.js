/** 
 * Javascript equivalent to php `get_html_translation_table`
 * 
 * Returns the translation table used by htmlspecialchars and htmlentities
 * @see https://www.php.net/manual/en/function.get-html-translation-table.php
 * 
 * @param int table
 * @param int flags
 * @param string encoding
 * @return array
 */
/**
 * HTML_SPECIALCHARS     : Table for htmlspecialchars()
 * HTML_ENTITIES         : Table for htmlentities()
 * ENT_COMPAT            : Table will contain entities for double-quotes, but not for single-quotes.
 * ENT_QUOTES            : Table will contain entities for both double and single quotes.
 * ENT_NOQUOTES          : Table will neither contain entities for single quotes nor for double quotes.
 * ENT_HTML401           : Table for HTML 4.01.
 * ENT_XML1              : Table for XML 1.
 * ENT_XHTML             : Table for XHTML.
 * ENT_HTML5             : Table for HTML 5.
 */

const {
	HTML_SPECIALCHARS,
	HTML_ENTITIES,
	ENT_COMPAT, 
	ENT_QUOTES, 
	ENT_NOQUOTES, 
	ENT_IGNORE, 
	ENT_DISALLOWED, 
	ENT_SUBSTITUTE, 
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5,
} = require('../lib/const');

const html_entities = require('../lib/html_entity_table');

const get_html_translation_table = (table_flg=HTML_SPECIALCHARS, flags=ENT_QUOTES | ENT_HTML401, encoding="UTF-8")=>{
	let table = {
		"<" : "&lt;",
		">" : "&gt;",
		"&" : "&amp;",
	};
	if ((flags & ENT_COMPAT) === ENT_COMPAT) {
		table['"'] = '&quot;';
	}
	if ((flags & ENT_QUOTES) === ENT_QUOTES) {
		table["'"] = '&#039;';
	}
	if ((table_flg & HTML_ENTITIES) == HTML_ENTITIES) {
		switch (true) {
			case (flags & ENT_HTML5) == ENT_HTML5: 
				table = Object.assign(table, html_entities[ENT_HTML5]);
			break;
			case (flags & ENT_XHTML) == ENT_XHTML: 
				table = Object.assign(table, html_entities[ENT_XHTML]);
			break;
			case (flags & ENT_XML1) == ENT_XML1: 
				table = Object.assign(table, html_entities[ENT_XML1]);
			break;
			default:  
				table = Object.assign(table, html_entities[ENT_HTML401]);
			break;
		}
	}
	return table;
};

module.exports = {
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
}