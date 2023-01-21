import placeholderimg from "../Assets/Aboutus/OurTeamVectorIcons/ourteamplaceholder.svg";
import candidate from "../Assets/Aboutus/OurTeamVectorIcons/candidates.svg";
import ourvalue from "../Assets/Aboutus/OurTeamVectorIcons/ourvalues.svg";
import onShoreInvestor from "../Assets/Aboutus/WhyEMFIIcons/onshoreinvestors.svg";
import offShoreInvestor from "../Assets/Aboutus/WhyEMFIIcons/offshoreinvestors.svg";

type OurTeamContent = {
  id: string;
  name: string;
  designation: string;
  linkedIn: string;
  email: string;
  image: string;
};

type OurValuesContent = {
  id: string;
  image: string;
  title: string;
  content: string;
};

type AboutEmfiContent = {
  id: string;
  title: string;
  isImage: boolean;
  paragraph: string[];
  image: string;
};

type OurClientsContent = {
  id: string;
  image: string;
  title: string;
};

type infoSectionContent = {
  image: string;
  id: string;
  isImage: boolean;
  title: string;
  paragraphs: string[];
};
type AsSeenContent = {
  id: string;
  image: string;
  hoverImage: string;
  alt: string;
};

export const PrivacyPolicyES = {
  firstParagraph:
    '11EMFI appreciates your visit to this web site ("EMFI Website") and your interest in our services and products. Your privacy is important to us and we want you to feel comfortable visiting our site. We take care to protect your personal data collected, processed and used during visits to the EMFI Website.',
  secondParagraph:
    "How we protect or use your data varies from country to country. Privacy Notices can be found for certain jurisdictions where EMFI entities process personal data. The terms of this Policy will be subject to the relevant jurisdiction-specific Privacy Notice where applicable. Please click on the jurisdiction that applies to you from the list at https://www.emfi.uk/english/privacy-policy",
  heading:
    'By accessing the EMFI Website you accept this Privacy Policy ("Policy").',
  subHeading:
    "If you do not agree to this Policy, do not proceed to further web pages of the EMFI Website.",
  policy: [
    {
      id: "1",
      policy: "1.What are the purpose and the scope of this Policy?",
    },
  ],
};

export const AboutEmfiContentES: AboutEmfiContent[] = [
  {
    id: "1",
    title: "Why",
    isImage: true,
    paragraph: [
      "EMFI came into being in response to a market that is highly fragmented with divergent needs of onshore and offshore investors going unaddressed.",
      "Traditional banks and financial companies are heavily focused on certain segments and products or services that fit into their top down business structures.",
      " EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions  EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions to address those needs.to address those needs.",
    ],
    image: "/whyEMFI.svg",
  },
  {
    id: "2",
    isImage: false,
    title: "Onshore Investors",
    paragraph: [
      " We deliver up-to-date market colour from major financial centers of the world to local investors who might operate in a very different context.",
      " We provide our expertise and analysis to less sophisticated onshore clients who might be ignored by traditional players due to their size.",
      " Through our business partners, we provide direct market access to a 100 markets in 25 developed and emerging countries.",
    ],
    image: onShoreInvestor,
  },
  {
    id: "3",
    isImage: false,
    title: "Offshore Investors",
    paragraph: [
      "We actively service high beta Latin American sovereign and quasi-sovereign market where traditional coverage is lacking at best.",
      "We are able to deliver superior local intelligence in a timely manner due to the depth and breadth of our onshore relationships.",
      "We are better positioned to match local flows with external investors, as well as EM dedicated flows with crossover and high yield clients.",
    ],
    image: offShoreInvestor,
  },
];

export const OurClientsContentES: OurClientsContent[] = [
  {
    id: "1",
    image: "/pensionfunds.svg",
    title: "Pension Funds",
  },
  {
    id: "2",
    image: "/hegdefunds.svg",
    title: "Hedge Funds",
  },
  {
    id: "3",
    image: "/mutualfunds.svg",
    title: "Mutual Funds",
  },
  {
    id: "4",
    image: "/corporatetreasuries.svg",
    title: "Corporate Treasuries",
  },
  {
    id: "5",
    image: "/fintech.svg",
    title: "Fintech",
  },
  {
    id: "6",
    image: "/banks.svg",
    title: "Banks",
  },
  {
    id: "7",
    image: "/brokers.svg",
    title: "Brokers",
  },
  {
    id: "8",
    image: "/insurancecompanies.svg",
    title: "Insurance Companies",
  },
];

export const OurValuesContentES: OurValuesContent[] = [
  {
    id: "1",
    image: "/customersuitability.svg",
    content:
      "We cherish our clients and take a long term view in managing our relationships. We make sure our products and services are adequate for our clients and are sold in a way that is not detrimental to their interests.",
    title: "Customer Suitability",
  },
  {
    id: "2",
    image: "/conflictsofinterest.svg",
    content:
      "We put our clients' best interests before our own and strive to identify and manage potential conflicts of interest. We never let our interests influence our advice to a client, or our dealings with them.",
    title: "Conflicts of Interest",
  },
  {
    id: "3",
    image: "/clientconfidentiality.svg",
    content:
      "We never share our clients' details with anyone, unless we have their express permission to do so, or where we have a legal duty to share it with the relevant authorities.",
    title: "Client Confidentiality",
  },
  {
    id: "4",
    image: "/customercomplaints.svg",
    content:
      "We take any and all customer complaints very seriously. We appreciate regular feedback from our clients and strive to make it right if we fail to get it right the first time around.",
    title: "Customer Complaints",
  },
];

export const OurTeamContentES: OurTeamContent[] = [
  {
    id: "1",
    name: "Usman Sheikh",
    image: placeholderimg,
    designation: "Chief Executive",
    linkedIn: "",
    email: "",
  },
  {
    id: "2",
    name: "Liam Flanigan",
    image: placeholderimg,
    designation: "Compliance",
    linkedIn: "",
    email: "",
  },
  {
    id: "3",
    name: "Geronimo Mansutti, CFA",
    image: placeholderimg,
    designation: "Strategy",
    linkedIn: "",
    email: "",
  },
  {
    id: "4",
    name: "Atif Rashid",
    image: placeholderimg,
    designation: "Accounting",
    linkedIn: "",
    email: "",
  },
  {
    id: "5",
    name: "Gustavo Rodrígues",
    image: placeholderimg,
    designation: "Compliance",
    linkedIn: "",
    email: "",
  },
  {
    id: "6",
    name: "Jon Zurimendi",
    image: placeholderimg,
    designation: "Business Development",
    linkedIn: "",
    email: "",
  },
  {
    id: "7",
    name: "Kishan Lashkari",
    image: placeholderimg,
    designation: "Information Technology",
    linkedIn: "",
    email: "",
  },
  {
    id: "8",
    name: "Asmita Sojitra",
    image: placeholderimg,
    designation: "Business Analysis",
    linkedIn: "",
    email: "",
  },
  {
    id: "9",
    name: "Mrudul Shah",
    image: placeholderimg,
    designation: "Project Management",
    linkedIn: "",
    email: "",
  },
  {
    id: "10",
    name: "Marcus von Thiele",
    image: placeholderimg,
    designation: "Brokerage",
    linkedIn: "",
    email: "",
  },
  {
    id: "11",
    name: "Julian Bhatia",
    image: placeholderimg,
    designation: "Sales",
    linkedIn: "",
    email: "",
  },
  {
    id: "12",
    name: "Guillermo Guerrero",
    image: placeholderimg,
    designation: "Research",
    linkedIn: "",
    email: "",
  },
];

export const infoSectionContentES: infoSectionContent[] = [
  {
    id: "1",
    title: "CANDIDATES",
    isImage: false,
    paragraphs: [
      "We offer people around the world a supportive, challenging and diverse working environment. We value your passion and commitment, and reward your performance.",
      "Succeeding at EMFI means respecting, understanding and trusting colleagues and clients. Challenging others and being challenged in return. Being passionate about what you do. Driving yourself forward, always wanting to do things the right way.",
      "Does that sound like you? Discover our many career opportunities by clicking here..",
    ],
    image: candidate,
  },
  {
    id: "2",
    isImage: false,
    title: "OUR VALUES",
    paragraphs: [
      "We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We encourage each other to speak up and report potential violations without fear of reprisals. EMFI will never punish or reprimand anyone who reports breaches or violations in good faith.",
    ],
    image: ourvalue,
  },
];
export const PrivacyPolicyEN = {
  firstParagraph:
    '11EMFI appreciates your visit to this web site ("EMFI Website") and your interest in our services and products. Your privacy is important to us and we want you to feel comfortable visiting our site. We take care to protect your personal data collected, processed and used during visits to the EMFI Website.',
  secondParagraph:
    "How we protect or use your data varies from country to country. Privacy Notices can be found for certain jurisdictions where EMFI entities process personal data. The terms of this Policy will be subject to the relevant jurisdiction-specific Privacy Notice where applicable. Please click on the jurisdiction that applies to you from the list at https://www.emfi.uk/english/privacy-policy",
  heading:
    'By accessing the EMFI Website you accept this Privacy Policy ("Policy").',
  subHeading:
    "If you do not agree to this Policy, do not proceed to further web pages of the EMFI Website.",
  policy: [
    {
      id: "1",
      policy: "1.What are the purpose and the scope of this Policy?",
    },
  ],
};

export const AboutEmfiContentEN: AboutEmfiContent[] = [
  {
    id: "1",
    title: "Why",
    isImage: true,
    paragraph: [
      "EMFI came into being in response to a market that is highly fragmented with divergent needs of onshore and offshore investors going unaddressed.",
      "Traditional banks and financial companies are heavily focused on certain segments and products or services that fit into their top down business structures.",
      " EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions  EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions to address those needs.to address those needs.",
    ],
    image: "/whyEMFI.svg",
  },
  {
    id: "2",
    isImage: false,
    title: "Onshore Investors",
    paragraph: [
      " We deliver up-to-date market colour from major financial centers of the world to local investors who might operate in a very different context.",
      " We provide our expertise and analysis to less sophisticated onshore clients who might be ignored by traditional players due to their size.",
      " Through our business partners, we provide direct market access to a 100 markets in 25 developed and emerging countries.",
    ],
    image: onShoreInvestor,
  },
  {
    id: "3",
    isImage: false,
    title: "Offshore Investors",
    paragraph: [
      "We actively service high beta Latin American sovereign and quasi-sovereign market where traditional coverage is lacking at best.",
      "We are able to deliver superior local intelligence in a timely manner due to the depth and breadth of our onshore relationships.",
      "We are better positioned to match local flows with external investors, as well as EM dedicated flows with crossover and high yield clients.",
    ],
    image: offShoreInvestor,
  },
];

export const OurClientsContentEN: OurClientsContent[] = [
  {
    id: "1",
    image: "/pensionfunds.svg",
    title: "Pension Funds",
  },
  {
    id: "2",
    image: "/hegdefunds.svg",
    title: "Hedge Funds",
  },
  {
    id: "3",
    image: "/mutualfunds.svg",
    title: "Mutual Funds",
  },
  {
    id: "4",
    image: "/corporatetreasuries.svg",
    title: "Corporate Treasuries",
  },
  {
    id: "5",
    image: "/fintech.svg",
    title: "Fintech",
  },
  {
    id: "6",
    image: "/banks.svg",
    title: "Banks",
  },
  {
    id: "7",
    image: "/brokers.svg",
    title: "Brokers",
  },
  {
    id: "8",
    image: "/insurancecompanies.svg",
    title: "Insurance Companies",
  },
];

export const OurValuesContentEN: OurValuesContent[] = [
  {
    id: "1",
    image: "/customersuitability.svg",
    content:
      "We cherish our clients and take a long term view in managing our relationships. We make sure our products and services are adequate for our clients and are sold in a way that is not detrimental to their interests.",
    title: "Customer Suitability",
  },
  {
    id: "2",
    image: "/conflictsofinterest.svg",
    content:
      "We put our clients' best interests before our own and strive to identify and manage potential conflicts of interest. We never let our interests influence our advice to a client, or our dealings with them.",
    title: "Conflicts of Interest",
  },
  {
    id: "3",
    image: "/clientconfidentiality.svg",
    content:
      "We never share our clients' details with anyone, unless we have their express permission to do so, or where we have a legal duty to share it with the relevant authorities.",
    title: "Client Confidentiality",
  },
  {
    id: "4",
    image: "/customercomplaints.svg",
    content:
      "We take any and all customer complaints very seriously. We appreciate regular feedback from our clients and strive to make it right if we fail to get it right the first time around.",
    title: "Customer Complaints",
  },
];

export const OurTeamContentEN: OurTeamContent[] = [
  {
    id: "1",
    name: "Usman Sheikh",
    image: placeholderimg,
    designation: "Chief Executive",
    linkedIn: "",
    email: "",
  },
  {
    id: "2",
    name: "Liam Flanigan",
    image: placeholderimg,
    designation: "Compliance",
    linkedIn: "",
    email: "",
  },
  {
    id: "3",
    name: "Geronimo Mansutti, CFA",
    image: placeholderimg,
    designation: "Strategy",
    linkedIn: "",
    email: "",
  },
  {
    id: "4",
    name: "Atif Rashid",
    image: placeholderimg,
    designation: "Accounting",
    linkedIn: "",
    email: "",
  },
  {
    id: "5",
    name: "Gustavo Rodrígues",
    image: placeholderimg,
    designation: "Compliance",
    linkedIn: "",
    email: "",
  },
  {
    id: "6",
    name: "Jon Zurimendi",
    image: placeholderimg,
    designation: "Business Development",
    linkedIn: "",
    email: "",
  },
  {
    id: "7",
    name: "Kishan Lashkari",
    image: placeholderimg,
    designation: "Information Technology",
    linkedIn: "",
    email: "",
  },
  {
    id: "8",
    name: "Asmita Sojitra",
    image: placeholderimg,
    designation: "Business Analysis",
    linkedIn: "",
    email: "",
  },
  {
    id: "9",
    name: "Mrudul Shah",
    image: placeholderimg,
    designation: "Project Management",
    linkedIn: "",
    email: "",
  },
  {
    id: "10",
    name: "Marcus von Thiele",
    image: placeholderimg,
    designation: "Brokerage",
    linkedIn: "",
    email: "",
  },
  {
    id: "11",
    name: "Julian Bhatia",
    image: placeholderimg,
    designation: "Sales",
    linkedIn: "",
    email: "",
  },
  {
    id: "12",
    name: "Guillermo Guerrero",
    image: placeholderimg,
    designation: "Research",
    linkedIn: "",
    email: "",
  },
];

export const infoSectionContentEN: infoSectionContent[] = [
  {
    id: "1",
    title: "CANDIDATES",
    isImage: false,
    paragraphs: [
      "We offer people around the world a supportive, challenging and diverse working environment. We value your passion and commitment, and reward your performance.",
      "Succeeding at EMFI means respecting, understanding and trusting colleagues and clients. Challenging others and being challenged in return. Being passionate about what you do. Driving yourself forward, always wanting to do things the right way.",
      "Does that sound like you? Discover our many career opportunities by clicking here..",
    ],
    image: candidate,
  },
  {
    id: "2",
    isImage: false,
    title: "OUR VALUES",
    paragraphs: [
      "We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We encourage each other to speak up and report potential violations without fear of reprisals. EMFI will never punish or reprimand anyone who reports breaches or violations in good faith.",
    ],
    image: ourvalue,
  },
];

export const AsSeenContentES: AsSeenContent[] = [
  {
    id: "1",
    hoverImage: "/bloombergcolor.svg",
    image: "/bloomberggrey.svg",
    alt: "",
  },
  {
    id: "2",
    hoverImage: "/reuterscolor.svg",
    image: "/reuterscolor.svg",
    alt: "",
  },
  {
    id: "3",
    image: "/chanthamhousegrey.svg",
    hoverImage: "/chanthamhousecolor.svg",
    alt: "",
  },
  {
    id: "4",
    image: "/voagrey.svg",
    hoverImage: "/voacolor.svg",
    alt: "",
  },
  {
    id: "5",
    image: "/aljazeeragrey.svg",
    hoverImage: "/aljazeeracolor.svg",
    alt: "",
  },
  {
    id: "6",
    image: "/france24grey.svg",
    hoverImage: "/france24color.svg",
    alt: "",
  },
];

export const AsSeenContextText: string =
  "*And other news media outlets. All logos and trademarks are property of their respective owners and used here for identification purposes only. Use of these logos and trademarks does not imply endorsement by the logo and trademark owners in any way. Please visit respective websites for further information.";

export const aboutHero = [
  {
    id: "1",
    image: "",
    data: `<p>WE ARE <br> <span>EM</span>ERGING <br><span>FI</span>NANCE<p/>`,
  },
  {
    id: "1",
    image: "",
    data: `<p>WE ARE ON A MISSION </p>`,
  },
  {
    id: "1",
    image: "",
    data: `<p>WE ARE <span>EM</span>ERGING <span>FI</span>NANCE<p/>`,
  },
  {
    id: "1",
    image: "",
    data: `<p>WE ARE <span>EM</span>ERGING <span>FI</span>NANCE<p/>`,
  },
];

export const eBondContent = [
  {
    id: "1",
    image: "",
    data: `POWERED BY`,
  },
  {
    id: "2",
    image: "",
    data: `
    WE ARE ON A MISSION
    TO RESPONSIBLY DEMOCRATIZE
    ACCESS TO FINANCIAL MARKETS
    VIA EMERGING TECHNOLOGIES`,
  },
  {
    id: "3",
    image: "",
    data: `ACCESS AGGREGATED LIQUIDITY
    FROM MAJOR TRADING VENUES
    AS WELL AS BOND EXCHANGES
    AROUND THE WORLD 24/5`,
  },
  {
    id: "4",
    image: "",
    data: `
    BUILT BY TRADERS, FOR TRADERS!
    NO MARK-UPS OR MARK-DOWNS
    ABILITY TO HIT OR LIFT LIVE PRICES
    OR SEND REQUEST FOR QUOTE`,
  },
];

export const eFundContent = [{}];

export const eWealth = [{}];

export const eIntelContent = [{}];
