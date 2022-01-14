
module.exports = {
	// used in `array_change_key_case`
	CASE_UPPER: 0,
	CASE_LOWER: 1, 

	/**
	 * used in `array_filter` 
	 * 
	 * ARRAY_FILTER_USE_KEY  : pass key as the only argument to callback instead of the value
	 * ARRAY_FILTER_USE_BOTH : pass both value and key as arguments to callback instead of the value
	 */
	ARRAY_FILTER_USE_KEY  : 2,
	ARRAY_FILTER_USE_BOTH : 1,

	/**
	 * used in `array_unique`, `natcasesort`, `natsort`, `rsort`, `sort`, 
	 * 
	 * SORT_REGULAR       : compare items normally (don't change types)
	 * SORT_NUMERIC       : compare items numerically
	 * SORT_STRING        : compare items as strings
	 * SORT_LOCALE_STRING : compare items as strings, based on the current locale. (ignored)
	 */
	SORT_REGULAR       : 0,
	SORT_NUMERIC       : 1,
	SORT_STRING        : 2,
	SORT_NATURAL       : 6,
	SORT_LOCALE_STRING : 5, // not used
	SORT_FLAG_CASE     : 8,

	// used in `count`
	COUNT_NORMAL    : 0,
	COUNT_RECURSIVE : 1,

	/**
	 * used in `htmlspecialchars`
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
	ENT_COMPAT     : 2,
	ENT_QUOTES     : 3,
	ENT_NOQUOTES   : 0,
	ENT_IGNORE     : 4,
	ENT_DISALLOWED : 128,
	ENT_SUBSTITUTE : 8,
	ENT_HTML401    : 0,
	ENT_XML1       : 16,
	ENT_XHTML      : 32,
	ENT_HTML5      : 48,

	// used in `str_pad`
	STR_PAD_RIGHT : 1,
	STR_PAD_LEFT  : 0,
	STR_PAD_BOTH  : 2,

}


