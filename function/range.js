/** 
 * Javascript equivalent to php `range`
 * 
 * Create an array containing a range of elements
 * @see https://www.php.net/manual/en/function.range.php
 * 
 * @param string|int|float start
 * @param string|int|float end
 * @param int|float step
 * @return array
 */

const range = (start, end, step=1)=>{
	step = +step

	if (step == 0) {
		throw 'step must not be zero.';
	}
	let chr_flg = false;

	// numeric
	if ((""+start) == ""+(+start) || 
		(""+end) == ""+(+end) || 
		(""+(start||"")) == "" || 
		(""+(end||"")) == "")
	{
		// numeric
	} else {
		chr_flg = true;
		start = (""+start)[0].charCodeAt(0);
		end = (""+end)[0].charCodeAt(0);
	}

	if ((start > end && step > 0) || (start < end && step < 0)) {
		step = -step;
	} 

	const ret = [];
	const sign = step > 0 ? 1 : -1;
	for (let i=start; i * sign <= end * sign; i += step) {
		ret.push( chr_flg ? String.fromCharCode(i) : i );
	}
	return ret;
}

module.exports = {range}