/** 
 * Javascript equivalent to php `microtime`
 * 
 * Return current Unix timestamp with microseconds
 * @see https://www.php.net/manual/en/function.microtime.php
 * 
 * @param bool as_float
 * @return string|float
 */

const microtime = (as_float=false)=>{
	const t = (new Date()).getTime() / 1000;
	if (! as_float) {
		return `${Math.floor((t % 1) * 1000)/1000} ${ Math.floor(t) }`;
	} else {
		return t;
	}
}


module.exports = {microtime}