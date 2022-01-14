/** 
 * Javascript equivalent to php `hex2bin`
 * 
 * Decodes a hexadecimally encoded binary string
 * @see https://www.php.net/manual/en/function.hex2bin.php
 * 
 * @param string s
 * @return string
 */

const hex2bin = (s)=>{
	if (!s.match(/^[0-9a-fA-F]+$/g)) return null;

	const buf = []

	for (let i=0,len=s.length; i<len; i++) {
		let h = s[i]
		//if (i + 1 < len) h += s[++i]
		h += s[++i] || "0"

		buf.push(parseInt(h, 16))
	}
	return new TextDecoder().decode(new Uint8Array(buf))
}

module.exports = {hex2bin}