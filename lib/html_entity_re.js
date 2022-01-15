

const {
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5,
} = require('./const');

const data = {};
data[ENT_HTML401] = require("./html_entity_re/401");
data[ENT_XML1] = null;
data[ENT_XHTML] = require("./html_entity_re/xhtml");
data[ENT_HTML5] = require("./html_entity_re/html5");

module.exports = data
