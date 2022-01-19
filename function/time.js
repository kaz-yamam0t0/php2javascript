/** 
 * Javascript equivalent to php `time`
 * 
 * Return current Unix timestamp
 * @see https://www.php.net/manual/en/function.time.php
 * 
 * @param void
 * @return int
 */

const time = ()=>~~((new Date()).getTime()/1000);

module.exports = {time}