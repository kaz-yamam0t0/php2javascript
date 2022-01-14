
const {sprintf} = require("../function/sprintf.js");

test("test sprintf()", ()=>{

	// Testcases for some common usages
	expect(sprintf("%d monkeys in the %s",5,"tree")).toBe("5 monkeys in the tree") 
	expect(sprintf("%2$d monkeys in the %1$s","tree",4)).toBe("4 monkeys in the tree") 

	// Testcases for each formats
	expect(sprintf("%b",43951789)).toBe("10100111101010011010101101") 
	expect(sprintf("%c",65)).toBe("A") 
	expect(sprintf("%d",43951789)).toBe("43951789") 
	expect(sprintf("%e",43951789)).toBe("4.395179e+7") 
	expect(sprintf("%u",43951789)).toBe("43951789") 
	expect(sprintf("%u",-43951789)).toBe("18446744073665599827") 
	expect(sprintf("%u",-1)).toBe("18446744073709551615") 
	expect(sprintf("%f",43951789)).toBe("43951789.000000") 
	expect(sprintf("%o",43951789)).toBe("247523255") 
	expect(sprintf("%s",43951789)).toBe("43951789") 
	expect(sprintf("%x",43951789)).toBe("29ea6ad") 
	expect(sprintf("%X",43951789)).toBe("29EA6AD") 

	// "l" format is always ignored in php sprintf
	expect(sprintf("%lb",43951789)).toBe("10100111101010011010101101") 
	expect(sprintf("%ld",43951789)).toBe("43951789") 
	expect(sprintf("%le",43951789)).toBe("4.395179e+7") 
	expect(sprintf("%lu",43951789)).toBe("43951789") 
	expect(sprintf("%lu",-43951789)).toBe("18446744073665599827") 
	expect(sprintf("%lu",-1)).toBe("18446744073709551615") 
	expect(sprintf("%lf",43951789)).toBe("43951789.000000") 
	expect(sprintf("%lo",43951789)).toBe("247523255") 
	expect(sprintf("%ls",43951789)).toBe("43951789") // l is ignored even with s
	expect(sprintf("%lx",43951789)).toBe("29ea6ad") 
	expect(sprintf("%lX",43951789)).toBe("29EA6AD") 

	// Testcases for "+"
	expect(sprintf("%+b",43951789)).toBe("10100111101010011010101101") 
	expect(sprintf("%+c",65)).toBe("A") // no "+" with chars or strings
	expect(sprintf("%+d",43951789)).toBe("+43951789") 
	expect(sprintf("%+e",43951789)).toBe("+4.395179e+7") 
	expect(sprintf("%+u",43951789)).toBe("43951789") 
	expect(sprintf("%+u",-43951789)).toBe("18446744073665599827") 
	expect(sprintf("%+u",-1)).toBe("18446744073709551615") 
	expect(sprintf("%+f",43951789)).toBe("+43951789.000000") 
	expect(sprintf("%+o",43951789)).toBe("247523255") 
	expect(sprintf("%+s",43951789)).toBe("43951789") 
	expect(sprintf("%+x",43951789)).toBe("29ea6ad") 
	expect(sprintf("%+X",43951789)).toBe("29EA6AD") 

	// Testcases for numbers
	expect(sprintf("%02d",1)).toBe("01") 
	expect(sprintf("%02.2f",1)).toBe("1.00") 
	expect(sprintf("%02.2f",1.1234)).toBe("1.12") 
	expect(sprintf("%06.2f",1.1234)).toBe("001.12") 

	// Testcases for numbers with general formats
	expect(sprintf("%g",123.4567)).toBe("123.457") 
	expect(sprintf("%.5g",123.456)).toBe("123.46") 
	expect(sprintf("%.2g",1234500000000)).toBe("1.2e+12") 
	expect(sprintf("%.2g","123.45e+10")).toBe("1.2e+12") 
	expect(sprintf("%.2g",1.2345e-8)).toBe("1.2e-8") 
	expect(sprintf("%.2g","123.45e-10")).toBe("1.2e-8") 
	expect(sprintf("%.2G",1234500000000)).toBe("1.2E+12") 
	expect(sprintf("%.2G","123.45e+10")).toBe("1.2E+12") 
	expect(sprintf("%.2G",1.2345e-8)).toBe("1.2E-8") 
	expect(sprintf("%.2G","123.45e-10")).toBe("1.2E-8") 

	// Testcases for numbers with "+"
	expect(sprintf("%+02d",1)).toBe("+1") 
	expect(sprintf("%+02.2f",1)).toBe("+1.00") 
	expect(sprintf("%+02.2f",1.1234)).toBe("+1.12") 
	expect(sprintf("%+06.2f",1.1234)).toBe("+01.12") 

	// Testcases for numbers with "+" and "-"
	expect(sprintf("%-+02d",1)).toBe("+1") 
	expect(sprintf("%-+03d",1)).toBe("+1 ") // "0" is evaluated only when the number does not change
	expect(sprintf("%-+02.2f",1)).toBe("+1.00") 
	expect(sprintf("%-+02.2f",1.1234)).toBe("+1.12") 
	expect(sprintf("%-+06.2f",1.1234)).toBe("+1.120") // "0" is evaluated only when the number does not change

	// Testcases for string positions
	expect(sprintf("[%s]","monkey")).toBe("[monkey]") 
	expect(sprintf("[%10s]","monkey")).toBe("[    monkey]") 
	expect(sprintf("[%-10s]","monkey")).toBe("[monkey    ]") 
	expect(sprintf("[%010s]","monkey")).toBe("[0000monkey]") 
	expect(sprintf("[%'#10s]","monkey")).toBe("[####monkey]") 
	expect(sprintf("[%-010s]","monkey")).toBe("[monkey0000]") 
	expect(sprintf("[%-'#10s]","monkey")).toBe("[monkey####]") 	
})