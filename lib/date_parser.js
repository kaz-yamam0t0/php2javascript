
const {
	weeks ,
	months, 
	regexp_months,
	regexp_weeks,

	get_month_num,
	get_weekday_num, 
	get_weekday,
	get_last_day,
	check_date,

	normalize, 
	norm, 
} = require("./date_util");


const scan = (data, s, pos)=>{
	if (s.length <= pos) {
		return -1;
	}
	// const s_ = s.substr(pos);

	// skip spaces
	while(s.length > pos && s[pos].match(/^[\s\n\r\t]$/)) {
		pos++
	}
	if (s.length <= pos) {
		return pos;
	}

	const s_ = s.substr(pos);
	let g = null;

	// Now
	/* if (g = s_.substr(0,4).match(/now\b/i)) {
		const now_ = new Date();
		data.y = now_.getFullYear();
		data.m = now_.getMonth() + 1;
		data.d = now_.getDate();
		data.h = now_.getHours();
		data.m = now_.getMinutes();
		data.s = now_.getSeconds();
		data.us = now_.getMilliseconds() * 1000;
		pos += g[0].length;
	}  */
	// Symbols
	if (g = s_.match(/^(yesterday|midnight|today|now|noon|tomorrow)\b/i)) {
		const word_ = g[0].toLowerCase();
		if (word_ == "yesterday") {
			data.additions.push({n:-1, unit:"day", h:0, i:0, s:0});
		} else if (word_ == "midnight" || word_ == "today") {
			// data.h = data.m = data.s = data.us = 0;
			data.additions.push({n:0, unit:"day", h:0, i:0, s:0});
		} else if (word_ == "now") {
			// ignored
		} else if (word_ == "noon") {
			//data.h = 12;
			//data.m = data.s = data.us = 0;
			data.additions.push({n:0, unit:"day", h:12, i:0, s:0});
		} else if (word_ == "tomorrow") {
			data.additions.push({n:+1, unit:"day", h:0, i:0, s:0});
		} 
		pos += g[0].length;
	} 
	// Month
	else if (g = s_.match(new RegExp(`^${regexp_months}\\b`,"i"))) {
		data.m = get_month_num(g[0]);
		pos += g[0].length;
	} 
	// Week
	else if (g = s_.match(new RegExp(`^${regexp_weeks}\\b`,"i"))) {
		data.day = get_weekday_num(g[0]);
		pos += g[0].length;
	} 
	// 1 year, month, day, hour,minute,week,millisecond,microseconds
	else if (g = s_.match(/^([\+\-]?)\s*(\d+|a)\s*(year|month|day|hour|minute|second|week|millisecond|microsecond|msec|ms|µsec|µs|usec|sec|min|forth?night)s?\b/i)) {
		let [sign, n, unit] = [g[1],g[2],g[3].toLowerCase()];
		if (n == "a") n = 1;
		n = +n;
		if (sign === "-") n *= -1;
		data.additions.push({n, unit});

		pos += g[0].length;
	} 
	// (first|last day of) first|last year|month|day
	else if (g = s_.match(new RegExp(`^((first|last) day of )?(next|last) ((year|month|day)|${regexp_months}|${regexp_weeks})\\b`,"i"))) {
		let [day_flg, pos_flg, word, month_name, day_name] = [g[2] , g[3], g[5],g[6],g[7]];

		let data_ = {
			day_flg, // undefined | first | last (day of)
			pos_flg, // first | last
		};
		if (month_name) {
			data_["month"] = get_month_num(month_name);
		} else if (day_name) {
			data_["weekday"] = get_weekday_num(day_name);
		} else {
			data_["word"] = word;
		}
		data.additions.push(data_);

		pos += g[0].length;
	}
	// 1st January 2021
	else if (g = s_.match(new RegExp(`^(\\d{1,2})(st|nd|rd|th)?\\s*${regexp_months}(\\s+(\\d+))?\\b`,"i"))) {
		data.d = +g[1];
		data.m = get_month_num(g[3]);
		data.y = +g[5];
		
		pos += g[0].length;
	}
	// y/m/d y-m-d m/d/y d.m.y
	else if (g = s_.match(/^(\d+)([/\-\.])(\d+)\2(\d+)\b/)) {
		const sep_ = g[2];
		// d.m.y
		if (sep_ == '.') {
			if (!check_date({y:+g[4], m:+g[3], d:+g[1]})) return -1;
			[data.y, data.m, data.d] = [+g[4], +g[3], +g[1]];
		}
		// y-m-d d-m-y
		else if (sep_ == '-') {
			// d-m-y
			if (check_date({y:+g[4], m:+g[3], d:+g[1]})) {
				[data.y, data.m, data.d] = [+g[4], +g[3], +g[1]];
			} 
			// Y-m-d
			else if (check_date({y:+g[1], m:+g[3], d:+g[4]})) {
				[data.y, data.m, data.d] = [+g[1], +g[3], +g[4]];
			} 
			else return -1;
		}
		// y/m/d m/d/y
		else if (sep_ == '/') {
			//m/d/y
			if (check_date({y:+g[4], m:+g[1], d:+g[3]})) {
				[data.y, data.m, data.d] = [+g[4], +g[1], +g[3]];
			}
			//y/m/d
			else if (check_date({y:+g[1], m:+g[3], d:+g[4]})) {
				[data.y, data.m, data.d] = [+g[1], +g[3], +g[4]];
			} 
			else return -1;
		}
		pos += g[0].length;
	}
	// H:i:s
	else if (g = s_.match(/^(\d{2})\:(\d{2})(\:(\d{2}(\.\d+)?))?(\s+(a\.m\.|p\.m\.|am|pm))?\b/i)) {
		let [_h, _i] = [+g[1], +g[2]];
		let _s = typeof g[4] === "undefined" ? -1 : +g[4];
		let _pm = typeof g[7] === "undefined" ? "" : g[7].toLowerCase().replace(/\./g,"");
		
		if (_h < 0 || 24 <= _h) return -1;
		if (_i < 0 || 60 <= _i) return -1;
		if (60 <= _s) return -1;

		if (_pm && _h > 12) return -1; 
		if (_pm == "pm") {
			if (_h != 12) _h += 12;
		}
		
		data.h = _h;
		data.i = _i;
		if (_s >= 0) {
			data.s = ~~_s;
			data.us = (_s - data.s) * 100000;
		}

		pos += g[0].length;
	} 
	// +00:00
	else if (g = s_.match(/^([\-\+]?)(\d{2})\:?(\d{2})\b/i)) {
		let [sign, h_, i_] = [g[1], +g[2], +g[3]];
		data.z = (sign === "-" ? -1 : 1) * (h_ * 60 + i_);

		pos += g[0].length;
	}
	else {
		return -1;
	}

	return pos;
};


const add = (d, a)=>{
	let n = a.n;
	let unit = a.unit;

	switch(unit) {
		// week|forth?night
		case 'year':
			//d.setFullYear(d.getFullYear() + n);
			d.y += n;
			break;
		case 'month':
			//d.setMonth(d.getMonth() + n);
			d.m += n;
			const last_d = get_last_day(d);
			if (d.d > last_d) d.d = last_d;
			break;
		case 'day':
			//d.setDate(d.getDate() + n);
			d.d += n;
			break;
		case 'hour':
			//d.setHours(d.getHours() + n);
			d.h += n;
			break;
		case 'minute':
		case 'min':
			//d.setMinutes(d.getMinutes() + n);
			d.i += n;
			break;
		case 'second':
		case 'sec':
			//d.setSeconds(d.getSeconds() + n);
			d.s += n;
			break;
		case 'millisecond':
		case 'msec':
		case 'ms':
			//d.setMilliseconds(d.getMilliseconds() + n);
			d.us += n * 1000;
			break;
		case 'microsecond':
		case 'µsec':
		case 'µs':
			//d.setMilliseconds(d.getMilliseconds() + n / 1000);
			d.us += n;
			break;
		case 'week':
			//d.setDate(d.getDate() + n * 7);
			d.d += n * 7;
			break;
		case 'forthnight':
		case 'fortnight':
			//d.setDate(d.getDate() + n * 14);
			d.d += n * 14;
			break;
	}

	normalize(d);

	if (typeof a.y !== "undefined") {
		d.y = a.y;
	}
	if (typeof a.m !== "undefined") {
		d.m = a.m-1;
	}
	if (typeof a.d !== "undefined") {
		d.d = a.d;
	}
	if (typeof a.h !== "undefined") {
		d.h = a.h;
	}
	if (typeof a.i !== "undefined") {
		d.i = a.i;
	}
	if (typeof a.s !== "undefined") {
		d.s = a.s;
	}
	normalize(d);

};


const move = (d, a)=>{
	// add 
	if (typeof a.unit !== "undefined") {
		add(d, a);
		return;
	}

	// next|last month
	if (typeof a.month !== "undefined") {
		if (a.pos_flg == "next" && d.m >= a.month) {
			// d.setFullYear(d.getFullYear() + 1);
			add(d, { n: 1, unit:"year" , m: a.month });
		} else if (a.pos_flg == "last" && d.m <= a.month) {
			//d.setFullYear(d.getFullYear() - 1);
			add(d, { n: -1, unit:"year" , m: a.month});
		}
		//d.setMonth(a.month - 1);
	} 
	// next|last weekday
	else if (typeof a.weekday !== "undefined") {
		const _weekday = get_weekday(d);
		if (a.pos_flg == "next") {
			let n = (a.weekday + 7 - 1 - _weekday) % 7 + 1;
			add(d, { n, unit:"day" });
		} else if (a.pos_flg == "last") {
			let n = -((_weekday + 7 - 1 - a.weekday) % 7 + 1);
			add(d, { n, unit:"day" });
		}
	}
	// next|last day|month|year
	else if (typeof a.word !== "undefined") {
		const n = (a.pos == "next") ? 1 : -1;
		if (a.word == "day") {
			add(d, { n, unit:"day" });
		} else if (a.word == "month") {
			add(d, { n, unit:"month" });
		} else if (a.word == "year") {
			add(d, { n, unit:"year" });
		}
	}

	// first|last day of
	if (a.day_flg) {
		if (a.day_flg == "first") {
			add(d, { n:0, unit:"month", d: 1 });
			//data.d = 1;
		} else if (a.day_flg == "last") {
			const d_ = new Date(d.y, d.m-1+1, 0, 0,0,0);
			add(d, { n:0, unit:"month", d: d_.getDate() });
			
			//data.m = d_.getMonth() + 1;
			//data.d = d_.getDate();
		}
	}
}



const parse = (datetime, t=null)=>{
	if (typeof datetime !== "string" || datetime.trim() == "") {
		return false;
	}
	const data = {
		y: -1,
		m: -1,
		d: -1,
		h: -1,
		i: -1,
		s: -1,
		us: -1,
		day: -1,
		z: undefined,
		//dst: undefined,
		//tzdb: undefined,
		//is_localtime: 0,
		//zone_type: 0,
		additions: [],

		dt: null, // (result) Date
		t: -1, // (result) unixtime
	};

	// base date
	let d = null;
	if (t) {
		d = ((t instanceof Date) ? t : new Date(~~t * 1000));
	}
	if (!d) {
		d = new Date();
		d.setHours(0);
		d.setMinutes(0);
		d.setSeconds(0);
		d.setMilliseconds(0);
	}
	data.y = d.getFullYear();
	data.m = d.getMonth() + 1;
	data.d = d.getDate();
	data.h = d.getHours();
	data.i = d.getMinutes();
	data.s = d.getSeconds();
	data.us = d.getMilliseconds() * 1000;

	// normalize the datetime string
	datetime = datetime.toLowerCase().trim();
	datetime = datetime.replace(/(\bthe\b|,)/g, " "); // ignore words
	datetime = datetime.replace(/\b(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}(:\d{2}(\.\d+)?)?)\s*(Z|[\-\+]?\d{2}\:?\d{2})?\b/i, 
		(m_, ymd_, his_, _s_, _us_, tz_)=>{
			if (tz_ == "z" || tz_ == "Z") {
				tz_ = "+00:00";
			}
			return `${ymd_} ${his_} ${tz_||""}`;
		});
	datetime = datetime.replace(/\s+/g, " ");
	
	// read the datetime string
	let pos = 0;
	let cnts = 0;
	while(cnts++ < 15 && pos < datetime.length) {
		if ((pos = scan(data, datetime, pos)) < 0) {
			throw 'failed to parse datetime string';
		}
	}
	
	// additions
	data.additions.forEach((a)=>{
		move(data, a);
	});

	const res = new Date(
		data.y, data.m-1, data.d, 
		Math.max(0,data.h), Math.max(0,data.i), Math.max(0,data.s), 
		~~(Math.max(0, data.us)/1000) 
	);

	let res_t = ~~(res.getTime() / 1000);
	if (data.z) {
		res_t += res.getTimezoneOffset();
		res_t += data.z;
	}

	data.t = res_t; // affected with timezone if data.z is specified.
	data.dt = res;

	return data;
}



module.exports = {
	scan,
	add, 
	move, 
	parse, 
}

