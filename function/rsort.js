/** 
 * Javascript equivalent to php `rsort`
 * 
 * Sort an array in descending order
 * @see https://www.php.net/manual/en/function.rsort.php
 * 
 * @param array &array
 * @param int flags
 * @return bool
 */
/**
 * SORT_REGULAR   : compare items normally; the details are described in the comparison operators section
 * SORT_NUMERIC   : compare items numerically
 * SORT_STRING    : compare items as strings
 * SORT_NATURAL   : compare items as strings using "natural ordering" like natsort()
 * SORT_FLAG_CASE : can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL to sort strings case-insensitively
 */
const SORT_REGULAR   = 0
const SORT_NUMERIC   = 1 // 001
const SORT_STRING    = 2 // 010
const SORT_NATURAL   = 6 // 110 (includes bits of SORT_STRING)
const SORT_FLAG_CASE = 8

const rsort = (ar, flags=SORT_REGULAR)=>{
	const cmp_ = (a,b, flags_) => {
		if (typeof flags_ === "undefined") flags_ = ~~flags;

		//if (flags_ == SORT_REGULAR) {
		if ((flags_ & SORT_NUMERIC) != SORT_NUMERIC && (flags_ & SORT_STRING) != SORT_STRING) {
			if (!!a == false && !!b == false) {
				return 0;
			}
			if (""+(a||"") == +a && ""+(b||"") == +b) {
				flags_ |= SORT_NUMERIC;
			} else {
				flags_ |= SORT_STRING;
			}
		}
		
		if ((flags_ & SORT_NUMERIC) == SORT_NUMERIC) 
			return (+a) - (+b);
		
		if ((flags_ & SORT_STRING) == SORT_STRING) {
			a = ""+(a||"");
			b = ""+(b||"");
			
			if ((flags_ & SORT_FLAG_CASE) == SORT_FLAG_CASE) {
				a = a.toLowerCase();
				b = b.toLowerCase();
			}
			if (a === b) 
				return 0;
			
			if ((flags_ & SORT_NATURAL) == SORT_NATURAL) {
				// "abc123def".split(/(\d+(\.\d+)?)/)
				// -> ['abc', '123', undefined, 'def']
				const a_ = a.split(/(\d+\.\d+|\d+)/);
				const b_ = b.split(/(\d+\.\d+|\d+)/);

				const len_ = Math.min(a_.length , b_.length);
				for (let i=0; i<len_; i++) {
					let ret_ = cmp_(a_[i]||"", b_[i]||"", SORT_REGULAR );
					if (ret_ != 0) {
						return ret_;
					}
				}
				return a_.length > b_.length ? 1: -1;
			}
			
			return a > b ? 1 : -1;
		}

		return 0;
	};
	const cmp = (a,b)=>cmp_(a,b) * -1;

	ar.sort(cmp);
	return true;
}

module.exports = {
	rsort, 
	SORT_REGULAR, 
	SORT_NUMERIC, 
	SORT_STRING, 
	SORT_NATURAL, 
	SORT_FLAG_CASE
}