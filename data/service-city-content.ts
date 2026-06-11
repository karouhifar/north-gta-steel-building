// Landing-page content for /steel-buildings/[city]. Server-only by usage:
// imported from server components and metadata/schema code, never from
// "use client" files — keep it that way so this prose stays out of client JS.
// Light, client-safe city data (names, regions, map coords) lives in
// data/service-cities.ts.

import {
  getServiceCity,
  serviceCities,
  type ServiceCity,
} from "@/data/service-cities";

export type ServiceCityFaq = {
  question: string;
  answer: string;
};

export type ServiceCityContent = {
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  localUses: string[];
  permitNote: string;
  faqs: ServiceCityFaq[];
  nearbySlugs: string[];
};

export type FullServiceCity = ServiceCity & ServiceCityContent;

const cityContent: Record<string, ServiceCityContent> = {
  toronto: {
    metaTitle: "Steel Buildings Toronto | North GTA Steel",
    metaDescription:
      "Pre-engineered steel buildings in Toronto — commercial, industrial, and custom structures with permit-aware planning. Get a free quote from North GTA Steel.",
    intro: [
      "Toronto projects come with constraints you rarely see elsewhere in Ontario: tight infill lots, mixed commercial zoning, laneway access, and demanding municipal review. Pre-engineered steel buildings suit this environment because the structure is resolved before it arrives on site — fewer trades, a shorter erection window, and a predictable footprint on a constrained property.",
      "North GTA Steel supports Toronto property owners and contractors from early feasibility through supply and erection. We help you confirm what your lot and zoning can support, prepare permit-ready drawings, and plan delivery and crane access realistically for an urban site.",
    ],
    localUses: [
      "Commercial buildings and showrooms on infill lots",
      "Light industrial and contractor shops",
      "Vehicle and fleet storage near major corridors",
      "Warehouse and distribution space",
      "Custom-engineered additions to existing facilities",
    ],
    permitNote:
      "Building permits in Toronto are issued by Toronto Building (City of Toronto). Urban sites often involve zoning review, site plan considerations, and stricter setback and access requirements than surrounding regions — we prepare permit-aware drawings and documentation with that process in mind.",
    faqs: [
      {
        question: "How much does a steel building cost in Toronto?",
        answer:
          "Most pre-engineered steel building packages land in a per-square-foot range that depends on size, height, doors, insulation, and foundation conditions. Toronto sites often add cost for access, staging, and site work rather than the steel itself. We prepare a budgetary estimate for your specific lot within 48 hours of your request.",
      },
      {
        question: "Do I need a building permit for a steel building in Toronto?",
        answer:
          "Yes — almost any steel structure in Toronto requires a permit through Toronto Building. Depending on the property, zoning review and site plan approval may also apply. We supply stamped engineering drawings and help you prepare a permit-ready application.",
      },
      {
        question: "What types of steel buildings are most common in Toronto?",
        answer:
          "Commercial and light industrial structures dominate — contractor shops, fleet garages, warehouse space, and showroom buildings. Clear-span steel frames make the most of small urban lots because no interior columns are needed.",
      },
      {
        question: "How long does a steel building project take in Toronto?",
        answer:
          "Once permits are issued, steel package fabrication typically takes several weeks, and erection of a mid-size building is measured in weeks rather than months. Permitting is usually the longest stage on Toronto projects, which is why we start permit-aware planning early.",
      },
    ],
    nearbySlugs: ["scarborough", "vaughan", "mississauga", "richmond-hill"],
  },
  mississauga: {
    metaTitle: "Steel Buildings Mississauga | North GTA Steel",
    metaDescription:
      "Steel warehouses, logistics buildings, and commercial structures in Mississauga near the 401, 403, and Pearson. Free quotes from North GTA Steel.",
    intro: [
      "Mississauga's position around Pearson Airport and the 401/403/407 corridors makes it one of Ontario's busiest logistics and distribution markets. Pre-engineered steel is the default structure for this work: long clear spans for racking, high eaves for vertical storage, and large door openings for dock and drive-in loading.",
      "We support Mississauga businesses with warehouse, fleet, and commercial steel buildings — from sizing the structure around your racking and truck movements to coordinating foundations and erection on an active business site.",
    ],
    localUses: [
      "Warehouse and distribution buildings near the 401 and 403",
      "Truck and fleet maintenance garages",
      "Cross-dock and logistics facilities",
      "Commercial flex space and contractor units",
      "Cold storage and food-grade buildings",
    ],
    permitNote:
      "Permits in Mississauga go through the City of Mississauga's Building Division. Industrial and commercial projects commonly involve site plan approval and traffic/access review, particularly near airport and highway corridors — our drawings and specifications are prepared to support that process.",
    faqs: [
      {
        question: "What does a steel warehouse cost in Mississauga?",
        answer:
          "Warehouse pricing is driven by clear height, span, door count, and foundation requirements more than floor area alone. As a rule, taller clear heights and dock packages move the per-square-foot number up. We provide a line-item budgetary estimate for your specification within 48 hours.",
      },
      {
        question: "Can you build high-clearance warehouses for racking?",
        answer:
          "Yes. Pre-engineered frames routinely reach eave heights suited for modern racking systems, with clear spans that eliminate interior columns. We design the frame around your racking layout and forklift circulation rather than the other way around.",
      },
      {
        question: "Do Mississauga steel buildings need site plan approval?",
        answer:
          "Most new commercial and industrial buildings in Mississauga require site plan approval in addition to a building permit from the City of Mississauga. We prepare permit-aware drawings and work alongside your planner or civil engineer to keep the application moving.",
      },
      {
        question: "How fast can a logistics building go up in Mississauga?",
        answer:
          "Steel erection itself is fast — the frame and cladding of a mid-size warehouse typically take weeks. The overall schedule is governed by approvals and foundation work, so we sequence fabrication against your permit timeline to avoid dead time.",
      },
    ],
    nearbySlugs: ["brampton", "oakville", "milton", "toronto"],
  },
  brampton: {
    metaTitle: "Steel Buildings Brampton | North GTA Steel",
    metaDescription:
      "Truck garages, logistics buildings, and industrial steel structures in Brampton. Permit-ready drawings and free quotes from North GTA Steel.",
    intro: [
      "Brampton is one of the fastest-growing industrial markets in the country, anchored by trucking, logistics, and manufacturing along the 407 and 410. Steel buildings carry that growth: truck maintenance garages, warehouse expansions, and contractor facilities that need to go up quickly and work hard for decades.",
      "North GTA Steel helps Brampton owners size, permit, and build pre-engineered structures matched to heavy daily use — oversized doors for tractor-trailers, ventilation for shop bays, and frames designed for future expansion.",
    ],
    localUses: [
      "Truck and trailer maintenance garages",
      "Logistics and warehousing along the 407/410 corridors",
      "Manufacturing and fabrication shops",
      "Contractor yards and equipment storage",
      "Industrial expansions to existing plants",
    ],
    permitNote:
      "Building permits in Brampton are handled by the City of Brampton Building Division. Truck-oriented facilities often trigger access, parking, and site plan review — we prepare stamped drawings and specifications that anticipate those requirements.",
    faqs: [
      {
        question: "How much does a truck garage cost in Brampton?",
        answer:
          "A tractor-trailer-capable garage is priced mainly by door height, bay count, and clear span. Oversized doors and taller eaves raise the structure cost, while foundations and floor slabs designed for heavy vehicles are a meaningful part of the budget. We quote your bay layout specifically, with a budgetary estimate in 48 hours.",
      },
      {
        question:
          "What permits do I need for an industrial steel building in Brampton?",
        answer:
          "You'll need a building permit from the City of Brampton, and most new industrial buildings also require site plan approval. Zoning confirms what your property allows before design begins — we help you check that first so no work is wasted.",
      },
      {
        question: "Can a steel building be expanded later?",
        answer:
          "Yes — pre-engineered frames are designed for it. By planning an expandable endwall now, you can add bays later without rebuilding the structure. Many Brampton logistics clients phase their buildings exactly this way.",
      },
      {
        question: "What foundation does a steel building need?",
        answer:
          "Most industrial steel buildings sit on engineered concrete piers or perimeter foundations with a reinforced slab. Heavy vehicle traffic inside the building dictates slab thickness. Foundation design is part of the engineering package we coordinate for your site.",
      },
    ],
    nearbySlugs: ["mississauga", "caledon", "vaughan", "halton-hills"],
  },
  vaughan: {
    metaTitle: "Steel Buildings Vaughan | North GTA Steel",
    metaDescription:
      "Commercial and contractor steel buildings in Vaughan and York Region — design, supply, and permit-aware planning. Free quote from North GTA Steel.",
    intro: [
      "Vaughan sits at the centre of York Region's commercial growth, with contractor businesses, suppliers, and light industry concentrated around Highway 400 and the 407. Steel buildings serve this market well: contractor shops with mezzanine offices, supplier warehouses, and showroom-front commercial buildings that need durability without custom-build budgets.",
      "As a company rooted in the north GTA, this is our home market. We support Vaughan projects end to end — feasibility, permit-ready engineering, steel supply, and erection coordination.",
    ],
    localUses: [
      "Contractor shops with attached office space",
      "Supplier and trade warehouses near Highway 400",
      "Commercial showroom and service buildings",
      "Equipment and fleet storage",
      "Custom structures for growing businesses",
    ],
    permitNote:
      "Permits in Vaughan are issued by the City of Vaughan's Building Standards Department. Commercial projects typically involve zoning confirmation and may require site plan approval — we prepare stamped, permit-ready drawings aligned with the city's submission requirements.",
    faqs: [
      {
        question: "What does a steel building cost in Vaughan?",
        answer:
          "Budget depends on size, eave height, doors, insulation level, and foundation conditions. A simple storage structure prices very differently from an insulated shop with office space. Tell us the use and footprint and we'll return a budgetary estimate within 48 hours.",
      },
      {
        question: "Can I add offices or a mezzanine inside a steel building?",
        answer:
          "Yes — mezzanine offices are one of the most common requests from Vaughan contractors. The mezzanine is engineered into the frame from the start, so plan it before fabrication rather than after.",
      },
      {
        question: "How long does permitting take in Vaughan?",
        answer:
          "Straightforward permitted-use projects move through the City of Vaughan relatively quickly; anything needing site plan approval takes longer. We front-load zoning checks and prepare complete submission packages to minimize review cycles.",
      },
      {
        question: "Do you handle the full project or just the steel?",
        answer:
          "We can support the full path — design and engineering, permit preparation, steel package supply, foundation coordination, and erection support — or supply the engineered package to your own contractor. Most Vaughan clients use us for the planning-through-supply scope.",
      },
    ],
    nearbySlugs: ["richmond-hill", "toronto", "brampton", "caledon"],
  },
  "richmond-hill": {
    metaTitle: "Steel Buildings Richmond Hill | North GTA Steel",
    metaDescription:
      "Steel buildings in Richmond Hill — commercial structures, shops, and storage with permit-aware planning across York Region. Free quotes.",
    intro: [
      "Richmond Hill blends established commercial corridors with residential growth, which means steel building projects here are usually about fitting a durable structure onto a well-located property: a service business outgrowing leased space, a commercial owner adding storage, or a custom shop behind an existing building.",
      "We help Richmond Hill owners confirm zoning early, design structures that satisfy York Region expectations, and move from concept to permit-ready engineering without surprises.",
    ],
    localUses: [
      "Commercial service and trade buildings",
      "Storage structures behind existing businesses",
      "Workshops and small fabrication spaces",
      "Vehicle storage and detailing facilities",
      "Custom light-commercial structures",
    ],
    permitNote:
      "Building permits in Richmond Hill are processed by the City of Richmond Hill's Building Services Division. Lots near residential zones often carry tighter setback, height, and screening requirements — we check these against your concept before engineering begins.",
    faqs: [
      {
        question: "How much does a steel building cost in Richmond Hill?",
        answer:
          "Cost scales with footprint, height, insulation, and site conditions. Smaller commercial structures carry a higher per-square-foot rate than large warehouses because fixed costs spread over less area. We'll give you a specific budgetary estimate within 48 hours of your request.",
      },
      {
        question: "Can I put a steel building on a commercial lot near homes?",
        answer:
          "Often yes, but Richmond Hill applies stricter setbacks, height limits, and sometimes architectural screening near residential zones. We review your property's zoning first so the design you fall in love with is one the city will approve.",
      },
      {
        question: "What snow load are steel buildings designed for here?",
        answer:
          "Every building we engineer is designed to the Ontario Building Code ground snow load for its exact location, including drift loading where roofs meet. York Region loads are handled routinely — it's built into the stamped engineering, not an add-on.",
      },
      {
        question: "What's the first step to starting a project?",
        answer:
          "Tell us the property and intended use. We confirm zoning feasibility, then size and budget the building. That feasibility check costs you nothing and prevents designing something the lot can't carry.",
      },
    ],
    nearbySlugs: ["vaughan", "toronto", "scarborough", "uxbridge"],
  },
  oakville: {
    metaTitle: "Steel Buildings Oakville | North GTA Steel",
    metaDescription:
      "Steel garages, workshops, and commercial buildings in Oakville, Halton Region. Engineered packages and permit support from North GTA Steel.",
    intro: [
      "Oakville projects tend to prize finish and longevity: a steel structure here is usually a premium garage, a clean commercial building along a business corridor, or a workshop that has to look as good as it performs. Modern steel cladding profiles and architectural options make that achievable without sacrificing the cost and speed advantages of pre-engineered construction.",
      "We support Oakville owners with structures designed for long-term property value — engineered for Halton conditions and detailed to satisfy a municipality that cares about appearance.",
    ],
    localUses: [
      "Premium vehicle garages and collection storage",
      "Commercial buildings along business corridors",
      "Workshops and hobby buildings",
      "Marine and recreational storage",
      "Small business and service structures",
    ],
    permitNote:
      "Permits in Oakville are issued by the Town of Oakville's Building Services department. Oakville applies notable urban design and appearance expectations on visible commercial sites — cladding and elevation choices matter here, and we design with that review in mind.",
    faqs: [
      {
        question: "How much does a steel garage cost in Oakville?",
        answer:
          "A detached steel garage is priced by footprint, wall height, door package, and finish level. Architectural cladding and insulation move the number up but pay back in appearance and usability. We'll prepare a budgetary estimate for your exact configuration within 48 hours.",
      },
      {
        question: "Can a steel building look like a traditional building?",
        answer:
          "Yes. Steel structures can carry stone or wood-look facades, architectural panel profiles, varied rooflines, and full window packages. Several Oakville-area projects are indistinguishable from conventional construction at street level.",
      },
      {
        question: "Do I need a permit for a garage or workshop in Oakville?",
        answer:
          "Any structure over 10 square metres requires a building permit from the Town of Oakville, and accessory buildings have specific height and setback rules by zone. We confirm your property's limits before design so the application goes through cleanly.",
      },
      {
        question: "How long does an Oakville steel building project take?",
        answer:
          "Typical small-to-mid projects run a few weeks of design, the permit review period, several weeks of fabrication, and a short erection window. Planning and permits are usually the long poles — construction itself is quick.",
      },
    ],
    nearbySlugs: ["burlington", "milton", "mississauga", "halton-hills"],
  },
  burlington: {
    metaTitle: "Steel Buildings Burlington | North GTA Steel",
    metaDescription:
      "Commercial steel buildings, storage structures, and workshops in Burlington. Engineered for Halton conditions — free quotes from North GTA Steel.",
    intro: [
      "Burlington sits where the GTA meets Hamilton's industrial belt, and its steel building demand reflects both: commercial and flex-industrial structures near the QEW and 407, plus storage and workshop buildings on the rural edge toward Mount Nemo and Kilbride.",
      "North GTA Steel supports both ends of that spectrum — from code-compliant commercial structures with office components to straightforward, durable storage buildings — with engineering matched to the escarpment-influenced wind and snow conditions.",
    ],
    localUses: [
      "Commercial and flex-industrial buildings near the QEW",
      "Storage and warehouse structures",
      "Rural workshops and equipment buildings",
      "Vehicle and RV storage",
      "Custom structures for service businesses",
    ],
    permitNote:
      "Building permits in Burlington are administered by the City of Burlington's Building Department. Properties near the Niagara Escarpment may also involve Conservation Halton or Niagara Escarpment Commission review — we flag that early because it changes timelines.",
    faqs: [
      {
        question: "What does a steel building cost in Burlington?",
        answer:
          "Pricing follows size, height, doors, insulation, and foundations. Rural-edge storage buildings are typically the most economical per square foot; insulated commercial buildings with office space cost more. We return a budgetary estimate for your specification within 48 hours.",
      },
      {
        question: "My property is near the escarpment — can I still build?",
        answer:
          "Usually yes, but parcels under Conservation Halton or Niagara Escarpment Commission jurisdiction need additional approvals before a City of Burlington permit. We help identify which authorities apply to your lot at the feasibility stage.",
      },
      {
        question: "Are steel buildings good for storage businesses?",
        answer:
          "They're the industry standard — clear spans maximize usable volume, steel resists wear from constant vehicle movement, and the structure can be phased as your occupancy grows. Self-storage and contractor storage are common Burlington applications.",
      },
      {
        question: "How is wind load handled in Burlington designs?",
        answer:
          "Designs follow the Ontario Building Code wind pressures for your exact site, and exposure near the lake or escarpment edges is accounted for in the stamped engineering. It's part of every package, not an upgrade.",
      },
    ],
    nearbySlugs: ["oakville", "milton", "st-catharines", "halton-hills"],
  },
  scarborough: {
    metaTitle: "Steel Buildings Scarborough | North GTA Steel",
    metaDescription:
      "Steel garages, storage, and light industrial buildings in Scarborough and east Toronto. Permit-aware planning and free quotes from North GTA Steel.",
    intro: [
      "Scarborough's employment lands along Highway 401 and the Golden Mile carry a deep stock of aging industrial buildings — and steel is how much of it gets renewed. Typical projects here are light industrial replacements, storage additions behind existing businesses, and garages serving the area's automotive trade.",
      "We support east-Toronto owners with structures that fit established lots: matching setbacks, working around existing buildings, and meeting Toronto Building requirements without over-complicating the project.",
    ],
    localUses: [
      "Light industrial and fabrication buildings",
      "Automotive shops and service garages",
      "Storage additions on existing employment lands",
      "Fleet parking and maintenance structures",
      "Warehouse space along the 401 corridor",
    ],
    permitNote:
      "Scarborough is part of the City of Toronto, so permits run through Toronto Building's east district offices. Projects on employment lands usually have favourable zoning, but additions near lot lines need careful setback and fire-separation review — we handle that in the drawing set.",
    faqs: [
      {
        question: "How much does a steel building cost in Scarborough?",
        answer:
          "Costs track size, height, and site conditions. Additions and infill structures on existing industrial lots often spend more on site work and connections than a greenfield build — we price your actual conditions and return a budgetary estimate within 48 hours.",
      },
      {
        question: "Can I add a steel structure behind my existing building?",
        answer:
          "Frequently yes — it's one of the most common Scarborough requests. The constraints are setbacks, fire separations, and lot coverage limits. We review your survey and zoning before design so the addition is approvable.",
      },
      {
        question: "Are steel buildings suitable for automotive shops?",
        answer:
          "Very — clear spans give flexible bay layouts, high eaves accommodate hoists, and steel handles the wear of a working shop. Ventilation, floor drainage, and door packages are designed around your equipment list.",
      },
      {
        question: "Who issues permits in Scarborough?",
        answer:
          "Toronto Building (City of Toronto) — Scarborough has no separate permit authority. We prepare stamped engineering and a complete submission package aligned with Toronto's requirements.",
      },
    ],
    nearbySlugs: ["toronto", "pickering", "ajax", "richmond-hill"],
  },
  pickering: {
    metaTitle: "Steel Buildings Pickering | North GTA Steel",
    metaDescription:
      "Steel buildings in Pickering — commercial structures, agricultural buildings, and workshops across Durham Region. Free quotes from North GTA Steel.",
    intro: [
      "Pickering spans two worlds: an urbanizing south end with growing commercial and industrial demand around Highway 401 and the new Durham Live district, and a rural north (Greenwood, Claremont, Whitevale) where agricultural and equestrian steel buildings are the norm.",
      "We serve both — engineered commercial structures for south Pickering business sites, and practical farm, hobby, and storage buildings for north Pickering acreages — with permitting guidance matched to each context.",
    ],
    localUses: [
      "Commercial and industrial buildings near Highway 401",
      "Agricultural barns and equipment storage in north Pickering",
      "Workshops and hobby garages on rural lots",
      "Warehouse and logistics structures",
      "Equestrian buildings and riding arenas",
    ],
    permitNote:
      "Building permits in Pickering are issued by the City of Pickering's Building Services Section. Rural north-Pickering parcels may also involve Toronto and Region Conservation Authority review, and some lands fall under federal airport-lands considerations — we confirm what applies to your parcel first.",
    faqs: [
      {
        question: "How much does a steel building cost in Pickering?",
        answer:
          "Agricultural and storage buildings on rural lots are typically the most economical; insulated commercial structures cost more per square foot. Site servicing is often the swing factor on rural parcels. We provide a budgetary estimate for your project within 48 hours.",
      },
      {
        question: "Do farm buildings need permits in Pickering?",
        answer:
          "Yes — agricultural buildings still require a building permit from the City of Pickering, though farm structures on bona fide agricultural properties may qualify for reduced requirements under the Building Code. We help you document the use correctly.",
      },
      {
        question: "Can you build riding arenas in north Pickering?",
        answer:
          "Yes — clear-span steel frames are ideal for riding arenas because the riding surface needs no interior columns. Standard arena widths are routine engineering, with natural light packages and ventilation designed in.",
      },
      {
        question: "What foundation works best on rural lots?",
        answer:
          "Most rural steel buildings use concrete piers or a perimeter grade beam, with slab-on-grade where the use requires it. Soil conditions drive the design — we coordinate the geotechnical input and foundation engineering as part of the package.",
      },
    ],
    nearbySlugs: ["ajax", "scarborough", "whitby", "uxbridge"],
  },
  ajax: {
    metaTitle: "Steel Buildings Ajax | North GTA Steel",
    metaDescription:
      "Industrial steel buildings, vehicle storage, and business structures in Ajax, Durham Region. Engineered packages and free quotes from North GTA Steel.",
    intro: [
      "Ajax's employment lands along Highway 401 and Bayly Street support a steady mix of light industry, automotive businesses, and trades — and the town's continued growth keeps demand high for practical, durable building space.",
      "North GTA Steel helps Ajax businesses add that space efficiently: workshop and warehouse structures sized for real operations, engineered for Durham snow and wind loads, and planned around the Town of Ajax's approval process.",
    ],
    localUses: [
      "Light industrial and trade buildings",
      "Vehicle storage and detailing facilities",
      "Warehouse space along the 401 corridor",
      "Contractor shops and equipment storage",
      "Business expansions on existing lots",
    ],
    permitNote:
      "Building permits in Ajax are issued by the Town of Ajax Building Services division. Commercial and industrial projects may require site plan approval, and properties near Duffins Creek can involve conservation authority review — we identify those triggers during feasibility.",
    faqs: [
      {
        question: "What does a steel building cost in Ajax?",
        answer:
          "Cost is set by footprint, eave height, doors, insulation, and foundation needs. Mid-size shop and storage buildings in Durham are among the most cost-efficient steel projects we do. Send us your size and use, and we'll return a budgetary estimate within 48 hours.",
      },
      {
        question: "How long does a steel building take from order to done?",
        answer:
          "After permits, fabrication typically runs several weeks and erection a few weeks more depending on size. The permit stage is the variable — we prepare complete, permit-ready packages for the Town of Ajax to keep review cycles short.",
      },
      {
        question: "Are steel buildings insulated for year-round use?",
        answer:
          "Yes — wall and roof systems range from basic vapour-barrier packages to high-R insulated panel systems for fully conditioned shops. Tell us how you'll use the space and we'll match the envelope to it.",
      },
      {
        question: "Can I expand an existing building in Ajax with steel?",
        answer:
          "Often, yes. Steel additions tie into existing structures well, but fire separation, setbacks, and lot coverage rules govern what's possible. We review your survey and the existing building before proposing a design.",
      },
    ],
    nearbySlugs: ["pickering", "whitby", "scarborough", "uxbridge"],
  },
  whitby: {
    metaTitle: "Steel Buildings Whitby | North GTA Steel",
    metaDescription:
      "Steel garages, workshops, and commercial buildings in Whitby and Brooklin. Permit-aware planning and free quotes from North GTA Steel.",
    intro: [
      "Whitby pairs a growing urban core with the rural Brooklin and Ashburn areas to the north, so steel projects here range from commercial buildings near Highway 401 to workshops, hobby garages, and agricultural structures on country properties.",
      "We help Whitby owners get the scope right early — what the lot allows, what the Town requires, and what the building should cost — then carry the project through engineering, supply, and erection support.",
    ],
    localUses: [
      "Commercial buildings near the 401 and 407 east extension",
      "Workshops and hobby garages in Brooklin and Ashburn",
      "Agricultural and equipment storage in north Whitby",
      "Vehicle and RV storage structures",
      "Trade and contractor buildings",
    ],
    permitNote:
      "Building permits in Whitby are issued by the Town of Whitby's Building Division. Rural north-Whitby properties may involve Central Lake Ontario Conservation review, and accessory building size limits vary by zone — we verify your property's rules before design.",
    faqs: [
      {
        question: "How much does a steel workshop cost in Whitby?",
        answer:
          "A typical hobby or trade workshop is priced by footprint, wall height, door package, and insulation. Rural Whitby builds often save on site constraints compared to urban lots. We'll prepare a budgetary estimate for your configuration within 48 hours.",
      },
      {
        question: "What size accessory building can I put on my property?",
        answer:
          "It depends on your zone — the Town of Whitby caps accessory building height and lot coverage differently for urban and rural properties. We check your zoning first so the building is sized to what's approvable.",
      },
      {
        question: "Do you serve rural properties in Brooklin and Ashburn?",
        answer:
          "Yes — north Whitby acreages are a core part of our Durham coverage. Farm storage, workshops, and equestrian buildings on these properties are routine projects for us.",
      },
      {
        question: "What snow load do Whitby buildings need to handle?",
        answer:
          "Designs follow the Ontario Building Code ground snow load for Whitby specifically, including drift effects from adjacent roofs or parapets. It's engineered into every stamped package we supply.",
      },
    ],
    nearbySlugs: ["ajax", "pickering", "uxbridge"],
  },
  caledon: {
    metaTitle: "Steel Buildings Caledon | North GTA Steel",
    metaDescription:
      "Agricultural buildings, equestrian arenas, and rural workshops in Caledon. Engineered steel packages and free quotes from North GTA Steel.",
    intro: [
      "Caledon is horse and farm country at the GTA's edge — large rural properties, equestrian operations, and working farms that need serious buildings: riding arenas, hay and equipment storage, and workshops that shrug off decades of use.",
      "Steel excels here. Clear-span frames give column-free arenas and storage, metal cladding stands up to farm life, and pre-engineered packages keep budgets predictable. We support Caledon projects from concept and permits through erection.",
    ],
    localUses: [
      "Indoor riding arenas and equestrian facilities",
      "Hay, grain, and equipment storage buildings",
      "Farm workshops and machine sheds",
      "Rural garages and hobby buildings",
      "Kennels, coverall replacements, and custom agricultural structures",
    ],
    permitNote:
      "Building permits in Caledon are issued by the Town of Caledon's Building Division. Much of Caledon falls under Oak Ridges Moraine, Greenbelt, or Niagara Escarpment policies, and conservation authority review is common — we map these constraints onto your parcel before any design work.",
    faqs: [
      {
        question: "What does an indoor riding arena cost in Caledon?",
        answer:
          "Arena cost is driven by clear-span width, length, height, and options like insulation, lighting packages, and attached stabling. The riding surface and site work are meaningful line items beyond the structure. We'll prepare an arena-specific budgetary estimate within 48 hours.",
      },
      {
        question: "Do agricultural buildings in Caledon need permits?",
        answer:
          "Yes — farm buildings need a permit from the Town of Caledon, though structures on bona fide farms may qualify for the Building Code's reduced farm-building requirements. Greenbelt and moraine policies can affect siting, which we review up front.",
      },
      {
        question: "How wide can a clear-span steel building go?",
        answer:
          "Pre-engineered rigid frames span widths far beyond what equestrian and farm uses typically need — standard arena widths of 70–100+ feet are routine, with no interior columns interrupting the space.",
      },
      {
        question: "Can you match a building to an estate property's look?",
        answer:
          "Yes — colour-matched cladding, wainscoting, cupolas, and window packages let an arena or workshop sit comfortably beside an estate home. Several Caledon projects are specified as much for appearance as function.",
      },
    ],
    nearbySlugs: ["brampton", "vaughan", "halton-hills"],
  },
  uxbridge: {
    metaTitle: "Steel Buildings Uxbridge | North GTA Steel",
    metaDescription:
      "Farm buildings, workshops, and rural steel structures in Uxbridge and Durham North. Permit-aware planning and free quotes from North GTA Steel.",
    intro: [
      "Uxbridge Township is rolling, treed, rural country on the Oak Ridges Moraine — properties here are acreages, hobby farms, and equestrian operations that need storage buildings, workshops, and barns sited carefully within moraine land-use rules.",
      "We bring permit-aware planning to that picture: confirming what your parcel's designation allows, engineering for Durham North's heavier snow loads, and supplying steel packages built for rural use.",
    ],
    localUses: [
      "Farm and hobby-farm storage buildings",
      "Workshops and machine sheds",
      "Equestrian barns and run-in structures",
      "Rural garages and toy storage",
      "Mixed-use storage and studio buildings",
    ],
    permitNote:
      "Building permits in Uxbridge are issued by the Township of Uxbridge Building Department. Most of the township sits on the Oak Ridges Moraine, so moraine conservation policies and Lake Simcoe or Toronto region conservation authorities can apply — siting review comes first on every Uxbridge project.",
    faqs: [
      {
        question: "How much does a rural steel building cost in Uxbridge?",
        answer:
          "Rural storage and shop buildings are among the most economical steel projects per square foot. Driveway access, hydro, and foundation conditions are the usual site variables. We'll return a budgetary estimate for your property within 48 hours.",
      },
      {
        question: "Does the Oak Ridges Moraine affect what I can build?",
        answer:
          "It can — moraine designations affect siting, lot coverage, and sometimes the approval path, though most agricultural and accessory uses remain permitted. We check your parcel's designation before design so there are no late surprises.",
      },
      {
        question: "What snow loads apply in Durham North?",
        answer:
          "Uxbridge carries higher ground snow loads than lakefront Durham, and our stamped engineering uses the code value for your exact site, including drifting. The structure is designed for the location, not a generic GTA number.",
      },
      {
        question: "Can a steel building include a heated workshop section?",
        answer:
          "Yes — a common Uxbridge configuration is cold storage with a partitioned, insulated, heated shop bay. The envelope and interior partitions are designed together so you only condition the space you use.",
      },
    ],
    nearbySlugs: ["whitby", "pickering", "richmond-hill"],
  },
  "halton-hills": {
    metaTitle: "Steel Buildings Halton Hills | North GTA Steel",
    metaDescription:
      "Steel buildings in Halton Hills — farm structures, storage, and garages in Georgetown and Acton. Free quotes from North GTA Steel.",
    intro: [
      "Halton Hills — Georgetown, Acton, and the rural lands between — mixes commuter-town growth with active farmland. Steel building demand follows suit: storage and workshop buildings on rural properties, garages in town, and commercial structures around the Georgetown industrial areas.",
      "We support Halton Hills projects with engineered packages sized to the property and use, and with early checks on the Town's zoning and the conservation constraints common along the escarpment edge.",
    ],
    localUses: [
      "Farm storage and machine sheds",
      "Workshops and rural garages",
      "Commercial structures near Georgetown's industrial lands",
      "Equipment and vehicle storage",
      "Custom buildings for growing rural businesses",
    ],
    permitNote:
      "Building permits in Halton Hills are issued by the Town of Halton Hills Building Division. Properties near the escarpment or watercourses may need Conservation Halton or Credit Valley Conservation sign-off, and Niagara Escarpment Commission rules apply in designated areas — we screen for all three early.",
    faqs: [
      {
        question: "What does a steel building cost in Halton Hills?",
        answer:
          "Pricing depends on size, height, doors, and insulation, with rural storage buildings at the economical end and insulated commercial structures higher. We prepare a property-specific budgetary estimate within 48 hours.",
      },
      {
        question: "Can I build a large accessory building on a rural lot?",
        answer:
          "Rural zones in Halton Hills generally allow generous accessory buildings, but height and coverage limits still apply, and escarpment-area designations can constrain siting. We confirm your lot's specifics before design.",
      },
      {
        question: "Are steel buildings good for farm use?",
        answer:
          "They're the modern standard — clear spans for equipment movement, durable cladding, ventilation options for livestock or hay, and the ability to expand with the operation. Farm packages can also qualify for reduced Building Code requirements on bona fide farms.",
      },
      {
        question: "Do you supply just the steel package if I have a builder?",
        answer:
          "Yes — we can deliver the engineered steel package with stamped drawings for your own contractor to erect, or support the full project including foundations and erection. Halton Hills clients use both models.",
      },
    ],
    nearbySlugs: ["milton", "caledon", "brampton", "oakville"],
  },
  milton: {
    metaTitle: "Steel Buildings Milton | North GTA Steel",
    metaDescription:
      "Commercial and industrial steel buildings in Milton's growth corridors near the 401 and 407. Engineered packages and free quotes from North GTA Steel.",
    intro: [
      "Milton has spent two decades as one of Canada's fastest-growing communities, and its employment lands along the 401 and Derry Road keep absorbing logistics, trade, and light-industrial businesses that need buildings quickly.",
      "Pre-engineered steel is built for that pace: predictable fabrication timelines, fast erection, and frames that expand as the business does. We support Milton projects from zoning feasibility through supply and erection on tight development schedules.",
    ],
    localUses: [
      "Logistics and warehouse buildings near the 401",
      "Trade and contractor facilities",
      "Light industrial and fabrication shops",
      "Commercial flex buildings",
      "Equipment storage on the rural west side",
    ],
    permitNote:
      "Building permits in Milton are issued by the Town of Milton's Building Services division. New commercial and industrial buildings typically require site plan approval, and lands near the escarpment edge involve Conservation Halton — both are factored into our project timelines from day one.",
    faqs: [
      {
        question: "How much does an industrial steel building cost in Milton?",
        answer:
          "Clear height, span, dock and drive-in door counts, and floor loading drive the budget more than area alone. Milton's competitive land market makes efficient building footprints valuable — we help size the structure to the site and return a budgetary estimate within 48 hours.",
      },
      {
        question: "How fast can a building be operational in Milton?",
        answer:
          "Steel fabrication and erection are measured in weeks; approvals are the variable. With zoning confirmed and a complete site plan and permit package, Milton projects move steadily — we sequence fabrication against approvals so the site never waits on steel.",
      },
      {
        question: "Can the building grow with my business?",
        answer:
          "Yes — specify an expandable endwall now and future bays bolt on without structural rework. Milton's growth trajectory makes this one of the smartest line items in the original design.",
      },
      {
        question: "Do you work with developers and GCs?",
        answer:
          "Regularly. We supply engineered steel packages with stamped drawings into developer-led and general-contractor-led projects, or carry design-supply-erect scope directly for owners.",
      },
    ],
    nearbySlugs: ["oakville", "burlington", "halton-hills", "mississauga"],
  },
  sudbury: {
    metaTitle: "Steel Buildings Sudbury | North GTA Steel",
    metaDescription:
      "Industrial and heavy-duty steel buildings in Greater Sudbury, engineered for northern snow loads. Free quotes from North GTA Steel.",
    intro: [
      "Greater Sudbury's economy runs on mining, heavy industry, and the trades that support them — and its buildings have to handle northern Ontario conditions: snow loads well above southern values, hard freeze-thaw cycles, and equipment that dwarfs what most GTA shops house.",
      "We engineer Sudbury steel buildings for exactly that: heavier frames and roof systems rated for northern snow, high and wide door packages for mining-support equipment, and insulation systems that make year-round operation economical.",
    ],
    localUses: [
      "Mining-support shops and equipment maintenance buildings",
      "Industrial warehouses and laydown cover",
      "Heavy equipment storage with oversized doors",
      "Contractor and trades facilities",
      "Cold storage and seasonal equipment buildings",
    ],
    permitNote:
      "Building permits in Sudbury are issued by City of Greater Sudbury Building Services. Northern snow and wind design values apply, and rural-area lots can involve site-specific servicing requirements — our stamped engineering is done to Sudbury's code values, not southern Ontario defaults.",
    faqs: [
      {
        question: "How much does a steel building cost in Sudbury?",
        answer:
          "Northern snow loads mean somewhat heavier framing than an equivalent GTA building, and freight is a real line item — but steel remains the most economical way to enclose industrial space in the north. We provide a Sudbury-specific budgetary estimate within 48 hours.",
      },
      {
        question: "Are your buildings engineered for northern snow loads?",
        answer:
          "Yes — every package is stamped for the ground snow load at its exact location. A Sudbury building is engineered to Sudbury values from the start; it is not a southern design shipped north.",
      },
      {
        question: "Can doors be sized for mining and heavy equipment?",
        answer:
          "Yes — oversized rolling and bi-fold doors for haul-truck-scale equipment are a routine part of northern industrial packages, with frames and headers engineered around the opening sizes you need.",
      },
      {
        question: "Do you really service Sudbury from the GTA?",
        answer:
          "Yes — Sudbury is part of our extended Ontario coverage. Engineering, supply, and delivery are coordinated remotely with site visits at key stages, and erection is supported through our network or your local contractor.",
      },
    ],
    nearbySlugs: ["toronto", "vaughan", "kingston"],
  },
  kingston: {
    metaTitle: "Steel Buildings Kingston | North GTA Steel",
    metaDescription:
      "Warehouses, commercial buildings, and rural steel structures in Kingston and eastern Ontario. Free quotes from North GTA Steel.",
    intro: [
      "Kingston anchors eastern Ontario's 401 corridor, midway between Toronto and Montreal — a natural location for warehousing and distribution, alongside a steady local market of commercial buildings, trades facilities, and rural structures in the surrounding townships.",
      "We extend our full design-supply-support model to Kingston: engineered packages for warehouse and commercial projects in the city, and practical storage and farm buildings for the rural fringe.",
    ],
    localUses: [
      "Warehouse and distribution buildings on the 401 corridor",
      "Commercial and trades facilities",
      "Rural storage and farm buildings in surrounding townships",
      "Vehicle, boat, and RV storage",
      "Custom structures for institutional and business use",
    ],
    permitNote:
      "Building permits in Kingston are issued by the City of Kingston's Building Division. Projects in surrounding townships (Loyalist, South Frontenac) go through those municipalities instead, and waterfront-adjacent parcels can involve conservation review — we confirm the right authority for your address first.",
    faqs: [
      {
        question: "What does a steel building cost in Kingston?",
        answer:
          "Pricing follows the same drivers as anywhere — size, height, doors, insulation, foundations — with eastern Ontario sites often benefiting from straightforward lot conditions. We'll return a budgetary estimate for your project within 48 hours.",
      },
      {
        question: "Why is Kingston good for warehouse projects?",
        answer:
          "Position. Kingston sits a half-day truck run from both Toronto and Montreal on the 401, which makes mid-corridor distribution space valuable. Clear-span steel maximizes usable cube on that land.",
      },
      {
        question: "Do you cover townships around Kingston?",
        answer:
          "Yes — our eastern Ontario coverage includes the rural municipalities around Kingston. Note that permits go through your local township office rather than the City of Kingston, and we prepare the package accordingly.",
      },
      {
        question: "How do deliveries work for eastern Ontario projects?",
        answer:
          "Steel packages ship direct to site on scheduled flatbeds, sequenced with your foundation completion and erection crew. Distance from the GTA changes logistics, not feasibility — Kingston projects run on the same model as our GTA work.",
      },
    ],
    nearbySlugs: ["whitby", "ajax", "toronto"],
  },
  "st-catharines": {
    metaTitle: "Steel Buildings St. Catharines | North GTA Steel",
    metaDescription:
      "Steel buildings in St. Catharines and Niagara — winery structures, storage, garages, and commercial buildings. Free quotes from North GTA Steel.",
    intro: [
      "St. Catharines is the working centre of Niagara — a region whose steel building demand is unusually varied: winery production and storage buildings, agricultural structures for tender-fruit farms, marine and seasonal storage near the canal and lake, and conventional commercial space along the QEW.",
      "We support all of it with engineered packages suited to Niagara's milder-but-windier lakeshore climate, and with permitting guidance that accounts for the region's agricultural land protections.",
    ],
    localUses: [
      "Winery production, barrel, and equipment buildings",
      "Agricultural structures for fruit and vine operations",
      "Commercial and trades buildings along the QEW corridor",
      "Boat, RV, and seasonal storage",
      "Garages and workshops on rural Niagara properties",
    ],
    permitNote:
      "Building permits in St. Catharines are issued by the city's Planning and Building Services department. Agricultural parcels in Niagara often sit under Greenbelt and specialty-crop protections that shape what and where you can build — we review those designations during feasibility.",
    faqs: [
      {
        question: "How much does a steel building cost in St. Catharines?",
        answer:
          "Drivers are the usual ones — size, height, doors, insulation, foundations — and agricultural packages on farm properties are often the most economical. We prepare a Niagara-specific budgetary estimate within 48 hours of your request.",
      },
      {
        question: "Are steel buildings used for wineries?",
        answer:
          "Extensively — production floors, barrel storage, and covered crush pads all favour clear-span, easily insulated, washdown-friendly steel structures. Envelope and ventilation are designed around temperature-stable storage where needed.",
      },
      {
        question: "Can I build on Greenbelt or specialty-crop land?",
        answer:
          "Agricultural uses generally can, within rules — Niagara's tender-fruit and grape lands carry specific protections that affect non-farm structures especially. We confirm your parcel's designation and the approval path before design.",
      },
      {
        question: "How does the lakeshore climate affect the design?",
        answer:
          "Niagara sees lower snow loads than most of Ontario but notable wind exposure near the lake. Stamped engineering uses your site's actual code values for both, and cladding and fastening specs reflect the wind environment.",
      },
    ],
    nearbySlugs: ["burlington", "oakville", "milton"],
  },
};

export function getFullServiceCity(slug: string): FullServiceCity | undefined {
  const base = getServiceCity(slug);
  const content = cityContent[slug];
  if (!base || !content) return undefined;
  return { ...base, ...content };
}

export function getAllFullServiceCities(): FullServiceCity[] {
  return serviceCities
    .map((city) => getFullServiceCity(city.slug))
    .filter((c): c is FullServiceCity => Boolean(c));
}

export function getNearbyCities(city: FullServiceCity): ServiceCity[] {
  return city.nearbySlugs
    .map((slug) => getServiceCity(slug))
    .filter((c): c is ServiceCity => Boolean(c));
}
