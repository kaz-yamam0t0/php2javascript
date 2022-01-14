/** 
 * Javascript equivalent to php `shuffle`
 * 
 * Shuffle an array
 * @see https://www.php.net/manual/en/function.shuffle.php
 * 
 * @param array &array
 * @return bool
 */

const shuffle = (ar)=>{
	if (! Array.isArray(ar)) {
		return false;
	}
	ar.sort(()=>Math.random() - 0.5);
	return true;
};

module.exports = {shuffle}