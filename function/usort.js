/** 
 * Javascript equivalent to php `usort`
 * 
 * Sort an array by values using a user-defined comparison function
 * @see https://www.php.net/manual/en/function.usort.php
 * 
 * @param array &array
 * @param callable callback
 * @return bool
 */

const usort = (ar, cmp)=>{
	ar.sort(cmp);
	return true;
}


module.exports = {usort}