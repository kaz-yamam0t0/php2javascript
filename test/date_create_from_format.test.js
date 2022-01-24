
const {date_create_from_format} = require("../function/date_create_from_format.js");


test("test date_parse()", ()=>{
	const testcases = [
		{
			format: " l jS \\of F Y  h:i:s A",
			data: "Wednesday 29th of December  2021 06:24:12 PM ",
			date: new Date(2021, 11,29,18,24,12),
		}, 
		{
			format: "Y-m-d H:i:s",
			data: "2021-12-29 18:24:12",
			date: new Date(2021, 11,29,18,24,12),
		}, 
		{
			format: "Y#n#j H:i:s",
			data: "2021,12,29 18:24:12",
			date: new Date(2021, 11,29,18,24,12),
		}, 
		{
			format: "Y?n*j|",
			data: "2021a12___29 18:24:12",
			date: new Date(2021, 11,29,0,0,0),
		}, 
		{
			format: "Y#n#j|+j",
			data: "2021/12/29 ___",
			date: new Date(2021, 11,29,0,0,0),
		}, 
		{
			format: "U",
			data: "1640769840",
			date: new Date(2021, 11,29,18,24,0),
		}, 
	];
	testcases.forEach(({format, data, date})=>{
		const d = date_create_from_format( format, data);

		expect(d.getFullYear()).toEqual(date.getFullYear());
		expect(d.getMonth()).toEqual(date.getMonth());
		expect(d.getDate()).toEqual(date.getDate());
		expect(d.getHours()).toEqual(date.getHours());
		expect(d.getMinutes()).toEqual(date.getMinutes());
		expect(d.getSeconds()).toEqual(date.getSeconds());
	});
})
