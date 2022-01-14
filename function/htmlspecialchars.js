/** 
 * Javascript equivalent to php `htmlspecialchars`
 * 
 * Convert special characters to HTML entities
 * @see https://www.php.net/manual/en/function.htmlspecialchars.php
 * 
 * @param string s
 * @param int flags (changed from `ENT_COMPAT` to `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401` in PHP 8.1.0)
 * @param ?string encoding
 * @param bool double_encode
 * @return string
 */
/**
 * ### Constants ###
 * 
 * ENT_COMPAT     : Will convert double-quotes and leave single-quotes alone.
 * ENT_QUOTES     : Will convert both double and single quotes.
 * ENT_NOQUOTES   : Will leave both double and single quotes unconverted.
 * ENT_IGNORE     : Silently discard invalid code unit sequences instead of returning an empty string. Using this flag is discouraged as it may have security implications.
 * ENT_DISALLOWED : Replace invalid code points for the given document type with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of leaving them as is. This may be useful, for instance, to ensure the well-formedness of XML documents with embedded external content.
 * ENT_SUBSTITUTE : Replace invalid code unit sequences with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of returning an empty string.
 * ENT_HTML401    : Handle code as HTML 4.01.
 * ENT_XML1       : Handle code as XML 1.
 * ENT_XHTML      : Handle code as XHTML.
 * ENT_HTML5      : Handle code as HTML 5.
 */
const ENT_COMPAT     = 2
const ENT_QUOTES     = 3
const ENT_NOQUOTES   = 0
const ENT_IGNORE     = 4
const ENT_DISALLOWED = 128
const ENT_SUBSTITUTE = 8
const ENT_HTML401    = 0
const ENT_XML1       = 16
const ENT_XHTML      = 32
const ENT_HTML5      = 48

/**
 * You can find html tables in the following page.
 * 
 * https://github.com/php/php-src/tree/master/ext/standard/html_tables
 */
const apos = 'quot|amp|apos|lt|gt'
const ents_401 = /^(#039|A(grave|acute|circ|tilde|uml|ring|Elig|lpha)|Beta|C(cedil|hi)|D(elta|agger)|E(grave|acute|circ|uml|TH|psilon|ta)|Gamma|I(grave|acute|circ|uml|ota)|Kappa|Lambda|Mu|N(tilde|u)|O(Elig|acute|circ|grave|m(icron|ega)|slash|tilde|uml)|P(hi|si|rime|i)|Rho|S(igma|caron)|T(HORN|heta|au)|U(grave|acute|circ|uml|psilon)|Xi|Y(acute|uml)|Zeta|a(acute|c(ute|irc)|elig|grave|l(pha|efsym)|mp|n[gd]|ring|symp|tilde|uml)|b(rvbar|eta|ull|dquo)|c(ap|cedil|e(nt|dil)|hi|irc|lubs|o(py|ng)|rarr|u(rren|p))|d(Arr|a(rr|gger)|e(lta|g)|i(vide|ams))|e(acute|circ|grave|m(pty|sp)|nsp|psilon|quiv|t[ha]|u(ml|ro)|xist)|f(nof|orall|ra(c(1[42]|34)|sl))|g(amma|[et])|h(Arr|arr|e(llip|arts))|i(acute|circ|excl|grave|mage|n(fin|t)|ota|quest|sin|uml)|kappa|l(Arr|a(quo|mbda|rr|ng)|ceil|dquo|floor|o(wast|z)|rm|s(quo|aquo)|[et])|m(acr|dash|i(cro|ddot|nus)|u)|n(abla|bsp|dash|otin?|sub|tilde|[eiu])|o(acute|circ|elig|grave|line|m(icron|ega)|plus|rd[fm]?|slash|ti(lde|mes)|uml)|p(ar[at]|er(mil|p)|hi|iv?|lusmn|ound|r(ime|o[dp])|si)|quot|r(Arr|a(quo|rr|dic|ng)|ceil|dquo|e(al|g)|floor|ho|lm|s(quo|aquo))|s(bquo|caron|dot|ect|hy|i(gmaf?|m)|pades|u(be?|p[231e]?|m)|zlig)|t(au|h(e(re4|tasym?)|insp|orn)|i(mes|lde)|rade)|u(Arr|a(cute|rr)|circ|grave|ml|psi(lon|h)|uml)|weierp|xi|y(en|acute|uml)|z(eta|w(nj|j)))$/
const ents_xhtml = /^(A(grave|acute|circ|tilde|uml|ring|Elig|lpha)|Beta|C(cedil|hi)|D(agger|elta)|E(grave|acute|circ|uml|TH|psilon|ta)|Gamma|I(grave|acute|circ|uml|ota)|Kappa|Lambda|Mu|N(tilde|u)|O(Elig|acute|circ|grave|m(icron|ega)|slash|tilde|uml)|P(hi|si|rime|i)|Rho|S(caron|igma)|T(HORN|heta|au)|U(grave|acute|circ|uml|psilon)|Xi|Y(acute|uml)|Zeta|a(acute|c(ute|irc)|elig|grave|l(pha|efsym)|mp|n[gd]|pos|ring|symp|tilde|uml)|b(rvbar|dquo|eta|ull)|c(ap|cedil|e(nt|dil)|hi|irc|lubs|o(py|ng)|rarr|u(rren|p))|d(Arr|a(gger|rr)|e(lta|g)|i(vide|ams))|e(acute|circ|grave|m(sp|pty)|nsp|psilon|quiv|t[ha]|u(ml|ro)|xist)|f(nof|orall|ra(c(1[42]|34)|sl))|g(amma|[te])|h(Arr|arr|e(llip|arts))|i(acute|circ|excl|grave|mage|n(fin|t)|ota|quest|sin|uml)|kappa|l(Arr|a(quo|mbda|rr|ng)|ceil|dquo|floor|o(wast|z)|rm|s(quo|aquo)|[et])|m(acr|dash|i(cro|ddot|nus)|u)|n(abla|bsp|dash|otin?|sub|tilde|[eiu])|o(acute|circ|elig|grave|line|m(icron|ega)|plus|rd[fm]?|slash|ti(lde|mes)|uml)|p(ar[at]|er(mil|p)|hi|iv?|lusmn|ound|r(ime|o[dp])|si)|quot|r(Arr|a(quo|rr|dic|ng)|ceil|dquo|e(al|g)|floor|ho|lm|s(quo|aquo))|s(bquo|caron|dot|ect|hy|i(gmaf?|m)|pades|u(be?|p[231e]?|m)|zlig)|t(au|h(e(re4|tasym?)|insp|orn)|i(mes|lde)|rade)|u(Arr|a(cute|rr)|circ|grave|ml|psi(lon|h)|uml)|weierp|xi|y(en|acute|uml)|z(eta|w(nj|j)))$/
const ents_html5 = /^(A(Elig|MP|acute|breve|c(irc|y)|fr|grave|lpha|macr|nd|o(gon|pf)|pplyFunction|ring|s(cr|sign)|tilde|uml)|B(a(ckslash|r(wed|v))|cy|e(cause|rnoullis|ta)|fr|opf|reve|scr|umpeq)|C(Hcy|OPY|a(cute|pitalDifferentialD?|yleys)|c(aron|edil|irc|onint)|dot|e(dilla|nterDot)|fr|hi|ircle(Dot|Minus|Plus|Times)|lo(ckwiseContourIntegral|seCurly(DoubleQuote|Quote))|o(lone?|n(gruent|int|tourIntegral)|p(roduct|f)|unterClockwiseContourIntegral)|ross|scr|upCap?)|D(Dotrahd?|Jcy|Scy|Zcy|a(gger|rr|shv)|c(aron|y)|elta?|fr|i(a(critical(Acute|Do(ubleAcute|t)|Grave|Tilde)|mond)|fferentialD)|o(pf|t(Dot|Equal)?|uble(ContourIntegral|Do(wnArrow|t)|L(eft(Arrow|RightArrow|Tee)|ong(Left(Arrow|RightArrow)|RightArrow))|Right(Arrow|Tee)|Up(Arrow|DownArrow)|VerticalBar)|wn(Arrow(Bar|UpArrow)?|Breve|Left(RightVector|TeeVector|VectorBar?)|Right(TeeVector|VectorBar?)|TeeArrow?|arrow))|s(cr|trok))|E(NG|TH|acute|c(aron|irc|y)|dot|fr|grave|lement|m(acr|pty(SmallSquare|VerySmallSquare))|o(gon|pf)|psilon|qu(alTilde?|ilibrium)|s(cr|im)|ta|uml|x(ists|ponentialE))|F(cy|fr|illed(SmallSquare|VerySmallSquare)|o(pf|rAll|uriertrf)|scr)|G(Jcy|ammad?|breve|c(edil|irc|y)|dot|fr|opf|reater(EqualLess?|FullEqual|Greater|Less|SlantEqual|Tilde)|scr|[Tgt])|H(ARDcy|a(cek|t)|circ|fr|ilbertSpace|o(pf|rizontalLine)|s(cr|trok)|ump(DownHump|Equal))|I(Ecy|Jlig|Ocy|acute|c(irc|y)|dot|fr|grave|m(a(cr|ginaryI)|plies)?|n(te(gral|rsection)?|visible(Comma|Times))|o(gon|pf|ta)|scr|tilde|u(kcy|ml))|J(c(irc|y)|fr|opf|s(cr|ercy)|ukcy)|K(Hcy|Jcy|appa|c(edil|y)|fr|opf|scr)|L(Jcy|a(cute|mbda|ng|placetrf|rr)|c(aron|edil|y)|e(ft(A(ngleBracket|rrow(Bar|RightArrow)?)|Ceiling|Do(ubleBracket|wn(TeeVector|VectorBar?))|Floor|Right(Arrow|Vector)|T(ee(Arrow|Vector)?|riangle(Bar|Equal)?)|Up(DownVector|TeeVector|VectorBar?)|VectorBar?|arrow|rightarrow)|ss(EqualGreater|FullEqual|Greater|Less|SlantEqual|Tilde))|fr|leftarrow?|midot|o(ng(Left(Arrow|RightArrow)|RightArrow|left(arrow|rightarrow)|rightarrow)|pf|wer(LeftArrow|RightArrow))|s(cr|trok|h)|[Tt])|M(ap|cy|e(diumSpace|llintrf)|fr|inusPlus|opf|scr|u)|N(Jcy|acute|c(aron|edil|y)|e(gative(MediumSpace|Thi(ckSpace|nSpace)|VeryThinSpace)|sted(GreaterGreater|LessLess)|wLine)|fr|o(Break|nBreakingSpace|pf|t(C(ongruent|upCap)|DoubleVerticalBar|E(lement|qualTilde?|xists)|Greater(Equal|FullEqual|Greater|Less|SlantEqual|Tilde)?|Hump(DownHump|Equal)|Le(ftTriangle(Bar|Equal)?|ss(Equal|Greater|Less|SlantEqual|Tilde)?)|Nested(GreaterGreater|LessLess)|Precedes(Equal|SlantEqual)?|R(everseElement|ightTriangle(Bar|Equal)?)|S(quareSu(bsetEqual?|persetEqual?)|u(bsetEqual?|cceeds(Equal|SlantEqual|Tilde)?|persetEqual?))|Tilde(Equal|FullEqual|Tilde)?|VerticalBar)?)|scr|tilde|u)|O(Elig|acute|c(irc|y)|dblac|fr|grave|m(acr|ega|icron)|opf|penCurly(DoubleQuote|Quote)|s(cr|lash)|ti(lde|mes)|uml|ver(B(ar|rac(ket|e))|Parenthesis)|r)|P(artialD|cy|fr|hi|lusMinus|o(incareplane|pf)|r(ecedes(Equal|SlantEqual|Tilde)?|ime|o(duct|portional?))?|s(cr|i)|i)|Q(UOT|fr|opf|scr)|R(Barr|EG|a(cute|ng|rrtl?)|c(aron|edil|y)|everse(E(lement|quilibrium)|UpEquilibrium)?|fr|ho|ight(A(ngleBracket|rrow(Bar|LeftArrow)?)|Ceiling|Do(ubleBracket|wn(TeeVector|VectorBar?))|Floor|T(ee(Arrow|Vector)?|riangle(Bar|Equal)?)|Up(DownVector|TeeVector|VectorBar?)|VectorBar?|arrow)|o(pf|undImplies)|rightarrow|s(cr|h)|uleDelayed)|S(H(CHcy|cy)|OFTcy|acute|c(aron|edil|irc|y)?|fr|hort(DownArrow|LeftArrow|RightArrow|UpArrow)|igma|mallCircle|opf|q(rt|uare(Intersection|Su(bsetEqual?|persetEqual?)|Union)?)|scr|tar|u(bsetEqual??|c(ceeds(Equal|SlantEqual|Tilde)?|hThat)|p(ersetEqual?|set)?|m))|T(HORN|RADE|S(Hcy|cy)|a[bu]|c(aron|edil|y)|fr|h(e(refore|ta)|i(ckSpace|nSpace))|ilde(Equal|FullEqual|Tilde)?|opf|ripleDot|s(cr|trok))|U(a(cute|rrocir?)|br(cy|eve)|c(irc|y)|dblac|fr|grave|macr|n(der(B(ar|rac(ket|e))|Parenthesis)|ionPlus?)|o(gon|pf)|p(Arrow(Bar|DownArrow)?|DownArrow|Equilibrium|TeeArrow?|arrow|downarrow|per(LeftArrow|RightArrow)|silon?)|ring|scr|tilde|uml)|V(Dash|bar|cy|dashl?|e(r(bar|tical(Bar|Line|Separator|Tilde)?|yThinSpace)|e)|fr|opf|scr|vdash)|W(circ|edge|fr|opf|scr)|X(fr|opf|scr|i)|Y(Acy|Icy|Ucy|acute|c(irc|y)|fr|opf|scr|uml)|Z(Hcy|acute|c(aron|y)|dot|e(roWidthSpace|ta)|fr|opf|scr)|a(acute|breve|c(irc|ute|[Edy])?|elig|fr?|grave|l(e(fsym|ph)|pha)|m(a(cr|lg)|p)|n(d(and|slope|[dv])?|g(le|msda[abcdefgh]?|rtvbd??|s(ph|t)|zarr|e)?)|o(gon|pf)|p(acir|id|os|proxeq?|[Ee])?|ring|s(cr|ympeq?|t)|tilde|uml|w(conint|int))|b(Not|a(ck(cong|epsilon|prime|simeq?)|r(vee|wedge?))|brktbrk?|c(ong|y)|dquo|e(cause?|mptyv|psi|rnou|t(ween|[ah]))|fr|ig(c(ap|irc|up)|o(dot|plus|times)|s(qcup|tar)|triangle(down|up)|uplus|vee|wedge)|karow|l(a(ck(lozenge|square|triangle(down|left|right)?)|nk)|k(1[24]|34)|ock)|n(equiv?|ot)|o(pf|ttom?|wtie|x(D[LRlr]|H[DUdu]?|U[LRlr]|V[HLRhlr]?|box|d[LRlr]|h[DUdu]?|minus|plus|times|u[LRlr]|v[HLRhlr]?))|prime|r(eve|vbar)|s(cr|emi|ime?|ol(hsub|b)?)|u(llet?|mp(eq?|E)?))|c(a(cute|p(and|brcup|c(ap|up)|dot|s)?|r(et|on))|c(a(ps|ron)|edil|irc|upssm?)|dot|e(dil|mptyv|nterdot?)|fr|h(cy|eckmark?|i)|ir(c(eq|le(arrow(left|right)|d(ast|circ|dash|[RS])))?|fnint|mid|scir|[Ee])?|lubsuit?|o(loneq??|m(mat?|p(fn|le(ment|xes))?)|n(gdot?|int)|p(rod|ysr?|f))|r(arr|oss)|s(cr|u(be?|pe?))|tdot|u(darr[lr]|e(pr|sc)|larrp?|p(brcap|c(ap|up)|dot|or|s)?|r(arrm?|ly(eq(prec|succ)|vee|wedge)|ren|vearrow(left|right))|vee|wed)|w(conint|int)|ylcty)|d(Arr|Har|a(gger|leth|rr|shv?)|b(karow|lac)|c(aron|y)|d(a(gger|rr)|otseq)?|e(lta|mptyv|g)|f(isht|r)|har[lr]|i(am(ondsuit?|s)?|gamma|sin|v(ideontimes?|onx)?|e)|jcy|lc(orn|rop)|o(llar|pf|t(eqdot?|minus|plus|square)?|ublebarwedge|wn(arrow|downarrows|harpoon(left|right)))|r(bkarow|c(orn|rop))|s(c[ry]|ol|trok)|t(dot|rif?)|u(arr|har)|wangle|z(cy|igrarr))|e(D(Dot|ot)|a(cute|ster)|c(aron|irc?|olon|y)|dot|f(Dot|r)|g(rave|sdot?)?|l(inters|sdot?|l)?|m(acr|pty(set|v)?|sp1[34]?)|n(sp|g)|o(gon|pf)|p(arsl?|lus|si(lon|v)?)|q(c(irc|olon)|s(im|lant(gtr|less))|u(als|est|ivDD?)|vparsl)|r(Dot|arr)|s(cr|dot|im)|t[ah]|u(ml|ro)|x(cl|ist|p(ectation|onentiale))|e)|f(allingdotseq|cy|emale|f(ilig|l(ig|lig)|r)|ilig|jlig|l(at|lig|tns)|nof|o(pf|r(all|kv?))|partint|r(a(c(1[234568]|2[35]|3[458]|45|5[68]|78)|sl)|own)|scr)|g(El?|a(cute|mmad?|p)|breve|c(irc|y)|dot|e(q(slant|q)?|s(cc|dotol??|les?)?|l)?|fr|gg?|imel|jcy|l[Eaj]?|n(approx?|eqq??|sim|E)|opf|rave|s(cr|im[el]?)|t(c(ir|c)|dot|lPar|quest|r(a(pprox|rr)|dot|eq(less|qless)|less|sim))?|v(ertneqq|nE))|h(Arr|a(irsp|lf|milt|r(dcy|r(cir|w)?))|bar|circ|e(artsuit?|llip|rcon)|fr|ks(earow|warow)|o(arr|mtht|ok(leftarrow|rightarrow)|pf|rbar)|s(cr|lash|trok)|y(bull|phen))|i(acute|c(irc|y)?|e(cy|xcl)|f[fr]|grave|i(i(int|nt)|nfin|ota)?|jlig|m(a(cr|g(line|part|e)|th)|of|ped)|n(care|fintie?|odot|t(cal|e(gers|rcal)|larhk|prod)?)?|o(cy|gon|pf|ta)|prod|quest|s(cr|in(dot|sv?|[Ev])?)|tilde?|u(kcy|ml))|j(c(irc|y)|fr|math|opf|s(cr|ercy)|ukcy)|k(appav?|c(edil|y)|fr|green|hcy|jcy|opf|scr)|l(A(arr|rr|tail)|Barr|Eg?|Har|a(cute|emptyv|gran|mbda|ng(le|d)?|quo|rr(bfs?|fs|hk|lp|pl|sim|tl)?|t(ail|es?)?|p)|b(arr|brk|r(ac[ek]|k(sl[du]|e)))|c(aron|e(dil|il)|ub|y)|d(ca|quor?|r(dhar|ushar)|sh)|e(ft(arrowtail?|harpoon(down|up)|leftarrows|right(arrows?|harpoons|squigarrow)|threetimes)|q(slant|q)?|s(cc|dotor??|ges?|s(approx|dot|eq(gtr|qgtr)|gtr|sim))?|g)?|f(isht|loor|r)|gE?|h(ar(ul?|d)|blk)|jcy|l(arr|corner|hard|tri)?|m(idot|oustache?)|n(approx?|eqq??|sim|E)|o(a(ng|rr)|brk|ng(left(arrow|rightarrow)|mapsto|rightarrow)|oparrow(left|right)|p(ar|lus|f)|times|w(ast|bar)|z(enge|f)?)|parlt?|r(arr|corner|hard?|tri|m)|s(aquo|cr|im[eg]?|q(uor?|b)|trok|h)|t(c(ir|c)|dot|hree|imes|larr|quest|r(Par|i[ef]?))?|ur(dshar|uhar)|v(ertneqq|nE))|m(DDot|a(cr|l(tese?|e)|psto(down|left|up)??|rker)|c(omma|y)|dash|easuredangle|fr|ho|i(cro|d(ast|cir|dot)?|nus(du?|b)?)|l(cp|dr)|nplus|o(dels|pf)|s(cr|tpos)|u(ltimap|map)?|p)|n(G(tv?|g)|L(eft(arrow|rightarrow)|tv?|l)|Rightarrow|V(Dash|dash)|a(bla|cute|ng|p(id|os|prox|E)?|turals??)|b(sp|umpe?)|c(a(ron|p)|edil|ongdot?|up|y)|dash|e(Arr|ar(hk|row?)|dot|quiv|s(ear|im)|xists?)?|fr|g(e(q(slant|q)?|s)?|sim|tr?|E)|h(Arr|arr|par)|i(sd?|v)?|jcy|l(Arr|arr|dr|e(ft(arrow|rightarrow)|q(slant|q)?|ss?)?|sim|trie??|E)|mid|o(pf|t(in(dot|v[abc]|E)?|niv[abc]?)?)|p(ar(allel|sl|t)?|olint|r(cue|eceq??)?)|r(Arr|arr[cw]?|ightarrow|trie?)|s(c(cue|[er])?|hort(mid|parallel)|imeq??|mid|par|qsu(be|pe)|u(b(seteqq??|[Ee])?|cceq?|p(seteqq??|[Ee])?))|t(gl|ilde|lg|riangle(lefteq?|righteq?))|um(ero|sp)??|v(Dash|Harr|ap|dash|g[et]|infin|l(Arr|trie?|e)|r(Arr|trie)|sim)|w(Arr|ar(hk|row?)|near))|o(a(cute|st)|c(irc?|y)|d(ash|blac|iv|ot|sold)|elig|f(cir|r)|g(on|rave|t)|h(bar|m)|int|l(arr|c(ir|ross)|ine|t)|m(acr|ega|i(cron|nus|d))|opf|p(ar|erp|lus)|r(arr|d(erof?|[fm])?|igof|or|slope|v)?|s(cr|lash|ol)|ti(lde|mesas?)|uml|vbar|S)|p(ar(allel?|s(im|l)|t)?|cy|er(cnt|iod|mil|tenk|p)|fr|h(iv?|mmat|one)|i(tchfork|v)?|l(an(ckh?|kv)|us(acir|cir|d[ou]|mn|sim|two|[be])?)|o(intint|pf|und)|r(ap|cue|ec(approx|curlyeq|eq|n(approx|eqq|sim)|sim)??|imes?|n(ap|sim|E)|o(f(alar|line|surf)|pto?|d)|sim|urel|E)?|s(cr|i)|uncsp|m)|q(fr|int|opf|prime|scr|u(at(ernions|int)|esteq?|ot))|r(A(arr|rr|tail)|Barr|Har|a(c(ute|e)|dic|emptyv|ng(le|[de])?|quo|rr(ap|bfs?|fs|hk|lp|pl|sim|tl|[cw])?|t(ail|ionals?))|b(arr|brk|r(ac[ek]|k(sl[du]|e)))|c(aron|e(dil|il)|ub|y)|d(ca|ldhar|quor?|sh)|e(al(ine|part|s)?|ct|g)|f(isht|loor|r)|h(ar(ul?|d)|ov?)|i(ght(arrowtail?|harpoon(down|up)|left(arrows|harpoons)|rightarrows|squigarrow|threetimes)|ng|singdotseq)|l(arr|har|m)|moustache?|nmid|o(a(ng|rr)|brk|p(ar|lus|f)|times)|p(argt?|polint)|rarr|s(aquo|cr|q(uor?|b)|h)|t(hree|imes|ri(ltri|[ef])?)|uluhar|x)|s(acute|bquo|c(a(ron|p)|cue|edil?|irc|n(ap|sim|E)|polint|sim|[Ey])?|dot[be]?|e(Arr|ar(hk|row?)|ct|mi|swar|tm(inus|n)|xt)|frown?|h(arp|c(hcy|y)|ort(mid|parallel)|y)|i(gma[fv]?|m(dot|eq?|gE?|lE?|ne|plus|rarr)?)|larr|m(a(llsetminus|shp)|eparsl|i(le|d)|tes??)|o(ftcy|lbar??|pf)|pa(desuit?|r)|q(c(aps?|ups?)|su(b(seteq?|e)?|p(seteq?|e)?)|u(ar[ef]|f)?)|rarr|s(cr|etmn|mile|tarf)|t(arf?|r(aight(epsilon|phi)|ns))|u(b(dot|edot?|mult|n[Ee]|plus|rarr|s(et(eqq?|neqq?)?|im|u[bp])|E)?|cc(approx|curlyeq|eq|n(approx|eqq|sim)|sim)?|ng|p(d(ot|sub)|edot?|hs(ol|ub)|larr|mult|n[Ee]|plus|s(et(eqq?|neqq?)?|im|u[bp])|[123E])?|m)|w(Arr|ar(hk|row?)|nwar)|zlig)|t(a(rget|u)|brk|c(aron|edil|y)|dot|elrec|fr|h(e(re(fore|4)|ta(sym|v)?)|i(ck(approx|sim)|nsp)|k(ap|sim)|orn)|i(lde|mes(bar?|d)?|nt)|o(ea|p(bot|cir|fork?)?|sa)|prime|r(ade|i(angle(down|lefteq?|righteq?|q)?|dot|minus|plus|sb|time|e)|pezium)|s(c[ry]|hcy|trok)|w(ixt|ohead(leftarrow|rightarrow)))|u(Arr|Har|a(cute|rr)|br(cy|eve)|c(irc|y)|d(arr|blac|har)|f(isht|r)|grave|h(ar[lr]|blk)|l(c(orner?|rop)|tri)|m(acr|l)|o(gon|pf)|p(arrow|downarrow|harpoon(left|right)|lus|si(lon|h)?|uparrows)|r(c(orner?|rop)|ing|tri)|scr|t(dot|ilde|rif?)|u(arr|ml)|wangle)|v(Arr|Barv?|Dash|a(ngrt|r(epsilon|kappa|nothing|p(hi|ropto|i)|rho?|s(igma|u(bsetneqq?|psetneqq?))|t(heta|riangle(left|right))))|cy|dash|e(e(bar|eq)?|llip|r(bar|t))|fr|ltri|nsu[bp]|opf|prop|rtri|s(cr|u(bn[Ee]|pn[Ee]))|zigzag)|w(circ|e(d(bar|geq?)|ierp)|fr|opf|reath?|scr|p)|x(c(ap|irc|up)|dtri|fr|h(Arr|arr)|l(Arr|arr)|map|nis|o(dot|p(lus|f)|time)|r(Arr|arr)|s(cr|qcup)|u(plus|tri)|vee|wedge|i)|y(ac(ute|y)|c(irc|y)|en|fr|icy|opf|scr|u(cy|ml))|z(acute|c(aron|y)|dot|e(etrf|ta)|fr|hcy|igrarr|opf|scr|w(nj|j)))$/


const htmlspecialchars = (s, flags=ENT_COMPAT|ENT_SUBSTITUTE|ENT_HTML401, encoding=null, double_encode=true)=>{
	/*
	Light version (The second and subsequent arguments are ignored)
	Actually this is enough in most cases
	
	return (""+s).replace(/[\&"'<>]/g,s_=>{
		return {
			'&': '&amp;',
			'"': '&quot;',
			"'": '&#039;',
			"<": '&lt;',
			'>': '&gt;',
		}[s_]
	})
	*/
	// invalid code points
	if ((""+(encoding||"")).match(/^utf\-?8$/i)) {
		if ((flags & ENT_IGNORE) == ENT_IGNORE) {
			s = s.replace(/[\x80-\xFF]/g, ()=>"")
		} else if ((flags & ENT_SUBSTITUTE) == ENT_SUBSTITUTE) {
			s = s.replace(/[\x80-\xFF]/g, ()=>"\xEF\xBF\xBD") // U+FFFD
		} else {
			if (s.match(/[\x80-\xFF]/)) {
				return ""
			}
		}
	}


	const encoded = {
		'&': '&amp;',
		'"': '&quot;',
		"'": '&#039;',
		"<": '&lt;',
		'>': '&gt;',
	};
	return (""+s).replace(/([\&"'<>])(#?[a-zA-Z0-9]+;)?/g,(m,c,ent_)=>{
		const ent = ent_ || ""
		
		if (c == "<" || c == '>') {
			return encoded[c] + ent
		}
		if (c == '"' || c == "'") {
			if ((flags & ENT_QUOTES) == ENT_QUOTES) {
				return encoded[c] + ent
			}
			if ((flags & ENT_COMPAT) == ENT_COMPAT) {
				return (c == "'" ? c : encoded[c]) + ent
			}
			return c + ent
		}
		// "&"
		if (double_encode == false && ent != "") {
			const ent_ = ent.substr(0,ent.length-1)

			switch(true) {
				// numeric entities
				case !!ent_.match(/^\#([0-9]+|x[0-9a-fA-F]+)$/): 
					return c + ent
				// entity table
				case (flags & ENT_HTML5) == ENT_HTML5:
					return (apos.indexOf(ent_) >= 0 || ents_html5.test(ent_) ? c : encoded[c]) + ent
				case (flags & ENT_XML1) == ENT_XML1:
				case (flags & ENT_XHTML) == ENT_XHTML:
					return (apos.indexOf(ent_) >= 0  || ents_xhtml.test(ent_)  ? c : encoded[c]) + ent
				default:
					return (ents_401.test(ent_) ? c : encoded[c]) + ent
			}
		}

		return encoded[c] + ent
	})
}

module.exports = {
	htmlspecialchars, 
	ENT_COMPAT, 
	ENT_QUOTES, 
	ENT_NOQUOTES, 
	ENT_IGNORE, 
	ENT_DISALLOWED, 
	ENT_SUBSTITUTE, 
	ENT_HTML401, 
	ENT_XML1, 
	ENT_XHTML, 
	ENT_HTML5
}