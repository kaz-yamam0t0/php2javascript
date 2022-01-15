/** 
 * Javascript equivalent to php `html_entity_decode`
 * 
 * Convert HTML entities to their corresponding characters
 * @see https://www.php.net/manual/en/function.html-entity-decode.php
 * 
 * @param string s
 * @param int flags
 * @param ?string encoding (ignored)
 * @return string
 */
/**
 * ENT_COMPAT     : Will convert double-quotes and leave single-quotes alone.
 * ENT_QUOTES     : Will convert both double and single quotes.
 * ENT_NOQUOTES   : Will leave both double and single quotes unconverted.
 * ENT_IGNORE     : Silently discard invalid code unit sequences instead of returning an empty string. Using this flag is discouraged as it may have security implications.
 * ENT_DISALLOWED : Replace invalid code points for the given document type with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of leaving them as is. This may be useful, for instance, to ensure the well-formedness of XML documents with embedded external content.
 * ENT_SUBSTITUTE : Replace invalid code unit sequences with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of returning an empty string.
 * ENT_HTML401    : Handle code as HTML 4.01.
 * ENT_XML1       : Handle code as XML 1.
 * ENT_XHTML      : Handle code as XHTML.
 * ENT_HTML5      : Handle code as HTML 5.
 */
const {
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

const html_entity_decode = (s, flags=ENT_QUOTES|ENT_SUBSTITUTE|ENT_HTML401, encoding="utf-8")=>{
	const decoded = {
		'&amp;' : '&',
		'&quot;' : '"',
		'&#039;' : "'",
		'&lt;' : '<',
		'&gt;' : '>',
	};
	return s.replace(/&(amp|quot|#039|lt|gt|[0-9a-zA-Z]+);/g, (s_)=>{
		switch(s_) {
			case '&quot;':
				// ENT_QUOTES includes the bit of ENT_COMPAT
				return ( (flags & ENT_COMPAT) === ENT_COMPAT) ? decoded[s_] : s_;
			case '&#039;':
				return ( (flags & ENT_QUOTES) === ENT_QUOTES) ? decoded[s_] : s_;
			default:
				if (s_ in decoded) {
					return decoded[s_];
				} else {
					let _entities = null;
					if ((flags & ENT_HTML5) == ENT_HTML5)
						_entities = html_entities[ENT_HTML5]
					else if ((flags & ENT_XHTML) == ENT_XHTML)
						_entities = html_entities[ENT_XHTML]
					else if ((flags & ENT_XML1) == ENT_XML1)
						_entities = html_entities[ENT_XML1]
					else 
						_entities = html_entities[ENT_HTML401]
					
					const c = Object.keys(_entities).find(k=>_entities[k] === s_);
					if (c) 
						return c;
					
					return s_;
				}
		}
	});
};

module.exports = {
	html_entity_decode, 
	ENT_COMPAT, 
	ENT_QUOTES, 
	ENT_NOQUOTES, 
	ENT_IGNORE, 
	ENT_DISALLOWED, 
	ENT_SUBSTITUTE, 
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5
}