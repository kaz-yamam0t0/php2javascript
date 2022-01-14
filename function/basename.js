/** 
 * php `basename` with Javascript
 * 
 * Returns trailing name component of path
 * @see https://www.php.net/manual/en/function.basename.php
 * 
 * @param string filepath
 * @param string suffix
 * @return string
 */
const path = require("path")
const basename = (filepath, suffix="")=>path.basename(filepath, suffix)

module.exports = {basename}