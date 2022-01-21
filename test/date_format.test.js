
const {date_format} = require("../function/date_format.js");


test("test date_format()", ()=>{
	const d = new Date("2021-12-29T18:24:00+09:00");
	 
	// The first argument can be both int or a `Date` object.
	expect(date_format(1640769840,"r")).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 
	expect(date_format(d,"r")).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 
	 
	// Each format
	expect(date_format(d,"l jS \\of F Y h:i:s A")).toStrictEqual("Wednesday 29th of December 2021 06:24:00 PM") 
	expect(date_format(d,"Y-m-d H:i:s")).toStrictEqual("2021-12-29 18:24:00") 
	expect(date_format(d,"y n j")).toStrictEqual("21 12 29") 
	expect(date_format(d,"W")).toStrictEqual("52") 
	expect(date_format(d,"D l w N")).toStrictEqual("Wed Wednesday 3 3") // Day
	expect(date_format(d,"F m M n t")).toStrictEqual("December 12 Dec 12 31") // Month
	expect(date_format(d,"Y y L o")).toStrictEqual("2021 21 0 2021") // Year
	expect(date_format(d,"a A B")).toStrictEqual("pm PM 433") // Time
	expect(date_format(d,"g G h H")).toStrictEqual("6 18 06 18") // Hour
	expect(date_format(d,"i s u v")).toStrictEqual("24 00 000000 000") // Minutes / Seconds
	expect(date_format(d,"Z P O")).toStrictEqual("32400 +09:00 +0900") // Timezone
	expect(date_format(1640769840,"c")).toStrictEqual("2021-12-29T18:24:00+09:00") 
	expect(date_format(1640769840,"Z")).toStrictEqual("32400") 
	expect(date_format(1640769840,"P")).toStrictEqual("+09:00") 
	expect(date_format(1640769840,"O")).toStrictEqual("+0900") 
	expect(date_format(1640769840,"U")).toStrictEqual("1640769840") // Timestamp
	expect(date_format(1640769840,"r")).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 	
})