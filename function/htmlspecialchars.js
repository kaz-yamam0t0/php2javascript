/** 
 * Javascript equivalent to php `htmlspecialchars`
 * 
 * Convert special characters to HTML entities
 * @see https://www.php.net/manual/en/function.htmlspecialchars.php
 * 
 * @param string s
 * @param int flags (changed from `ENT_COMPAT` to `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401` in PHP 8.1.0)
 * @param ?string encoding
 * @param bool double_encode
 * @return string
 */
/**
 * ### Constants ###
 * 
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

/**
 * You can find html tables in the following page.
 * 
 * https://github.com/php/php-src/tree/master/ext/standard/html_tables
 */
const html_entity_re = require("../lib/html_entity_re");
const apos = 'quot|amp|apos|lt|gt'
const ents_401 = html_entity_re[ENT_HTML401];
const ents_xhtml = html_entity_re[ENT_XHTML];
const ents_html5 = html_entity_re[ENT_HTML5];

const htmlspecialchars = (s, flags=ENT_COMPAT|ENT_SUBSTITUTE|ENT_HTML401, encoding=null, double_encode=true)=>{
	/*
	Light version (The second and subsequent arguments are ignored)
	Actually this is enough in most cases
	
	return (""+s).replace(/[\&"'<>]/g,s_=>{
		return {
			'&': '&amp;',
			'"': '&quot;',
			"'": '&#039;',
			"<": '&lt;',
			'>': '&gt;',
		}[s_]
	})
	*/
	// invalid code points
	if ((""+(encoding||"")).match(/^utf\-?8$/i)) {
		if ((flags & ENT_IGNORE) == ENT_IGNORE) {
			s = s.replace(/[\x80-\xFF]/g, ()=>"")
		} else if ((flags & ENT_SUBSTITUTE) == ENT_SUBSTITUTE) {
			s = s.replace(/[\x80-\xFF]/g, ()=>"\xEF\xBF\xBD") // U+FFFD
		} else {
			if (s.match(/[\x80-\xFF]/)) {
				return ""
			}
		}
	}


	const encoded = {
		'&': '&amp;',
		'"': '&quot;',
		"'": '&#039;',
		"<": '&lt;',
		'>': '&gt;',
	};
	return (""+s).replace(/([\&"'<>])(#?[a-zA-Z0-9]+;)?/g,(m,c,ent_)=>{
		const ent = ent_ || ""
		
		if (c == "<" || c == '>') {
			return encoded[c] + ent
		}
		if (c == '"' || c == "'") {
			if ((flags & ENT_QUOTES) == ENT_QUOTES) {
				return encoded[c] + ent
			}
			if ((flags & ENT_COMPAT) == ENT_COMPAT) {
				return (c == "'" ? c : encoded[c]) + ent
			}
			return c + ent
		}
		// "&"
		if (double_encode == false && ent != "") {
			const ent_ = ent.substr(0,ent.length-1)

			switch(true) {
				// numeric entities
				case !!ent_.match(/^\#([0-9]+|x[0-9a-fA-F]+)$/): 
					return c + ent
				// entity table
				case (flags & ENT_HTML5) == ENT_HTML5:
					return (apos.indexOf(ent_) >= 0 || ents_html5.test(ent_) ? c : encoded[c]) + ent
				case (flags & ENT_XML1) == ENT_XML1:
				case (flags & ENT_XHTML) == ENT_XHTML:
					return (apos.indexOf(ent_) >= 0  || ents_xhtml.test(ent_)  ? c : encoded[c]) + ent
				default:
					return (ents_401.test(ent_) ? c : encoded[c]) + ent
			}
		}

		return encoded[c] + ent
	})
}

module.exports = {
	htmlspecialchars, 
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