/** 
 * Javascript equivalent to php `parse_str`
 * 
 * Parses the string into variables
 * @see https://www.php.net/manual/en/function.parse-str.php
 * 
 * @param string s
 * @param array &result
 * @return void
 */

const parse_str = (s, result)=>{
	if (!result || (typeof result !== "object")) {
		throw "argument must be an object";
	}
	// * reset 
	// Object.keys(result).forEach(k=> {
	// 	delete result[k];
	// });

	// escape first key
	const escapeKey = (k)=>{
		return k.replace(/[^0-9a-zA-Z\_]/g,"_");
	};

	// append array (called recursively)
	const append = (res, k, v, depth=0)=>{
		const p1 = k.indexOf('[');
		const p2 = k.indexOf(']');
		if (p1 == 0) {
			return; // ignore
		} 
		// ...[...]
		else if (p1 > 0 && p2 > 0 && p2 > p1) {
			let k0 = k.substr(0, p1);
			let k1 = k.substr(p1+1, p2-p1-1); 
			let k2 = k.substr(p2+1);

			if (depth == 0) k0 = escapeKey(k0);
			if (!res[k0] || typeof res[k0] !== "object") { // overwrite
				res[k0] = {};
			}
			if (k1 === "") {
				let i = 0;
				while ( i in res[k0] ) i++;
				k1 = ""+i;
			}

			append(res[k0], k1+k2, v, depth + 1);
		} 
		// else
		else {
			if (depth == 0) k = escapeKey(k);
			if (k === "") {
				let i = 0;
				while ( i in res ) i++;
				k = ""+i;
			}

			res[k] = v;
		}
	};

	// walk to check if an object should be an array and convert it
	const walk = (r, k)=>{
		if (!r[k] || typeof r[k] !== "object") return;

		if (Array.isArray(r[k])) {
			r[k].forEach((r_, index_) => {
				walk(r[k], index_);
			});
		} else {
			let keys = Object.keys(r[k]);
			keys.forEach(k_=>{
				walk(r[k], k_);
			});

			let is_array = true;
			keys.sort((a,b) => {
				if (~~a == ~~b) return 0;
				return (~~a > ~~b) ? 1 : -1;
			});
			for (let i=0, len=keys.length; i < len; i++) {
				if (""+keys[i] !== ""+i) {
					is_array = false;
					break;
				}
			}
			if (is_array) {
				let ar = [];
				for (let i=0, len=keys.length; i < len; i++) {
					const k_ = keys[i];
					ar.push(r[k][k_]);
				}
				r[k] = ar;
			}
		}
	};

	// parse
	const pairs = s.split('&');
	pairs.forEach(p=>{
		const tmp = p.split('=',2);
		const k = decodeURIComponent((tmp[0] || "").replace('+','%20'));
		const v = decodeURIComponent((tmp[1] || "").replace('+','%20'));
		if (k !== "") {
			append(result, k, v);
		}
	});

	Object.keys(result).forEach((k)=> {
		walk(result, k);
	});
};

module.exports = {parse_str}