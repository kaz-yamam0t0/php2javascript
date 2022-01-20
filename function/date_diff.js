/** 
 * Javascript equivalent to php `date_diff`
 * 
 * Alias of DateTime::diff
 * @see https://www.php.net/manual/en/function.date-diff.php
 * 
 * @param Date d
 * @param Date target_d
 * @param bool absolute_flg = false
 * @return int (seconds. originally returns a DateInterval instance)
 */

const date_diff = (d, target_d, absolute_flg)=>{
	if (!(d instanceof Date) || !(target_d instanceof Date)) {
		throw 'arguments are not Date instances';
	}
	let t = ~~((target_d.getTime() - d.getTime()) / 1000);
	if (absolute_flg) t = Math.abs(t);

	return t;
}

module.exports = {date_diff}