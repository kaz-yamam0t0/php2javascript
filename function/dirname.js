/** 
 * php `dirname` with Javascript
 * 
 * Returns a parent directory's path
 * @see https://www.php.net/manual/en/function.dirname.php
 * 
 * @param string filepath
 * @param int levels
 * @return string
 */
const path = require("path");

const dirname = (filepath, levels=1)=>{
	while(--levels >= 0) {
		filepath = path.dirname(filepath)
	}
	return filepath
}

module.exports = {dirname}