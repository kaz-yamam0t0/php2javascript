
/** 
 * Javascript equivalent to php `date`
 * 
 * Format a local time/date (Some formats are not supported)
 * @see https://www.php.net/manual/en/function.date.php
 * 
 * @param string format
 * @param ?int|Date timestamp
 * @return string
 */
const weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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
		// W: d=>d.getDay(), // @TODO
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
		o = d=>d.getFullYear(), // @TODO 

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

const date = (format, t=null)=>{
	if (t === null) {
		t = ~~((new Date()).getTime() / 1000);
	}
	const d = ((t instanceof Date) ? t : new Date(~~t * 1000));

	// convert to UTC
	// d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);

	return format.replace(/(.?)([a-zA-Z])/g, (_s,s,f)=>{
		if (!(f in format_params)) {
			return s + f;
		} 
		if (s == "\\") {
			return f;
		}
		return s + format_params[f](d);
	});
}

module.exports = {date}