/** 
 * Javascript equivalent to php `htmlentities`
 * 
 * Convert all applicable characters to HTML entities
 * @see https://www.php.net/manual/en/function.htmlentities.php
 * 
 * @param string s
 * @param int flags
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
const ENT_COMPAT     = 2
const ENT_QUOTES     = 3
const ENT_NOQUOTES   = 0
const ENT_IGNORE     = 4
const ENT_DISALLOWED = 128
const ENT_SUBSTITUTE = 8
const ENT_HTML401    = 0
const ENT_XML1       = 16
const ENT_XHTML      = 32
const ENT_HTML5      = 48

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
 
const html_entities = require('../lib/html_entity_table');

const p_401 = '([\xA0-\xFF\u0152-\u0153\u0160-\u0161\u0178\u0192\u02C6\u02DC\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1-\u03D2\u03D6\u2002-\u2003\u2009\u200C-\u200F\u2013-\u2014\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2026\u2030\u2032-\u2033\u2039-\u203A\u203E\u2044\u20AC\u2111\u2118\u211C\u2122\u2135\u2190-\u2194\u21B5\u21D0-\u21D4\u2200\u2202-\u2203\u2205\u2207-\u2209\u220B\u220F\u2211-\u2212\u2217\u221A\u221D-\u221E\u2220\u2227-\u222B\u2234\u223C\u2245\u2248\u2260-\u2261\u2264-\u2265\u2282-\u2284\u2286-\u2287\u2295\u2297\u22A5\u22C5\u2308-\u230B\u2329-\u232A\u25CA\u2660\u2663\u2665-\u2666])';
const p_xhtml = '([\xA0-\xFF\u0152-\u0153\u0160-\u0161\u0178\u0192\u02C6\u02DC\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1-\u03D2\u03D6\u2002-\u2003\u2009\u200C-\u200F\u2013-\u2014\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2026\u2030\u2032-\u2033\u2039-\u203A\u203E\u2044\u20AC\u2111\u2118\u211C\u2122\u2135\u2190-\u2194\u21B5\u21D0-\u21D4\u2200\u2202-\u2203\u2205\u2207-\u2209\u220B\u220F\u2211-\u2212\u2217\u221A\u221D-\u221E\u2220\u2227-\u222B\u2234\u223C\u2245\u2248\u2260-\u2261\u2264-\u2265\u2282-\u2284\u2286-\u2287\u2295\u2297\u22A5\u22C5\u2308-\u230B\u2329-\u232A\u25CA\u2660\u2663\u2665-\u2666])';
const p_html5 = '([\x09-\x0A\x21\x23-\x25\x28-\x2C\x2E-\x2F\x3A-\x3B\x3D\x3F-\x40\x5B-\x60\x7B-\x7D\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6-\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1-\u03D2\u03D5-\u03D6\u03DC-\u03DD\u03F0-\u03F1\u03F5-\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E-\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025-\u2026\u2030-\u2035\u2039-\u203A\u203E\u2041\u2043-\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB-\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C-\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4-\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B-\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259-\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305-\u2306\u2308-\u2310\u2312-\u2313\u2315-\u2316\u231C-\u231F\u2322-\u2323\u232D-\u232E\u2336\u233D\u233F\u237C\u23B0-\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA-\u25AB\u25AD-\u25AE\u25B1\u25B3-\u25B5\u25B8-\u25B9\u25BD-\u25BF\u25C2-\u25C3\u25CA-\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605-\u2606\u260E\u2640\u2642\u2660\u2663\u2665-\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772-\u2773\u27C8-\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C-\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978-\u2979\u297B-\u297F\u2985-\u2986\u298B-\u2996\u299A\u299C-\u299D\u29A4-\u29B7\u29B9\u29BB-\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C-\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29-\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F-\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB-\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04\U0001D49C\U0001D49E-\U0001D49F\U0001D4A2\U0001D4A5-\U0001D4A6\U0001D4A9-\U0001D4AC\U0001D4AE-\U0001D4B9\U0001D4BB\U0001D4BD-\U0001D4C3\U0001D4C5-\U0001D4CF\U0001D504-\U0001D505\U0001D507-\U0001D50A\U0001D50D-\U0001D514\U0001D516-\U0001D51C\U0001D51E-\U0001D539\U0001D53B-\U0001D53E\U0001D540-\U0001D544\U0001D546\U0001D54A-\U0001D550\U0001D552-\U0001D56B]|\x3C\u20D2|\x3D\u20E5|\x3E\u20D2|\x66\x6A|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5)'


const htmlentities = (s, flags=ENT_COMPAT|ENT_SUBSTITUTE|ENT_HTML401, encoding=null, double_encode=true)=>{
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
	/*
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
	*/
	let p_ = '([\&"\'<>])(#?[a-zA-Z0-9]+;)?';
	if ((flags & ENT_HTML5) == ENT_HTML5) p_ = `(${p_}|${p_html5})`;
	else if ((flags & ENT_XHTML) == ENT_XHTML) p_ = `(${p_}|${p_xhtml})`;
	else p_ = `(${p_}|${p_401})`;

	const encoded = {
		'&': '&amp;',
		'"': '&quot;',
		"'": '&#039;',
		"<": '&lt;',
		'>': '&gt;',
	};

	return (""+s).replace(new RegExp(p_, 'g'),(m,all,c,ent_, entity)=>{
		// entity
		if (entity) {
			let _entities = null;
			if ((flags & ENT_HTML5) == ENT_HTML5)
				_entities = html_entities[ENT_HTML5]
			else if ((flags & ENT_XHTML) == ENT_XHTML)
				_entities = html_entities[ENT_XHTML]
			else if ((flags & ENT_XML1) == ENT_XML1)
				_entities = html_entities[ENT_XML1]
			else 
				_entities = html_entities[ENT_HTML401]

			if (entity in _entities)
				return _entities[entity]
			
			return entity
		}

		const ent = ent_ || "";
		
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
	htmlentities, 
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