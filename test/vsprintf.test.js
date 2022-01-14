
const {vsprintf} = require("../function/vsprintf.js");

test("test vsprintf()", ()=>{

	// Testcases for some common usages
	expect(vsprintf("%d monkeys in the %s",[5,"tree"])).toBe("5 monkeys in the tree") 
	expect(vsprintf("%2$d monkeys in the %1$s",["tree",4])).toBe("4 monkeys in the tree") 

	// Testcases for each formats
	expect(vsprintf("%b",[43951789])).toBe("10100111101010011010101101") 
	expect(vsprintf("%c",[65])).toBe("A") 
	expect(vsprintf("%d",[43951789])).toBe("43951789") 
	expect(vsprintf("%e",[43951789])).toBe("4.395179e+7") 
	expect(vsprintf("%u",[43951789])).toBe("43951789") 
	expect(vsprintf("%u",[-43951789])).toBe("18446744073665599827") 
	expect(vsprintf("%u",[-1])).toBe("18446744073709551615") 
	expect(vsprintf("%f",[43951789])).toBe("43951789.000000") 
	expect(vsprintf("%o",[43951789])).toBe("247523255") 
	expect(vsprintf("%s",[43951789])).toBe("43951789") 
	expect(vsprintf("%x",[43951789])).toBe("29ea6ad") 
	expect(vsprintf("%X",[43951789])).toBe("29EA6AD") 

	// "l" format is always ignored in php sprintf
	expect(vsprintf("%lb",[43951789])).toBe("10100111101010011010101101") 
	expect(vsprintf("%ld",[43951789])).toBe("43951789") 
	expect(vsprintf("%le",[43951789])).toBe("4.395179e+7") 
	expect(vsprintf("%lu",[43951789])).toBe("43951789") 
	expect(vsprintf("%lu",[-43951789])).toBe("18446744073665599827") 
	expect(vsprintf("%lu",[-1])).toBe("18446744073709551615") 
	expect(vsprintf("%lf",[43951789])).toBe("43951789.000000") 
	expect(vsprintf("%lo",[43951789])).toBe("247523255") 
	expect(vsprintf("%ls",[43951789])).toBe("43951789") // l is ignored even with s
	expect(vsprintf("%lx",[43951789])).toBe("29ea6ad") 
	expect(vsprintf("%lX",[43951789])).toBe("29EA6AD") 

	// Testcases for "+"
	expect(vsprintf("%+b",[43951789])).toBe("10100111101010011010101101") 
	expect(vsprintf("%+c",[65])).toBe("A") // no "+" with chars or strings
	expect(vsprintf("%+d",[43951789])).toBe("+43951789") 
	expect(vsprintf("%+e",[43951789])).toBe("+4.395179e+7") 
	expect(vsprintf("%+u",[43951789])).toBe("43951789") 
	expect(vsprintf("%+u",[-43951789])).toBe("18446744073665599827") 
	expect(vsprintf("%+u",[-1])).toBe("18446744073709551615") 
	expect(vsprintf("%+f",[43951789])).toBe("+43951789.000000") 
	expect(vsprintf("%+o",[43951789])).toBe("247523255") 
	expect(vsprintf("%+s",[43951789])).toBe("43951789") 
	expect(vsprintf("%+x",[43951789])).toBe("29ea6ad") 
	expect(vsprintf("%+X",[43951789])).toBe("29EA6AD") 

	// Testcases for numbers
	expect(vsprintf("%02d",[1])).toBe("01") 
	expect(vsprintf("%02.2f",[1])).toBe("1.00") 
	expect(vsprintf("%02.2f",[1.1234])).toBe("1.12") 
	expect(vsprintf("%06.2f",[1.1234])).toBe("001.12") 

	// Testcases for numbers with general formats
	expect(vsprintf("%g",[123.4567])).toBe("123.457") 
	expect(vsprintf("%.5g",[123.456])).toBe("123.46") 
	expect(vsprintf("%.2g",[1234500000000])).toBe("1.2e+12") 
	expect(vsprintf("%.2g",["123.45e+10"])).toBe("1.2e+12") 
	expect(vsprintf("%.2g",[1.2345e-8])).toBe("1.2e-8") 
	expect(vsprintf("%.2g",["123.45e-10"])).toBe("1.2e-8") 
	expect(vsprintf("%.2G",[1234500000000])).toBe("1.2E+12") 
	expect(vsprintf("%.2G",["123.45e+10"])).toBe("1.2E+12") 
	expect(vsprintf("%.2G",[1.2345e-8])).toBe("1.2E-8") 
	expect(vsprintf("%.2G",["123.45e-10"])).toBe("1.2E-8") 

	// Testcases for numbers with "+"
	expect(vsprintf("%+02d",[1])).toBe("+1") 
	expect(vsprintf("%+02.2f",[1])).toBe("+1.00") 
	expect(vsprintf("%+02.2f",[1.1234])).toBe("+1.12") 
	expect(vsprintf("%+06.2f",[1.1234])).toBe("+01.12") 

	// Testcases for numbers with "+" and "-"
	expect(vsprintf("%-+02d",[1])).toBe("+1") 
	expect(vsprintf("%-+03d",[1])).toBe("+1 ") // "0" is evaluated only when the number does not change
	expect(vsprintf("%-+02.2f",[1])).toBe("+1.00") 
	expect(vsprintf("%-+02.2f",[1.1234])).toBe("+1.12") 
	expect(vsprintf("%-+06.2f",[1.1234])).toBe("+1.120") // "0" is evaluated only when the number does not change

	// Testcases for string positions
	expect(vsprintf("[%s]",["monkey"])).toBe("[monkey]") 
	expect(vsprintf("[%10s]",["monkey"])).toBe("[    monkey]") 
	expect(vsprintf("[%-10s]",["monkey"])).toBe("[monkey    ]") 
	expect(vsprintf("[%010s]",["monkey"])).toBe("[0000monkey]") 
	expect(vsprintf("[%'#10s]",["monkey"])).toBe("[####monkey]") 
	expect(vsprintf("[%-010s]",["monkey"])).toBe("[monkey0000]") 
	expect(vsprintf("[%-'#10s]",["monkey"])).toBe("[monkey####]") 	
})