

const weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const months_dict = (function() {
	let r = {};
	months.forEach((m_, index_)=>{
		m_ = m_.toLowerCase();
		r[m_] = index_ + 1;
		r[m_.substr(0,3)] = index_ + 1;
	});
	return r;
})();
const regexp_months = `(${Object.keys(months_dict).join("|")})`;

const weeks_dict = (function() {
	let r = {};
	weeks.forEach((w_, index_)=>{
		w_ = w_.toLowerCase();
		r[w_] = index_;
		r[w_.substr(0,3)] = index_;
	});
	return r;
})();
const regexp_weeks = `(${Object.keys(weeks_dict).join("|")})`;



const get_month_num = (month_s)=>{
	return months_dict[month_s.toLowerCase()];
}
const get_weekday_num = (day_s)=>{
	return weeks_dict[day_s.toLowerCase()];
}

const get_weekday = (y,m,d)=>{
	if (typeof y === "object") {
		d = y.d;
		m = y.m;
		y = y.y;
	}
	return (new Date(y,m-1,d,0,0,0)).getDay();
}
const get_last_day = (y,m)=>{
	if (typeof y === "object") {
		m = y.m;
		y = y.y;
	}
	[y, m] = norm(y, m, 12);

	if (m == 4 || m == 6 || m == 9 || m == 11) {
		return 30;
	}
	if (m == 2) {
		if (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) {
			return 29
		} else {
			return 28
		}
	}
	return 31;
}


const check_date = (ymd)=>{ // {y,m,d}
	if (ymd.y < 0) return false;
	if (ymd.m < 1 || 12 < ymd.m) return false;
	if (ymd.d < 1 || 31 < ymd.d) return false;

	if (ymd.d > get_last_day(ymd)) {
		return false;
	}
	return true;
}


const normalize = (data)=>{
	[data.s, data.us] = norm(data.s, data.us, 1000000);
	[data.i, data.s] = norm(data.i, data.s, 60);
	[data.h, data.i] = norm(data.h, data.i, 60);
	[data.d, data.h] = norm(data.d, data.h, 24);

	// day, month, year
	normalize_ymd(data);
};
const normalize_ymd = (data)=> {
	// year, month
	let m = data.m - 1;
	[data.y, m] = norm(data.y, m, 12);
	data.m = m + 1
	
	// days
	while (data.d <= 0) {
		// last month
		data.m--
		if (data.m <= 0) {
			data.m = 12
			data.y--
		}
		// days of the last month
		data.d += get_last_day(data)
	}

	let last_d = get_last_day(data)
	while (data.d > last_d) {
		data.m++
		if (data.m > 12) {
			data.m = 1
			data.y++
		}
		data.d -= last_d

		last_d = get_last_day(data)
	}
};
const norm = (hi, lo, base)=> {
	if (lo < 0) {
		let n = ~~((-lo-1)/base + 1)
		hi -= n
		lo += n * base
	}
	if (lo >= base) {
		let n = ~~(lo / base)
		hi += n
		lo -= n * base
	}
	return [hi, lo]
}
const iso8601_first_date = (d)=>{
	// the first day
	let _d = new Date(d.getFullYear(),0,1,0,0,0);
	let _t = _d.getTime();
	let _w = _d.getDay();
	if (_w > 3) {
		_t += (7 - _w) * 86400 * 1000;
	} else {
		_t -= (7 - _w) * 86400 * 1000;
	}
	return new Date(_t);
};

const format_params = (function() {
	const 
		// Date
		d = d=>('0'+d.getDate()).substr(-2),
		j = d=>d.getDate(),
		S = d=>(["st","nd","rd"])[d.getDate()-1] || "th",

		// Day
		D = d=>weeks[d.getDay()].substr(0,3),
		l = d=>weeks[d.getDay()],
		w = d=>d.getDay(),
		W = d=>{
			// the first day
			let t = iso8601_first_date(d).getTime();
			return ~~((d.getTime() - t) / 1000 / 86400 / 7) + 1;
		},
		N = d=>(d.getDay()+6)%7+1, // 0-6 to 1-7 (starts with Sunday)

		// Month
		F = d=>months[d.getMonth()],
		m = d=>("0" + (d.getMonth()+1)).substr(-2),
		M = d=>months[d.getMonth()].substr(0,3),
		n = d=>(d.getMonth()+1),
		t = d=>{
			const d_ = new Date(d.getTime());
			d_.setMonth(d_.getMonth()+1);
			d_.setDate(0);
			return d_.getDate();
		},

		// Year
		Y = d=>d.getFullYear(),
		y = d=>(""+d.getFullYear()).substr(-2),
		L = d=>{
			let y = d.getFullYear();
			return (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) ? 1: 0;	
		},
		o = d=>{
			let first_d = iso8601_first_date(d);

			let y = d.getFullYear();
			if (d.getTime() < first_d.getTime()) {
				y--;
			} else if (d.getTime() > iso8601_first_date(new Date(first_d.getTime() + 86400 * (365 + 7) * 1000)).getTime()) {
				y++;
			}
			return y;
		}, 

		// Time
		a = d=>d.getHours()<12 ? "am":"pm",
		A = d=>d.getHours()<12 ? "AM":"PM",
		B = d=>{
			// Swatch Internet Time
			h_ = d.getHours();
			m_ = d.getMinutes()
			s_ = d.getSeconds();
			return (~~(1000 * (3600 * h_ + 60 * m_ + s_ - 28800) / 86400) + 1000) % 1000;
		},  
		
		// hours
		g = d=>d.getHours()%12,
		G = d=>d.getHours(),
		h = d=>('0'+(d.getHours() % 12)).substr(-2),
		H = d=>('0'+d.getHours()).substr(-2),

		// minutes
		i = d=>('0'+d.getMinutes()).substr(-2),

		// seconds
		s = d=>('0'+d.getSeconds()).substr(-2),

		// milliseconds
		v = d=>('00'+d.getMilliseconds()).substr(-3),

		// microseconds
		u = d=>('00'+d.getMilliseconds()).substr(-3)+"000",

		// Timezone
		e = d=>"", // (Not supported) @TODO 
		I = d=>"", // (Not supported) @TODO 
		Z = d=>d.getTimezoneOffset() * 60 * -1,
		P = d=>{
			const t = d.getTimezoneOffset() * -1;
			let ret = (t >= 0 ? "+" : "-");
			if (t < 0) t *= -1;

			ret += [
				("0"+(~~(t / 60))).substr(-2), 
				("0"+(t % 60)).substr(-2)
			].join(":");
			return ret;
		},
		p = d=>{
			let ret = P(d);
			return ret;
		},
		O = d=>{
			let ret = P(d);
			return ret.replace(":","");
		},
		T = d=>"", // (Not supported) @TODO 
		
		// Full Date/Time
		c = _d=>`${Y(_d)}-${m(_d)}-${d(_d)}T${H(_d)}:${i(_d)}:${s(_d)}${P(_d)}`, 

		//Wed, 29 Dec 2021 18:24:00 +0000
		r = _d=>`${D(_d)}, ${d(_d)} ${M(_d)} ${Y(_d)} ${H(_d)}:${i(_d)}:${s(_d)} ${O(_d)}`,

		U = d=>~~(d.getTime()/1000);
	
	return {
		// Date
		d,j,S, 

		// Day
		D,l,w,N,

		// Months
		F,m,M,n,t,

		// Year
		Y, y, L, o,

		// Time
		a, A, B,
		
		// hours
		g, G, h, H, 

		// minutes / seconds / milliseconds / microseconds
		i,s,u,v,

		// Timezone
		e, Z, T, I, P, p, O,

		// Full Date/Time
		c, r, U, 
	};
})();




module.exports = {
	weeks, 
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

	iso8601_first_date,
	format_params,
}

