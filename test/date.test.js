
const {date} = require("../function/date.js");


test("test date()", ()=>{
	const d = new Date(1640769840 * 1000);
	 
	// The second argument can be both int or a `Date` object.
	expect(date("r",1640769840)).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 
	expect(date("r",d)).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 
	 
	// Each format
	expect(date("l jS \\of F Y h:i:s A",d)).toStrictEqual("Wednesday 29th of December 2021 06:24:00 PM") 
	expect(date("Y-m-d H:i:s",d)).toStrictEqual("2021-12-29 18:24:00") 
	expect(date("y n j",d)).toStrictEqual("21 12 29") 
	expect(date("D l w N",d)).toStrictEqual("Wed Wednesday 3 3") // Day
	expect(date("F m M n t",d)).toStrictEqual("December 12 Dec 12 31") // Month
	expect(date("Y y L o",d)).toStrictEqual("2021 21 0 2021") // Year
	expect(date("a A B",d)).toStrictEqual("pm PM 433") // Time
	expect(date("g G h H",d)).toStrictEqual("6 18 06 18") // Hour
	expect(date("i s u v",d)).toStrictEqual("24 00 000000 000") // Minutes / Seconds
	expect(date("Z P O",d)).toStrictEqual("32400 +09:00 +0900") // Timezone
	expect(date("c",d)).toStrictEqual("2021-12-29T18:24:00+09:00") 
	expect(date("Z",d)).toStrictEqual("32400") 
	expect(date("P",d)).toStrictEqual("+09:00") 
	expect(date("O",d)).toStrictEqual("+0900") 
	expect(date("U",d)).toStrictEqual("1640769840") // Timestamp
	expect(date("r",d)).toStrictEqual("Wed, 29 Dec 2021 18:24:00 +0900") 	
})