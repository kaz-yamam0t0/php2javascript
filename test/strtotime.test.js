
const {strtotime} = require("../function/strtotime.js");


test("test strtotime()", ()=>{

	// General Format
	// expect(strtotime("now")).toStrictEqual(1640769840) 
	expect(strtotime("10 September 2000")).toStrictEqual(968511600) 
	expect(strtotime("2000/09/10")).toStrictEqual(968511600) 
	expect(strtotime("2000-09-10")).toStrictEqual(968511600) 
	expect(strtotime("2000-09-10 12:34:56")).toStrictEqual(968556896) 
	expect(strtotime("Wed, 29 Dec 2021 18:24:00 +0900")).toStrictEqual(1640769840) 
	expect(strtotime("2021-12-29T18:24:00+09:00")).toStrictEqual(1640769840) 
	expect(strtotime("Wednesday 29th December 2021 06:24:00 PM")).toStrictEqual(1640769840) 

	// American or European format (Ambiguious)
	expect(strtotime("9/10/2000")).toStrictEqual(968511600) 
	expect(strtotime("10.9.2000")).toStrictEqual(968511600) 
	expect(strtotime("10-9-2000")).toStrictEqual(968511600) 
	// expect(strtotime("2000.9.10")).toStrictEqual(968511600) // returns false.

	// Relative Format
	expect(strtotime("+0 day",1640769840)).toStrictEqual(1640769840) // 2021-12-29 09:24:00
	expect(strtotime("+1 day",1640769840)).toStrictEqual(1640856240) // 2021-12-30 09:24:00
	expect(strtotime("+1 day 1week",1640769840)).toStrictEqual(1641461040) // 2022-01-06 09:24:00
	expect(strtotime("+1 day 2 week 3 months -4 years 5 hours -6 minutes 7 seconds",1640769840)).toStrictEqual(1523629087) // 2018-04-13 14:18:07
	expect(strtotime("-1year -13 months -8week",1640769840)).toStrictEqual(1570181040) // 2019-10-04 09:24:00

	expect(strtotime("1year ago",1640769840)).toStrictEqual(1609233840) // 2020-12-29 09:24:00
	expect(strtotime("P1Y",1640769840)).toStrictEqual(1672305840) // 2022-12-29 09:24:00

	// php `strtotime` seems not to do well with "next" or "prev" format and timezone.
	// expect(strtotime("next Thursday",1640769840)).toStrictEqual(1640790000) // 2021-12-29 15:00:00
	// expect(strtotime("last Monday",1640769840)).toStrictEqual(1640530800) // 2021-12-26 15:00:00
	expect(strtotime("next Thursday",1640769840)).toStrictEqual(1640856240) // 2021-12-30 09:24:00
	expect(strtotime("last Monday",1640769840)).toStrictEqual(1640597040) // 2021-12-27 09:24:00

	// last days.
	// expect(strtotime("+1 month",1640769840)).toStrictEqual(1614763440) // php strtotime returns 3/3 (normalized date of 2/31)
	//expect(strtotime("+1 month",1640769840)).toStrictEqual(1614504240) // 2021-02-28 09:24:00	
})