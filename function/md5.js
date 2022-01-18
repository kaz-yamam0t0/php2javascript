/** 
 * Javascript equivalent to php `md5`
 * 
 * Calculate the md5 hash of a string
 * @see https://www.php.net/manual/en/function.md5.php
 * 
 * @param string s
 * @param bool binary
 * @return string
 */

const { str2bytes } = require('../lib/util');

const md5 = (s, binary_flg=false)=>{
	let bytes = str2bytes(`${s || ""}`);

	// padding
	(()=>{
		let bits = bytes.length * 8; 
		const bits_b = bits / 256;

		const data_len = (~~((bytes.length + 8) / 64) + 1) * 64;
		const append_len = data_len - bytes.length;
		for (let i=0, j=0; i < append_len;i++) {
			if (i == 0) {
				bytes.push(0x80);
			} else if ((j = append_len - i - 1) < 8) { // (j = append_len - i - 1) < bits_b
				bytes.push(bits & 0xFF);
				bits >>>= 8;
			} else {
				bytes.push(0);
			}
		}
		return bytes;
	})();

	// init
	const buf = new Uint32Array([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476]);
	const T = (()=>{
		const T = new Uint32Array(64);

		for (let i = 0; i<64; i++) 
			T[i] = Math.floor(0x100000000 * Math.abs(Math.sin(i + 1)));
		return T;
    })();

	const F = [
		(x,y,z)=> x & y | ~x & z, 
		(x,y,z)=> x & z | y & ~z,
		(x,y,z)=> x ^ y ^ z,
		(x,y,z)=> y ^ (x | ~z), 
	];
	const E = (()=>{
		const E = [];
        const K = [[0, 1], [1, 5], [5, 3], [0, 7]];
        const S = [[7, 12, 17, 22], [5, 9, 14, 20], [4, 11, 16, 23], [6, 10, 15, 21]];
        for (let i = 0; i<64; i++) {
            const n = i >> 4;

			// Pn(XYZW, k, s, i) 
			// X = Y + ((X + F[n](Y, Z, W) + words[k] + T[i]) <<< s)
            E[i] = [
                n,                             // n（0～3）
                (64 - i) % 4,                  // X（0～3）
                (65 - i) % 4,                  // Y（0～3）
                (66 - i) % 4,                  // Z（0～3）
                (63 - i) % 4,                  // W（0～3）
                (K[n][0] + i * K[n][1]) % 16,  // k（0～15）
                S[n][i % 4]                    // s
            ];
        }
		return E;
    })();

	// culculate P*
	const tmp = new Uint32Array(4);
	const words = new Uint32Array(16);

	while(bytes.length > 0) {
		tmp.set(buf);

		// 16 uint32 integers
		for (let i=0; i<16;i++) {
			words[i] = 0;
			for (let j=0; j<4;j++) words[i] |= (bytes.shift() << (j * 8));	
		}

		// 64 culculations
		for (let i=0; i<64; i++) {
			const [n,x,y,z,w,k,s] = E[i];
			const t = buf[x] + F[n](buf[y],buf[z],buf[w]) + words[k] + T[i];
			buf[x] = buf[y] + (t << s | t >>> 32 - s);
		}
		// addition
		for (let i=0; i<buf.length; i++) {
			buf[i] += tmp[i];
		}
	}

	// stringify
	res = [];
	for (let i=0; i<4; i++) {
		for (let j=0; j<4; j++) {
			let b = (buf[i] >> (j * 8)) & 0xFF;
			if (binary_flg) {
				res.push(b);
			} else {
				let c = b.toString(16);
				if (c.length == 1) c = "0" + c;
				res.push(c);
			}
		}
	}
	if (binary_flg) {
		return new Uint8Array(res);
	}
	return res.join("");
}

module.exports = {md5}