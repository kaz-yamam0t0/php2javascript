
const {
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5,
} = require('./const');

const html_entities = {};
html_entities[ENT_HTML401] = require("./html_entity_table/401");
html_entities[ENT_XML1] = require("./html_entity_table/xml1");
html_entities[ENT_XHTML] = require("./html_entity_table/xhtml");
html_entities[ENT_HTML5] = require("./html_entity_table/html5");

module.exports = html_entities