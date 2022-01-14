/** 
 * php `vsprintf` with Javascript
 * 
 * Return a formatted string
 * @see https://www.php.net/manual/en/function.vsprintf.php
 * 
 * @param string format
 * @param array values
 * @return string
 */
const vsprintf = (format, args)=>{
	const r = (()=>{
		const uint_ = (n)=>{
			try {
				return BigInt.asUintN(64, BigInt(n))
			} catch(e_) {
				return n >= 0 ? n : ~n // not precise
			}
		}
		const 
			b = (a)=>parseInt(a,10).toString(2),
			c = (a)=>String.fromCharCode(parseInt(a, 10)), 
			d = (a)=>parseInt(a,10),
			e = (a,p)=>parseFloat(a).toExponential(p > 0 ? p : 6),
			E = (a,p)=>e.call(null,a,p).replace("e","E"),
			f = (a,p)=>parseFloat(a).toFixed(p >= 0 ? p: 6), 
			F = (a,p)=>f.call(null,a,p),
		//	g = (a,p)=>p > 0 ? String(Number(parseInt(a,10).toPrecision(p))) : parseFloat(a), 
			g = (a,p,fn)=>{
				p = p >= 0 ? Math.max(1, ~~p) : 6;

				if (a < 1e-4 || Math.pow(10, p) <= a + 0.5) {
					return String(e(a, p-1))
				} else {
					return String(parseFloat(a).toPrecision( p ))
				}
			}, 
			G = (a,p)=>g(a,p).toUpperCase(), 
			h = (a,p)=>g(a,p),
			H = (a,p)=>g(a,p).toUpperCase(), 
			o = (a,p)=>uint_(a).toString(8),
			s = (a,p)=>p > 0 && a.length > p ? a.substr(0,p) : a,
			u = (a)=>uint_(a),
			x = (a)=>uint_(a).toString(16),
			X = (a)=>x(a).toUpperCase();
		return {b,c,d,e,E,f,F,g,G,h,H,o,s,u,x,X}
	})();

	if (! Array.isArray(args)) {
		args = [args]
	}

	//%[argnum$][flags][width][.precision]specifier.
	let s = ""+format;
	let index = 0;
	s = s.replace(/\%((\d+)\$)?([\+\-]{0,2})?(0+|\x20|\'.)?(\d+)?(\.(\d+))?([l]?[^\s])/g, 
		function(match, argnum_,argnum, signs, char, width, precision_,precision,specifier) {
			//console.log(arguments)
			if (specifier == "%") return '%';

			// specifier
			if (specifier.length > 1 && specifier[0] == "l") specifier = specifier[1]; // l format is actually ignored in php sprintf.
			if (! (specifier in r)) throw `undefined specifier: "${specifier}".`;


			// argments
			const idx = argnum ? argnum - 1 : index++;
			if (args.length <= idx) throw `Too few arguments`

			let a = args[idx]

			// specifier
			precision = typeof precision == "undefined" ? -1 : ~~precision
			let ret = ""+r[specifier](a, precision);
			
			// flags
			// https://www.php.net/manual/en/function.sprintf.php
			let minus_flg = false;
			let plus_flg = false;
			if (signs) {
				if (signs.indexOf('+') >= 0) {
					if ('deEfFgGhH'.indexOf(specifier) >= 0) {
						if (a >= 0) {
							plus_flg = true;
							if (width) width--;
						}
					}
				}
				if (signs.indexOf('-') >= 0) {
					minus_flg = true;
				}
			}
			if (width && width > ret.length) {
				if (! char && char !== "0") char = " ";
				char = char[0] === "'" ? char[1] : char[0];
				
				if (minus_flg == true && char == "0") {
					if (specifier != "s" && ret.indexOf(".") < 0) {
						char = " ";
					} 
				}

				if (minus_flg) {
					ret += char.repeat(width - ret.length);
				} else {
					ret = char.repeat(width - ret.length) + ret;
				}
			}
			if (plus_flg) {
				ret = "+" + ret;
			}

			return ret
		})
	return s
}


module.exports = {vsprintf}