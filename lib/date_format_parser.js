

const {
	weeks ,
	months, 
	regexp_months,
	regexp_weeks,

	get_month_num,
	get_weekday_num, 
	get_weekday,
} = require("./date_util");


const format_parser = (function() {
	// (s string, pos_s int, dt Date, flags object): pos_s int
	let g_;
	const 
		d = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			if (+g_[0] <= 0 || 31 < +g_[0]) return -1;
			flags.d = +g_[0];
			dt.setDate(flags.d);
			return pos_s + g_[0].length;
		}, 
		j = d, 
		D = (s,pos_s, dt, flags)=> {
			if (!(g_ = s.substr(pos_s).match(new RegExp(`^(${ regexp_weeks })`) ))) return -1;
			// flags.w = +g_[0];  ignore
			return pos_s + g_[0].length;
		} , 
		l = D,
		S = (s,pos_s, dt, flags) => {
			// ignore
			if (!(g_ = s.substr(pos_s).match(/^(st|nd|rd|th)/))) return -1;
			return pos_s + g_[0].length;
		}, 
		z = (s,pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d+)/))) return -1;
			if (+g_[0] < 0 || 365 < +g_[0]) return -1;
			//if (! flags.y) return -1;
			dt.setMonth(0);
			dt.setDate(0);
			dt.setTime( dt.getTime() + (86400 * (+g_[0]) * 1000) );

			return pos_s + g_[0].length;
		},
		F = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(new RegExp(`^(${ regexp_months })`)))) return -1;
			const m_ = get_month_num(g_[0]);
			flags.m = m_;
			dt.setMonth(flags.m - 1);
			return pos_s + g_[0].length;
		}, 
		M = F,
		m = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			if (+g_[0] < 1 || 12 < +g_[0]) return -1;
			flags.m = +g_[0];
			dt.setMonth(flags.m - 1);
			return pos_s + g_[0].length;
		}, 
		n = m,
		Y = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{4})/))) return -1;
			// if (+g_[0] < 1 || 12 < +g_[0]) return -1;
			flags.y = +g_[0];
			dt.setFullYear(flags.y);
			return pos_s + g_[0].length;
		}, 
		y = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			const y_ = +g_[0];
			if (y_ < 70) y_ += 2000;
			else y_ += 1900;
			flags.y = y_;
			dt.setFullYear(flags.y);
			return pos_s + g_[0].length;
		}, 
		a = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(([ap])\.?m\.?)/))) return -1;
			const a_ = g_[2]+"m";
			flags.ap = a_;

			if (a_ == "pm" && flags.h && (1 <= flags.h && flags.h <= 12)) {
				flags.h += 12;
				dt.setHours(flags.h);
			}

			return pos_s + g_[0].length;
		},
		A = a,
		g = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			const h_ = +g_[0];

			if (h_ <= 0 || 12 < h_) return -1;

			if (flags.ap == "pm") h_ += 12;
			flags.h = h_;
			dt.setHours(flags.h);
			return pos_s + g_[0].length;
		}, 
		h = g,
		G = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			const h_ = +g_[0];

			if (h_ < 0 || 23 < h_) return -1;

			flags.ap = false;
			flags.h = h_;
			dt.setHours(flags.h);
			return pos_s + g_[0].length;
		}, 
		H = G,
		i = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			if (+g_[0] <= 0 || 59 < +g_[0]) return -1;
			flags.i = +g_[0];
			dt.setMinutes(flags.i);
			return pos_s + g_[0].length;
		}, 
		s = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,2})/))) return -1;
			if (+g_[0] <= 0 || 59 < +g_[0]) return -1;
			flags.s = +g_[0];
			dt.setSeconds(flags.s);
			return pos_s + g_[0].length;
		}, 
		v = (s, pos_s, dt, flags)=>{
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,3})/))) return -1;
			flags.ms = +('0.' + g_[0]);
			dt.setMilliseconds(~~(flags.ms * 1e3));
			return pos_s + g_[0].length;
		}, 
		u = (s, pos_s, dt, flags)=> {
			if (!(g_ = s.substr(pos_s).match(/^(\d{1,6})/))) return -1;
			flags.ms = +('0.' + g_[0]);
			dt.setMilliseconds(~~(flags.ms * 1e3)); // actually JS can't handle microseconds
			return pos_s + g_[0].length;
		}, 
		U = (s, pos_s, dt, flags)=> {
			if (!(g_ = s.substr(pos_s).match(/^(\d+)/))) return -1;
			dt.setTime(+g_[0] * 1000);
			flags.y = dt.getFullYear();
			flags.m = dt.getMonth() + 1;
			flags.d = dt.getDate();
			flags.h = dt.getHours();
			flags.i = dt.getMinutes();
			flags.s = dt.getSeconds();
			flags.ms = dt.getMilliseconds();
			flags.ap = false;
			// flags.tz = 
			return pos_s + g_[0].length;
		},
		e = (s, pos_s, dt, flags)=>{
			if (g_ = s.substr(pos_s).match(/^([\+\-]?)(\d{2})\:?(\d{2})/)) {
				flags.tz = (+g_[2]) * 60 + (+g_[3]);
				if (g_[1] === "-") flags.tz *= -1;

				return pos_s + g_[0].length;
			}
			if (g_ = s.substr(pos_s).match(/^([\w\/]+)/)) {
				// Not Supported @TODO
				return pos_s + g_[0].length;
			}
		}, 
		O = e,
		P = e, 
		T = e;
	return {
		d, j, D, l, S, z, 
		F, M, m, n,
		Y, y,
		a, A, g,h, G,H, i ,s, v,u,
		U, 
		e, O, P, T, 
	}
})();

const parse_from_format = (format_s, datetime)=> {
	const dt = new Date();

	let s = `${(datetime || "")}`.toLowerCase().trim();
	let format = `${(format_s || "")}`.trim();

	const p_sp = /[\s\n]+/;
	const p_sep = /[;\:\/\.,\-\(\)]/;

	let flags_init = {y:false, m:false, d:false, 
				h:false, i:false, s:false, ms: false,
				tz:false,  ap: false,
				p:false, err:false};
	let flags = Object.assign({}, flags_init);

	let pos = 0;   // format
	let pos_s = 0; // s
	for (pos=0,len=format.length; pos < len; pos++) {
		if (s.length <= pos_s) {
			// skip spaces
			while(pos < len && format[pos].match(p_sp)) pos++;
			if (pos < len) {
				if (flags.p) {
					flags.err = 'failed to parse format';
					break;
				} else {
					throw 'failed to parse format';
				}
			} else {
				break;
			}
		}
		if (format[pos] == '\\' && pos + 1 < len) {
			pos++;
			if (format[pos] == s[pos_s]) {
				pos++;
				pos_s++;
			}
		}

		//console.log(pos, pos_s);
		
		switch(true) {
			// format_parser
			case (format[pos] in format_parser):
				pos_s = format_parser[ format[pos] ](s, pos_s , dt, flags);
				if (pos_s < 0) {
					if (flags.p) {
						flags.err = 'failed to parse format: ' + format[pos];
						break;
					} else {
						throw 'failed to parse format: ' +  format[pos];
					}
				}
			break;
			// space
			case !!format[pos].match(p_sp):
				if (! s[pos_s].match(p_sp)) {
					if (flags.p) {
						flags.err = 'failed to parse format: ' + format[pos];
						break;
					} else {
						throw 'failed to parse format: ' + format[pos];
					}
				}

				while(pos < len && format[pos].match(p_sp)) pos++;
				while(pos_s < s.length && s[pos_s].match(p_sp)) pos_s++;
				pos--; // cancel pos++;
			break;
			// # 
			case format[pos] == "#":
				if (! s[pos_s].match(p_sep)) {
					if (flags.p) {
						flags.err = 'failed to parse format: ' + format[pos];
						break;
					} else {
						throw 'failed to parse format: ' + format[pos];
					}
				}
				pos_s++;
			break;
			// ?
			case format[pos] == "?":
				pos_s++;
			break;
			// *
			case format[pos] == "*":
				const next_c = (pos+1 < len ? format[pos+1] : "");
				pos_s++;
				while(
					pos_s < s.length 
					&& s[pos_s] != next_c 
					//&& (s[pos_s].match(p_sep) || s[pos_s].match(p_sp))
					&& !s[pos_s].match(/[0-9a-zA-Z]+/)
				) pos_s++;
			break;
			// ! (reset)
			case format[pos] == '!':
				dt.setTime(0);
				flags = Object.assign(flags, flags_init);
			break;
			// | (reset times)
			case format[pos] == '|':
				if (! flags.y) dt.setFullYear(1970);
				if (! flags.m) dt.setMonth(0);
				if (! flags.d) dt.setDate(0);
				if (! flags.h) dt.setHours(0);
				if (! flags.i) dt.setMinutes(0);
				if (! flags.s) dt.setSeconds(0);
				if (! flags.ms) dt.setMilliseconds(0);
				if (! flags.h) {
					flags.ap = false;
				}
				// if (! flags.tz) flags.tz = false;
			break;
			// + (no error)
			case format[pos] == '+':
				flags.p = true;
			break;
			case format[pos] == s[pos_s]:
				pos_s++;
			break;
			default:
				if (flags.p) {
					flags.err = 'failed to parse format: ' + format[pos];
					break;
				} else {
					throw 'failed to parse format: ' + format[pos];
				}
			break;
		}
		if (flags.err) {
			break;
		}
	}

	const res = {};

	let t = ~~(dt.getTime() / 1000);

	res.dt = dt;
	res.t = t;

	return res;
};


module.exports = {
	format_parser, 
	parse_from_format, 
}

