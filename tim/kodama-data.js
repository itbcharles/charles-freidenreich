// Kodama · shared sample data (fictional firms and postings), role taxonomy, regions, clubs.
export const TAX = [
['Investment Banking',['Generalist & Rotational Banking','Mergers & Acquisitions','Equity Capital Markets','Debt Capital Markets','Leveraged Finance','Restructuring','Financial Sponsors Coverage','Industry Coverage (TMT, Healthcare, FIG, Consumer, Industrials, Energy, Real Estate)','Structured Finance & Securitization','Project & Infrastructure Finance','Private Capital Advisory & Placement','Public Finance Banking (Municipal)']],
['Sales, Trading & Markets',['Equities Sales & Trading','FICC Sales & Trading','Rates & FX Trading','Credit Trading','Commodities Trading','Physical Commodity & Energy Trading','Derivatives Structuring','Quantitative & Systematic Trading','Market Making & Proprietary Trading','Electronic Trading & Execution','Prime Brokerage & Securities Financing','Institutional Sales & Client Coverage']],
['Research',['Equity Research','Credit & Fixed Income Research','Macro & Economic Research','Quantitative Research','Commodities Research','ESG & Sustainability Research','Credit Ratings','Index & Financial Data Research']],
['Private Equity & Private Markets',['Buyout Private Equity','Growth Equity','Venture Capital','Private Credit & Direct Lending','Distressed & Special Situations','Secondaries','Fund of Funds & Multi-Manager','Infrastructure Investing','Real Assets & Natural Resources','Impact Investing','Family Office Investing','Sovereign Wealth & Pension Investing','Search Funds & Entrepreneurship Through Acquisition','Portfolio Operations & Value Creation','Investor Relations & Fundraising']],
['Hedge Funds',['Long/Short Equity','Global Macro','Multi-Strategy','Event-Driven & Merger Arbitrage','Credit & Distressed','Quantitative & Systematic','Activist Investing','Business Development & Fund Operations']],
['Asset & Wealth Management',['Equity Portfolio Management & Research','Fixed Income Portfolio Management','Multi-Asset & Asset Allocation','ETF & Index Products','Manager Research & Due Diligence','Investment Consulting & OCIO','Endowment & Foundation Investing','Insurance Asset Management','Wealth Management & Private Banking','Financial Planning & Advisory','Trust & Estate Services','Multi-Family Office','Fund Product & Operations','Distribution & Client Relations']],
['Consulting & Advisory',['Management & Strategy Consulting','Economic Consulting & Litigation Support','Transaction Advisory & Due Diligence','Valuation Advisory','Restructuring & Turnaround Advisory','Operations & Supply Chain Consulting','Technology & Digital Consulting','Risk & Regulatory Consulting','Human Capital & Organization Consulting','Healthcare & Life Sciences Consulting','Public Sector & Government Consulting','Nonprofit & Social Impact Consulting','Forensic Accounting & Investigations','Pricing & Commercial Strategy','ESG & Sustainability Consulting','Real Estate Advisory','Actuarial & Benefits Consulting']],
['Commercial & Corporate Banking',['Commercial Banking & Middle-Market Lending','Corporate Banking','Credit Analysis & Underwriting','Treasury & Transaction Banking','Trade & Supply Chain Finance','Asset-Based Lending & Leasing','Syndicated Loans & Loan Capital Markets','Small Business Banking','Community & Regional Banking','Retail Banking Management','Consumer Lending, Cards & Mortgage','Specialty & Agricultural Lending','Bank Strategy & Product']],
['Corporate Finance & Strategy',['Financial Planning & Analysis','Corporate Development & In-House M&A','Corporate Strategy','Treasury','Investor Relations','Controllership & Accounting Operations','Internal Audit','Finance Leadership Development Programs','Strategic Finance','Pricing & Revenue Management','Finance Business Partnering','Business Unit & Divisional Finance','In-House Tax']],
['Accounting, Audit & Tax',['Audit & Assurance','Tax Advisory','Deals & Transaction Services','Forensic Accounting','Accounting Advisory & Technical Accounting','Risk Assurance & IT Audit','Fund Accounting & Administration','Government & Nonprofit Accounting']],
['Real Estate',['Real Estate Private Equity & Acquisitions','Real Estate Development','REIT Investing & Analysis','Commercial Real Estate Lending','CRE Brokerage & Capital Markets','Real Estate Asset Management','Property Management','Affordable Housing Finance','Appraisal & Valuation','Proptech & Real Estate Operations']],
['Risk, Compliance & Controls',['Market Risk','Credit Risk','Operational & Enterprise Risk','Model Risk & Validation','Liquidity & Treasury Risk','Compliance','Financial Crime, AML & KYC','Regulatory Affairs & Policy','Internal Controls & SOX','Third-Party & Vendor Risk','Climate & ESG Risk']],
['Quantitative Finance, Fintech & Data',['Quantitative Analyst & Strats','Quantitative Developer','Financial Engineering & Derivatives Pricing','Data Science & Analytics','Fintech Product Management','Payments','Digital Assets & Crypto','Lending Technology & Credit Modeling','Insurtech','Wealthtech & Robo-Advisory','Banking Technology & Financial Software','Financial Data & Index Providers','Exchanges & Market Infrastructure','Trading Technology']],
['Insurance & Actuarial',['Actuarial (Life, P&C, Health, Pensions)','Underwriting','Claims','Reinsurance','Insurance Brokerage','Insurance Investments & ALM','Insurance Product & Pricing','Catastrophe Modeling','Insurance Strategy & Operations']],
['Public Finance, Policy & Economics',['Municipal Advisory','Central Banking','Financial Regulation (SEC, FDIC, OCC, CFPB, FINRA)','Government Finance & Budget','Economic Research & Think Tanks','Development Finance (World Bank, IFC, IDB, DFC)','Housing Finance Agencies','International Trade & Economics','Public Policy Analysis','Nonprofit & CDFI Finance']],
['Operations & Middle Office',['Trade Support & Middle Office','Settlements & Clearing','Fund Administration','Custody & Securities Services','Client Onboarding & KYC Operations','Product Control & Valuation Control','Collateral & Margin','Business Management & COO Office','Transformation & Change Management','Data Management & Governance']],
['Specialty Finance',['Equipment & Vehicle Finance','Aviation & Shipping Finance','Fund Finance & NAV Lending','Litigation Finance','Royalty, Music & Film Finance','Sports Finance','Art & Collectibles Finance','Factoring & Receivables Finance']],
['General Management & Business Operations',['General Management Rotational Programs','Business Operations & Strategy','Chief of Staff & Business Management','Operations Management','Supply Chain & Logistics','Procurement & Sourcing','Project & Program Management','Product Management','Business Development & Partnerships','B2B Sales & Account Management','Revenue Operations & Customer Success','Marketing & Brand Management','Market Research & Consumer Insights','Human Resources & Talent','Communications & Public Relations','Corporate Social Responsibility','Retail & Franchise Management','Hospitality & Tourism Management','Healthcare Administration','Sports Business & Management','Media & Entertainment Business','Fashion & Luxury Business','Nonprofit Management']],
['Entrepreneurship & Startups',["Startup Generalist & Founder's Associate",'Venture Studio, Incubator & Accelerator','Social Enterprise','Small Business Operations','Entrepreneur-in-Residence Programs']]
];
export const CAT_OF = {}; TAX.forEach(([c, fs]) => fs.forEach(f => { CAT_OF[f] = c; }));
export const CATS = TAX.map(t => t[0]);

export const CLUBS = [{name:'USF Investment Club', since:'Sep 2025'}, {name:'USF Consulting Club', since:'Jan 2026'}];
export const PTYPES = ['Summer Analyst','Sophomore Summer','Insight','Co-op','Spring Intern','Externship','Other'];
export const REGION_ORDER = ['Bay Area','Southern California','Pacific Northwest','Mountain West','Texas','Midwest','Northeast','Mid-Atlantic','Southeast','Remote'];
export const REGIONS = {'San Francisco':'Bay Area','Oakland':'Bay Area','San Jose':'Bay Area','Menlo Park':'Bay Area','Los Angeles':'Southern California','San Diego':'Southern California','Seattle':'Pacific Northwest','Portland':'Pacific Northwest','Denver':'Mountain West','Salt Lake City':'Mountain West','Las Vegas':'Mountain West','Phoenix':'Mountain West','Houston':'Texas','Dallas':'Texas','Austin':'Texas','Chicago':'Midwest','Minneapolis':'Midwest','Columbus':'Midwest','Detroit':'Midwest','New York':'Northeast','Boston':'Northeast','Stamford':'Northeast','Philadelphia':'Northeast','Jersey City':'Northeast','Washington DC':'Mid-Atlantic','Baltimore':'Mid-Atlantic','Richmond':'Mid-Atlantic','Charlotte':'Southeast','Atlanta':'Southeast','Miami':'Southeast','Nashville':'Southeast','Tampa':'Southeast','Remote':'Remote'};

// Clock for the sample data: Mon Oct 26 2026, 10:30am.
const NOW = new Date(2026, 9, 26, 10, 30);
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const ago = h => new Date(NOW.getTime() - h * 3600e3);
const hm = d => { let h = d.getHours(); const m = d.getMinutes(), ap = h >= 12 ? 'pm' : 'am'; h = h % 12 || 12; return h + ':' + String(m).padStart(2, '0') + ap; };
const md = d => MON[d.getMonth()] + ' ' + d.getDate();
const sameDay = (a, b) => a.toDateString() === b.toDateString();
const postedLabel = d => sameDay(d, NOW) ? hm(d) + ' today' : (NOW - d) < 6 * 86400e3 ? DOW[d.getDay()] + ' ' + hm(d) : md(d);
const postedFull = d => sameDay(d, NOW) ? 'Today, ' + hm(d) : DOW[d.getDay()] + ' ' + md(d) + ', ' + hm(d);
const checkedLabel = h => h < 1 ? 'just now' : h < 24 ? Math.round(h) + 'h ago' : h < 48 ? 'yesterday' : Math.round(h / 24) + ' days ago';
const checkedFull = d => (sameDay(d, NOW) ? 'today ' : (NOW - d) < 2 * 86400e3 ? 'yesterday ' : md(d) + ' ') + hm(d);
const payShort = p => p.replace(/\$(\d{1,3}),(\d{3}) \/ yr, prorated/, (_, a) => '$' + a + 'k prorated').replace(' / hour', ' / hr').replace(' / month', ' / mo');

const F = (name, sector, hq, url, checkedH) => ({id: name.toLowerCase().replace(/[^a-z]/g, ''), name, sector, hq, url, checkedH, checked: checkedLabel(checkedH), stale: checkedH >= 24});
export const FIRMS = [
F('Halcyon Partners','Investment Banking','New York','halcyonpartners.com/careers',1.3),
F('Marlowe & Reed','Private Equity','San Francisco','marlowereed.com/careers',3),
F('Ashcombe Strategy','Consulting','San Francisco','ashcombe.com/careers/students',1.2),
F('Wexford & Co','Investment Banking','New York','wexfordco.com/early-careers',0.5),
F('Alder & Co','Consulting','Oakland','alderco.com/careers',2),
F('Arbor Capital','Hedge Fund','New York','arborcapital.com/careers',7),
F('Beacon Group','Corporate','Remote','beacongroup.com/careers',6),
F('Carrick Capital','Growth Equity','San Francisco','carrickcap.com/careers',2),
F('Crestline Partners','Private Equity','Chicago','crestlinepartners.com/careers',30),
F('Everpine Advisors','Consulting','Boston','everpine.com/careers',3),
F('Foxglove Ventures','Venture Capital','San Francisco','foxglove.vc/jobs',5),
F('Granite Insurance','Insurance','San Francisco','graniteins.com/careers',27),
F('Juniper Capital','Asset Management','San Francisco','junipercap.com/early-careers',3),
F('Lumen Advisory','Investment Banking','Los Angeles','lumenadvisory.com/careers',5),
F('Meridian Bank','Commercial Banking','Charlotte','meridianbank.com/students',2),
F('Northgate Securities','Sales & Trading','New York','northgatesec.com/campus',26),
F('Pacific Crest Bank','Wealth Management','San Francisco','pacificcrestbank.com/careers',1),
F('Sable Partners','Equity Research','New York','sablepartners.com/careers',3),
F('Tidewater Bank','Commercial Banking','San Francisco','tidewaterbank.com/careers',3),
F('Westbay Credit Union','Commercial Banking','San Francisco','westbaycu.org/careers',4),
F('Ironbridge Capital','Private Credit','New York','ironbridgecap.com/careers',2),
F('Kestrel Macro','Hedge Fund','Stamford','kestrelmacro.com/careers',9),
F('Larkspur Economics','Economic Consulting','Washington DC','larkspurecon.com/careers',4),
F('Orchard & Vale','Accounting','Chicago','orchardvale.com/students',1.5),
F('Pinecrest Realty Capital','Real Estate','Los Angeles','pinecrestrc.com/careers',8),
F('Quill Exchange','Fintech','San Francisco','quill.exchange/careers',2),
F('Redwood Mutual','Insurance','Minneapolis','redwoodmutual.com/careers',3),
F('Silvergate Advisors','Wealth Management','Denver','silvergateadv.com/careers',12),
F('Thornfield Group','Consulting','Chicago','thornfieldgroup.com/careers',2),
F('Umber & Finch','Investment Banking','Houston','umberfinch.com/careers',1),
F('Vantage Infrastructure Partners','Infrastructure','New York','vantageinfra.com/careers',6),
F('Whitlock Ratings','Credit Ratings','New York','whitlockratings.com/careers',2),
F('Yarrow Health Partners','Healthcare Consulting','Boston','yarrowhp.com/careers',3),
F('Zephyr Payments','Fintech','San Jose','zephyrpay.com/careers',2),
F('Golden Gate Development Finance','Public Finance','San Francisco','ggdf.org/careers',5),
F('Cobalt Trading','Proprietary Trading','Chicago','cobalttrading.com/careers',1),
F('Driftwood Family Office','Family Office','Menlo Park','driftwoodfo.com/careers',10),
F('Elmhurst Capital Markets','Sales & Trading','Dallas','elmhurstcm.com/careers',4),
F('Fairhaven Consulting','Consulting','Atlanta','fairhavenconsulting.com/careers',2),
F('Glassbridge Asset Management','Asset Management','Boston','glassbridgeam.com/careers',3),
F('Harbor Point Bank','Corporate Banking','Philadelphia','harborpointbank.com/careers',2),
F('Indigo Impact Fund','Impact Investing','Seattle','indigoimpact.org/careers',11),
F('Juno Sports Capital','Specialty Finance','Los Angeles','junosports.capital/careers',6),
F('Keystone Treasury Partners','Corporate','Remote','keystonetp.com/careers',3),
F('Lantern Secondaries','Private Equity','New York','lanternsec.com/careers',2),
F('Mosaic Risk Advisors','Risk & Compliance','Miami','mosaicrisk.com/careers',4),
F('Nimbus Data Research','Financial Data','New York','nimbusdata.com/careers',2),
F('Oakmont Hospitality Group','General Management','Las Vegas','oakmonthg.com/careers',7)
];
const firmByName = Object.fromEntries(FIRMS.map(f => [f.name, f]));

let seq = 0;
// P(firm, program, type, family, division, where, classOf, pay, dueDays|null, postedHoursAgo, checkedHoursAgo, dates, majors, auth, gpa, flags)
const P = (firm, program, ptype, family, division, where, classOf, pay, dueDays, postedH, checkedH, dates, majors, auth, gpa, flags = {}) => {
  const pd = ago(postedH), cd = ago(checkedH), dd = dueDays === null ? null : new Date(NOW.getTime() + dueDays * 86400e3), f = firmByName[firm];
  return {id: ++seq, firm, firmId: f ? f.id : null, program, ptype, family, cat: CAT_OF[family], division, where, classOf, pay, payShort: payShort(pay), rolling: dueDays === null, dueDays, due: dd ? md(dd) : 'Rolling', dueLong: dd ? md(dd) + ', ' + dd.getFullYear() + ' · ' + dueDays + ' days' : 'Rolling', postedH, posted: postedLabel(pd), postedFull: postedFull(pd), checkedH, stale: checkedH >= 24, checked: checkedLabel(checkedH), checkedFull: checkedFull(cd), domain: f ? f.url : '', dates, majors, auth, gpa, top: !!flags.top, pick: !!flags.pick, pickBy: flags.pick || ''};
};
const S1 = 'Jun 7 – Aug 13, 2027 · 10 weeks', S2 = 'Jun 14 – Aug 20, 2027 · 10 weeks', S3 = 'Jun 1 – Aug 6, 2027 · 10 weeks', SP = 'Jan 11 – Jun 25, 2027 · 6 months', FA = 'Aug 30 – Dec 17, 2027 · 16 weeks', PT = 'Jan 19 – May 14, 2027 · 16 weeks, part-time';
const USA = 'US work authorization required', NS = 'Not stated', ANY = 'Any', FE = 'Finance, Economics', FEA = 'Finance, Economics, Accounting', IC = 'USF Investment Club', CC = 'USF Consulting Club';
export const POSTINGS = [
P('Halcyon Partners','Investment Banking Summer Analyst 2027','Summer Analyst','Mergers & Acquisitions','M&A','New York','2028','$110,000 / yr, prorated',19,1.5,1.3,S1,ANY,USA,'3.5',{top:true,pick:IC}),
P('Marlowe & Reed','Private Equity Summer Analyst 2027','Summer Analyst','Buyout Private Equity','Buyout','San Francisco','2028','$95,000 / yr, prorated',36,3,3,S2,FEA,USA,'3.5',{top:true}),
P('Ashcombe Strategy','Summer Business Analyst 2027','Summer Analyst','Management & Strategy Consulting','Generalist','San Francisco','2028','$9,500 / month',35,23,1.2,S3,ANY,NS,NS,{top:true,pick:CC}),
P('Tidewater Bank','Commercial Banking Summer Analyst 2027','Summer Analyst','Commercial Banking & Middle-Market Lending','Middle Market','San Francisco','2028','$38 / hour',74,18,3,S1,FEA,USA,'3.0'),
P('Wexford & Co','Investment Banking Insight Week','Insight','Generalist & Rotational Banking','Generalist','New York','2029, 2030','Travel covered',12,49,0.5,'Jan 11 – Jan 15, 2027 · 1 week',ANY,NS,NS,{pick:IC}),
P('Northgate Securities','Sales & Trading Summer Analyst 2027','Summer Analyst','Equities Sales & Trading','Equities','New York','2028','$100,000 / yr, prorated',null,100,26,S1,ANY,USA,'3.3'),
P('Carrick Capital','Growth Equity Summer Analyst 2027','Summer Analyst','Growth Equity','Growth','San Francisco','2028','$45 / hour',45,118,2,'Jun 1 – Aug 13, 2027 · 11 weeks',FE,USA,NS),
P('Lumen Advisory','Restructuring Summer Analyst 2027','Summer Analyst','Restructuring','Restructuring','Los Angeles','2028','$110,000 / yr, prorated',25,140,5,S1,ANY,USA,'3.5'),
P('Beacon Group','Corporate Strategy Summer Intern 2027','Summer Analyst','Corporate Strategy','Corporate Strategy','Remote','2028','$42 / hour',50,165,6,S2,ANY,NS,NS),
P('Alder & Co','Management Consulting Co-op · Spring 2027','Co-op','Management & Strategy Consulting','Generalist','Oakland','2027, 2028','$36 / hour',40,170,2,SP,ANY,USA,NS),
P('Pacific Crest Bank','Wealth Management Summer Analyst 2027','Summer Analyst','Wealth Management & Private Banking','Private Wealth','San Francisco','2028','$32 / hour',81,190,1,S1,'Finance, Economics, Business',NS,NS),
P('Sable Partners','Equity Research Summer Analyst 2027','Summer Analyst','Equity Research','Equity Research','New York','2028','$95,000 / yr, prorated',null,215,3,S3,FEA,USA,'3.4'),
P('Juniper Capital','Early Insight Program','Insight','Equity Portfolio Management & Research','Asset Management','San Francisco','2029, 2030','Travel covered',14,260,3,'Jan 6 – Jan 8, 2027 · 3 days',ANY,NS,NS),
P('Meridian Bank','Corporate Banking Summer Analyst 2027','Summer Analyst','Corporate Banking','Corporate Banking','Charlotte','2028','$40 / hour',55,290,2,S1,FEA,USA,'3.0'),
P('Ironbridge Capital','Private Credit Summer Analyst 2027','Summer Analyst','Private Credit & Direct Lending','Direct Lending','New York','2028','$100,000 / yr, prorated',28,4,2,S1,FE,USA,'3.4',{pick:IC}),
P('Kestrel Macro','Global Macro Summer Analyst 2027','Summer Analyst','Global Macro','Macro','Stamford','2028','$120,000 / yr, prorated',21,6,9,S2,'Economics, Mathematics',USA,'3.6'),
P('Larkspur Economics','Economic Consulting Summer Analyst 2027','Summer Analyst','Economic Consulting & Litigation Support','Antitrust','Washington DC','2028','$34 / hour',60,8,4,S3,'Economics, Mathematics',NS,'3.3',{pick:CC}),
P('Orchard & Vale','Audit Summer Intern 2027','Summer Analyst','Audit & Assurance','Audit','Chicago','2028','$31 / hour',65,10,1.5,'Jun 7 – Aug 6, 2027 · 9 weeks','Accounting',USA,'3.0'),
P('Orchard & Vale','Deals Advisory Winter Externship','Externship','Deals & Transaction Services','Deals','San Francisco','2029','Unpaid',9,12,1.5,'Jan 4 – Jan 8, 2027 · 1 week','Accounting, Finance',NS,NS),
P('Pinecrest Realty Capital','Real Estate Acquisitions Summer Analyst 2027','Summer Analyst','Real Estate Private Equity & Acquisitions','Acquisitions','Los Angeles','2028','$30 / hour',48,14,8,S1,'Finance, Real Estate',USA,NS),
P('Quill Exchange','Fintech Product Summer Intern 2027','Summer Analyst','Fintech Product Management','Product','San Francisco','2028, 2029','$52 / hour',33,16,2,'Jun 14 – Aug 27, 2027 · 11 weeks',ANY,NS,NS),
P('Redwood Mutual','Actuarial Summer Intern 2027','Summer Analyst','Actuarial (Life, P&C, Health, Pensions)','Actuarial','Minneapolis','2028, 2029','$29 / hour',70,20,3,'Jun 1 – Aug 13, 2027 · 11 weeks','Mathematics, Economics',USA,'3.2'),
P('Silvergate Advisors','Financial Planning Summer Intern 2027','Summer Analyst','Financial Planning & Advisory','Planning','Denver','2028','$24 / hour',null,22,12,S1,'Finance, Business Administration',NS,NS),
P('Thornfield Group','Sophomore Consulting Summer 2027','Sophomore Summer','Management & Strategy Consulting','Generalist','Chicago','2029','$8,800 / month',31,26,2,'Jun 14 – Aug 6, 2027 · 8 weeks',ANY,NS,NS,{pick:CC}),
P('Umber & Finch','Energy Investment Banking Summer Analyst 2027','Summer Analyst','Industry Coverage (TMT, Healthcare, FIG, Consumer, Industrials, Energy, Real Estate)','Energy','Houston','2028','$110,000 / yr, prorated',23,28,1,S1,FE,USA,'3.5'),
P('Vantage Infrastructure Partners','Infrastructure Investing Summer Analyst 2027','Summer Analyst','Infrastructure Investing','Infrastructure','New York','2028','$90,000 / yr, prorated',38,30,6,S1,'Finance, Economics, Engineering',USA,'3.4'),
P('Whitlock Ratings','Credit Ratings Summer Analyst 2027','Summer Analyst','Credit Ratings','Corporates','New York','2028','$35 / hour',52,32,2,S1,FEA,USA,'3.2'),
P('Yarrow Health Partners','Healthcare Consulting Summer Associate 2027','Summer Analyst','Healthcare & Life Sciences Consulting','Healthcare','Boston','2028','$8,000 / month',42,34,3,S3,ANY,NS,'3.3'),
P('Zephyr Payments','Payments Strategy Intern · Spring 2027','Spring Intern','Payments','Strategy','San Jose','2027, 2028','$40 / hour',16,36,2,PT,ANY,USA,NS),
P('Golden Gate Development Finance','Public Finance Summer Fellow 2027','Summer Analyst','Development Finance (World Bank, IFC, IDB, DFC)','Lending','San Francisco','2028','$26 / hour',58,38,5,S1,'Economics, Public Policy, Finance',NS,NS),
P('Cobalt Trading','Quantitative Trading Summer Intern 2027','Summer Analyst','Quantitative & Systematic Trading','Quant Trading','Chicago','2028, 2029','$150,000 / yr, prorated',11,40,1,S1,'Mathematics, Computer Science, Data Science',USA,'3.7'),
P('Cobalt Trading','Trading Discovery Day','Insight','Market Making & Proprietary Trading','Trading','Chicago','2029, 2030','Travel covered',6,42,1,'Dec 4, 2026 · 1 day',ANY,NS,NS),
P('Driftwood Family Office','Investment Analyst Intern · Summer 2027','Summer Analyst','Family Office Investing','Investments','Menlo Park','2028','$38 / hour',44,44,10,S2,FE,NS,'3.5'),
P('Elmhurst Capital Markets','Fixed Income Sales & Trading Summer Analyst 2027','Summer Analyst','FICC Sales & Trading','FICC','Dallas','2028','$85,000 / yr, prorated',27,46,4,S1,FE,USA,'3.3'),
P('Fairhaven Consulting','Operations Consulting Summer Analyst 2027','Summer Analyst','Operations & Supply Chain Consulting','Operations','Atlanta','2028','$7,500 / month',39,48,2,S3,ANY,NS,NS),
P('Glassbridge Asset Management','Fixed Income Summer Analyst 2027','Summer Analyst','Fixed Income Portfolio Management','Fixed Income','Boston','2028','$40 / hour',30,50,3,S1,'Finance, Economics, Mathematics',USA,'3.4'),
P('Glassbridge Asset Management','Women in Investing Insight Day','Insight','Equity Portfolio Management & Research','Equities','Boston','2029, 2030','Travel covered',8,52,3,'Jan 15, 2027 · 1 day',ANY,NS,NS),
P('Harbor Point Bank','Credit Analyst Summer Intern 2027','Summer Analyst','Credit Analysis & Underwriting','Credit','Philadelphia','2028','$28 / hour',63,54,2,S1,'Finance, Accounting',USA,'3.0'),
P('Indigo Impact Fund','Impact Investing Fellow · Summer 2027','Summer Analyst','Impact Investing','Investments','Seattle','2028','$6,000 stipend',47,56,11,'Jun 21 – Aug 13, 2027 · 8 weeks',ANY,NS,NS),
P('Juno Sports Capital','Sports Finance Summer Analyst 2027','Summer Analyst','Sports Finance','Deals','Los Angeles','2028','$25 / hour',34,58,6,S1,'Finance, Sports Management',NS,NS),
P('Keystone Treasury Partners','Treasury Analyst Co-op · Spring 2027','Co-op','Treasury','Treasury','Remote','2027, 2028','$33 / hour',18,60,3,SP,'Finance, Accounting',USA,'3.0'),
P('Lantern Secondaries','Secondaries Summer Analyst 2027','Summer Analyst','Secondaries','Secondaries','New York','2028','$95,000 / yr, prorated',29,62,2,S1,FE,USA,'3.5'),
P('Mosaic Risk Advisors','Financial Crime & AML Summer Intern 2027','Summer Analyst','Financial Crime, AML & KYC','Financial Crime','Miami','2028, 2029','$27 / hour',66,64,4,S1,ANY,NS,NS),
P('Nimbus Data Research','Index Research Summer Analyst 2027','Summer Analyst','Index & Financial Data Research','Index Research','New York','2028','$36 / hour',41,66,2,S1,'Economics, Mathematics, Data Science',NS,'3.3'),
P('Oakmont Hospitality Group','Hospitality Management Summer Intern 2027','Summer Analyst','Hospitality & Tourism Management','Operations','Las Vegas','2028, 2029','$22 / hour',75,68,7,'Jun 1 – Aug 20, 2027 · 12 weeks','Business Administration, Hospitality',NS,NS),
P('Halcyon Partners','Sophomore Investment Banking Program 2027','Sophomore Summer','Generalist & Rotational Banking','Generalist','New York','2029','$110,000 / yr, prorated',13,70,1.3,'Jun 7 – Jul 30, 2027 · 8 weeks',ANY,USA,'3.5',{pick:IC}),
P('Marlowe & Reed','Private Equity Insight Day','Insight','Buyout Private Equity','Buyout','San Francisco','2029, 2030','Travel covered',10,72,3,'Dec 11, 2026 · 1 day',ANY,NS,NS),
P('Ashcombe Strategy','Consulting Co-op · Fall 2027','Co-op','Management & Strategy Consulting','Generalist','San Francisco','2028','$9,500 / month',90,74,1.2,FA,ANY,NS,NS),
P('Everpine Advisors','Strategy Summer Associate 2027','Summer Analyst','Management & Strategy Consulting','Strategy','Boston','2028','$9,000 / month',37,76,3,S3,ANY,NS,'3.4',{pick:CC}),
P('Everpine Advisors','Public Sector Practice Summer Analyst 2027','Summer Analyst','Public Sector & Government Consulting','Public Sector','Washington DC','2028','$8,200 / month',37,77,3,S3,ANY,USA,NS),
P('Foxglove Ventures','Venture Capital Summer Associate 2027','Summer Analyst','Venture Capital','Investing','San Francisco','2028','$35 / hour',53,78,5,S1,ANY,NS,NS),
P('Granite Insurance','Underwriting Summer Intern 2027','Summer Analyst','Underwriting','Commercial Lines','San Francisco','2028, 2029','$27 / hour',68,80,27,S1,'Business Administration, Finance, Economics',USA,'3.0'),
P('Crestline Partners','Private Equity Summer Analyst 2027','Summer Analyst','Buyout Private Equity','Buyout','Chicago','2028','$100,000 / yr, prorated',22,82,30,S1,FEA,USA,'3.6'),
P('Arbor Capital','Long/Short Equity Summer Analyst 2027','Summer Analyst','Long/Short Equity','Equities','New York','2028','$125,000 / yr, prorated',20,84,7,S1,'Finance, Economics, Mathematics',USA,'3.6'),
P('Westbay Credit Union','Small Business Lending Intern · Spring 2027','Spring Intern','Small Business Banking','Lending','San Francisco','2027, 2028','$25 / hour',26,86,4,PT,ANY,USA,NS),
P('Tidewater Bank','Treasury Management Summer Analyst 2027','Summer Analyst','Treasury & Transaction Banking','Treasury Management','San Francisco','2028','$36 / hour',74,88,3,S1,FEA,USA,'3.0'),
P('Meridian Bank','Sophomore Leadership Summit','Insight','Finance Leadership Development Programs','Leadership','Charlotte','2029','Travel covered',15,90,2,'Feb 18 – Feb 19, 2027 · 2 days',ANY,NS,'3.0'),
P('Beacon Group','FP&A Co-op · Fall 2027','Co-op','Financial Planning & Analysis','FP&A','Remote','2028','$38 / hour',95,92,6,FA,'Finance, Accounting',USA,'3.0'),
P('Pacific Crest Bank','Private Banking Insight Evening','Insight','Wealth Management & Private Banking','Private Wealth','San Francisco','2028, 2029, 2030','Unpaid',7,94,1,'Nov 19, 2026 · 1 evening',ANY,NS,NS),
P('Lumen Advisory','M&A Summer Analyst 2027','Summer Analyst','Mergers & Acquisitions','M&A','Los Angeles','2028','$110,000 / yr, prorated',25,96,5,S1,ANY,USA,'3.5'),
P('Sable Partners','Credit Research Summer Analyst 2027','Summer Analyst','Credit & Fixed Income Research','Credit Research','New York','2028','$95,000 / yr, prorated',null,98,3,S3,FEA,USA,'3.4'),
P('Juniper Capital','Manager Research Summer Analyst 2027','Summer Analyst','Manager Research & Due Diligence','Manager Research','San Francisco','2028','$34 / hour',43,100,3,S1,FE,NS,'3.3'),
P('Wexford & Co','Debt Capital Markets Summer Analyst 2027','Summer Analyst','Debt Capital Markets','DCM','New York','2028','$110,000 / yr, prorated',12,102,0.5,S1,ANY,USA,'3.5'),
P('Northgate Securities','Equity Research Summer Analyst 2027','Summer Analyst','Equity Research','Equity Research','San Francisco','2028','$100,000 / yr, prorated',null,104,26,S1,FEA,USA,'3.3'),
P('Carrick Capital','Portfolio Operations Summer Intern 2027','Summer Analyst','Portfolio Operations & Value Creation','Portfolio Operations','San Francisco','2028, 2029','$40 / hour',45,106,2,'Jun 1 – Aug 13, 2027 · 11 weeks',ANY,NS,NS),
P('Alder & Co','Pricing Strategy Summer Analyst 2027','Summer Analyst','Pricing & Commercial Strategy','Pricing','Oakland','2028','$8,500 / month',40,108,2,S3,'Economics, Mathematics, Business Administration',NS,'3.3'),
P('Umber & Finch','Project Finance Summer Analyst 2027','Summer Analyst','Project & Infrastructure Finance','Project Finance','Houston','2028','$100,000 / yr, prorated',23,110,1,S1,FE,USA,'3.4'),
P('Whitlock Ratings','Structured Finance Summer Analyst 2027','Summer Analyst','Structured Finance & Securitization','Structured Finance','New York','2028','$35 / hour',52,112,2,S1,FEA,USA,'3.2'),
P('Thornfield Group','Business Analyst Summer 2027','Summer Analyst','Management & Strategy Consulting','Generalist','San Francisco','2028','$9,200 / month',31,114,2,S2,ANY,NS,NS,{pick:CC}),
P('Larkspur Economics','Research Assistant Co-op · Spring 2027','Co-op','Economic Research & Think Tanks','Research','Washington DC','2027','$30 / hour',24,116,4,SP,'Economics, Mathematics',USA,'3.5'),
P('Zephyr Payments','Corporate Development Summer Intern 2027','Summer Analyst','Corporate Development & In-House M&A','Corporate Development','San Jose','2028','$48 / hour',46,118,2,S2,FE,USA,'3.3'),
P('Redwood Mutual','Insurance Investments Summer Analyst 2027','Summer Analyst','Insurance Investments & ALM','Investments','Minneapolis','2028','$33 / hour',70,120,3,S1,'Finance, Economics, Mathematics',USA,'3.2'),
P('Kestrel Macro','Trading Floor Insight Day','Insight','Global Macro','Macro','Stamford','2029, 2030','Travel covered',9,122,9,'Jan 22, 2027 · 1 day',ANY,NS,NS),
P('Ironbridge Capital','Fund Finance Summer Analyst 2027','Summer Analyst','Fund Finance & NAV Lending','Fund Finance','New York','2028','$95,000 / yr, prorated',28,124,2,S1,FEA,USA,'3.3'),
P('Harbor Point Bank','Commercial Banking Development Program · Summer 2027','Summer Analyst','Commercial Banking & Middle-Market Lending','Middle Market','Philadelphia','2028','$30 / hour',63,126,2,S1,FEA,USA,'3.0'),
P('Indigo Impact Fund','Community Finance Co-op · Spring 2027','Co-op','Nonprofit & CDFI Finance','Lending','Seattle','2027, 2028','$28 / hour',19,128,11,SP,ANY,NS,NS),
P('Vantage Infrastructure Partners','Infrastructure Insight Week','Insight','Infrastructure Investing','Infrastructure','New York','2029','Travel covered',17,130,6,'Jan 11 – Jan 13, 2027 · 3 days',ANY,NS,NS),
P('Nimbus Data Research','Data Science Summer Intern 2027','Summer Analyst','Data Science & Analytics','Data Science','Remote','2028, 2029','$45 / hour',41,132,2,S1,'Mathematics, Data Science, Computer Science',NS,'3.3'),
P('Quill Exchange','Market Infrastructure Summer Analyst 2027','Summer Analyst','Exchanges & Market Infrastructure','Market Structure','San Francisco','2028','$50 / hour',33,134,2,S2,FE,USA,NS),
P('Fairhaven Consulting','Human Capital Consulting Summer Analyst 2027','Summer Analyst','Human Capital & Organization Consulting','People Advisory','Atlanta','2028','$7,000 / month',39,136,2,S3,ANY,NS,NS)
];

export const COLS = [['division','Division',138],['where','Where',106],['classOf','Class of',80],['pay','Pay',120],['due','Due',106],['posted','Posted',92],['dates','Program dates',200],['majors','Majors',190],['auth','Work auth',200],['gpa','Min. GPA',78]];
export const REASONS = ['The posting is closed','The apply link doesn\'t work','Eligibility is wrong','A fact is wrong','Not an undergrad internship, insight program or co-op','Duplicate posting','Something else'];
export const TERM_OPTIONS = ['Summer 2027','Spring 2027','Fall 2027'];
export const LOC_OPTIONS = ['New York','SF Bay Area','Los Angeles','Chicago','Boston','Washington DC','Charlotte','Houston','Dallas','Atlanta','Denver','Seattle','Remote'];
export const SIZE_OPTIONS = ['Boutique','Middle market','Large'];
export const MAJOR_OPTIONS = ['Finance','Economics','Accounting','Business Administration','Mathematics','Data Science','Computer Science','Political Science'];
export const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];
// Applications detected from the student's USF inbox (fictional). week = index into WEEKS.
export const APPLICATIONS = [
{firm:'Halcyon Partners',program:'Investment Banking Summer Analyst 2027',div:'Investment Banking',applied:'Oct 24',status:'Applied',source:'Email',week:7},
{firm:'Marlowe & Reed',program:'Private Equity Summer Analyst 2027',div:'Private Equity',applied:'Oct 23',status:'Applied',source:'Email',week:7},
{firm:'Ashcombe Strategy',program:'Summer Business Analyst 2027',div:'Consulting',applied:'Oct 21',status:'Applied',source:'Email',week:7},
{firm:'Wexford & Co',program:'Investment Banking Insight Week',div:'Investment Banking',applied:'Oct 20',status:'Interview',source:'Email',week:7,replyDays:5},
{firm:'Lumen Advisory',program:'Restructuring Summer Analyst 2027',div:'Investment Banking',applied:'Oct 16',status:'Applied',source:'Apply click',week:6},
{firm:'Sable Partners',program:'Equity Research Summer Analyst 2027',div:'Research',applied:'Oct 13',status:'Applied',source:'Email',week:6},
{firm:'Everpine Advisors',program:'Strategy Summer Associate 2027',div:'Consulting',applied:'Oct 9',status:'Interview',source:'Email',week:5,replyDays:10},
{firm:'Crestline Partners',program:'Private Equity Summer Analyst 2027',div:'Private Equity',applied:'Oct 7',status:'Closed',source:'Email',week:5},
{firm:'Arbor Capital',program:'Long/Short Equity Summer Analyst 2027',div:'Hedge Funds',applied:'Oct 1',status:'Declined',source:'Email',week:4,replyDays:13},
{firm:'Tidewater Bank',program:'Commercial Banking Summer Analyst 2027',div:'Commercial Banking',applied:'Sep 26',status:'Applied',source:'Added by you',week:3},
{firm:'Beacon Group',program:'Corporate Strategy Summer Intern 2027',div:'Corporate Finance',applied:'Sep 10',status:'Interview',source:'Email',week:1,replyDays:9}
];
export const WEEKS = ['Sep 1','Sep 8','Sep 15','Sep 22','Sep 29','Oct 6','Oct 13','Oct 20'];
export const FUNNEL_TOP = [['Matched',41],['Opened',27]];
