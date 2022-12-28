import PensionFund from "../Assets/Aboutus/OurClientIcon/pensionfunds.svg";
import HedgeFund from "../Assets/Aboutus/OurClientIcon/hegdefunds.svg";
import MutualFunds from "../Assets/Aboutus/OurClientIcon/mutualfunds.svg";
import CorporateTreasuries from "../Assets/Aboutus/OurClientIcon/corporatetreasuries.svg";
import Fintech from "../Assets/Aboutus/OurClientIcon/fintech.svg";
import Banks from "../Assets/Aboutus/OurClientIcon/banks.svg";
import Brokers from "../Assets/Aboutus/OurClientIcon/brokers.svg";
import InsuranceCompanies from "../Assets/Aboutus/OurClientIcon/insurancecompanies.svg";
import customersuitability from "../Assets/Aboutus/OurValuesIcons/customersuitability.svg";
import clientconfidentiality from "../Assets/Aboutus/OurValuesIcons/clientconfidentiality.svg";
import customercomplaints from "../Assets/Aboutus/OurValuesIcons/customercomplaints.svg";
import conflictsofinterest from "../Assets/Aboutus/OurValuesIcons/conflictsofinterest.svg";
import placeholderimg from "../Assets/Aboutus/OurTeamVectorIcons/ourteamplaceholder.svg";
import candidate from "../Assets/Aboutus/OurTeamVectorIcons/candidates.svg";
import ourvalue from "../Assets/Aboutus/OurTeamVectorIcons/ourvalues.svg";
import { FunctionComponent } from "react";
import BloomBergBrandIcon from "../Components/Icons/BloomBergBrandIcon";
import ReutersIcon from "../Components/Icons/ReutersIcon";
import ChanthamIcon from "../Components/Icons/ChanthamIcon";
import VOAIcon from "../Components/Icons/VOAIcon";
import AljazeeraIcon from "../Components/Icons/AljazeeraIcon";
import France24Icon from "../Components/Icons/France24Icon";
import whyEMFI from "../Assets/Aboutus/WhyEMFIIcons/whyemfi.svg";
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
  isImage:boolean
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
  isImage:boolean;
  title: string;
  paragraphs: string[];
};

export const PrivacyPolicy = {
  firstParagraph:
    'EMFI appreciates your visit to this web site ("EMFI Website") and your interest in our services and products. Your privacy is important to us and we want you to feel comfortable visiting our site. We take care to protect your personal data collected, processed and used during visits to the EMFI Website.',
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

export const AboutEmfiContent: AboutEmfiContent[] = [
  {
    id: "1",
    title: "Why",
    isImage: true ,
    paragraph: [
      "EMFI came into being in response to a market that is highly fragmented with divergent needs of onshore and offshore investors going unaddressed.",
      "Traditional banks and financial companies are heavily focused on certain segments and products or services that fit into their top down business structures.",
      " EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions  EMFI aims to bridge those gaps by taking a bottom up approach to identify fragments and provide customized and tailored solutions to address those needs.to address those needs.",
    ],
    image: whyEMFI,
  },
  {
    id: "2",
    isImage: false ,
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
    isImage: false ,
    title: "Offshore Investors",
    paragraph: [
      "We actively service high beta Latin American sovereign and quasi-sovereign market where traditional coverage is lacking at best.",
      "We are able to deliver superior local intelligence in a timely manner due to the depth and breadth of our onshore relationships.",
      "We are better positioned to match local flows with external investors, as well as EM dedicated flows with crossover and high yield clients.",
    ],
    image: offShoreInvestor,
  },
];

export const OurClientsContent: OurClientsContent[] = [
  {
    id: "1",
    image: PensionFund,
    title: "Pension Funds",
  },
  {
    id: "2",
    image: HedgeFund,
    title: "Hedge Funds",
  },
  {
    id: "3",
    image: MutualFunds,
    title: "Mutual Funds",
  },
  {
    id: "4",
    image: CorporateTreasuries,
    title: "Corporate Treasuries",
  },
  {
    id: "5",
    image: Fintech,
    title: "Fintech",
  },
  {
    id: "6",
    image: Banks,
    title: "Banks",
  },
  {
    id: "7",
    image: Brokers,
    title: "Brokers",
  },
  {
    id: "8",
    image: InsuranceCompanies,
    title: "Insurance Companies",
  },
];

export const OurValuesContent: OurValuesContent[] = [
  {
    id: "1",
    image: customersuitability,
    content:
      "We cherish our clients and take a long term view in managing our relationships. We make sure our products and services are adequate for our clients and are sold in a way that is not detrimental to their interests.",
    title: "Customer Suitability",
  },
  {
    id: "2",
    image: conflictsofinterest,
    content:
      "We put our clients' best interests before our own and strive to identify and manage potential conflicts of interest. We never let our interests influence our advice to a client, or our dealings with them.",
    title: "Conflicts of Interest",
  },
  {
    id: "3",
    image: clientconfidentiality,
    content:
      "We never share our clients' details with anyone, unless we have their express permission to do so, or where we have a legal duty to share it with the relevant authorities.",
    title: "Client Confidentiality",
  },
  {
    id: "4",
    image: customercomplaints,
    content:
      "We take any and all customer complaints very seriously. We appreciate regular feedback from our clients and strive to make it right if we fail to get it right the first time around.",
    title: "Customer Complaints",
  },
];

export const OurTeamContent: OurTeamContent[] = [
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

export const infoSectionContent: infoSectionContent[] = [
  {
    id: "1",
    title: "CANDIDATES",
    isImage: false ,
    paragraphs: [
      "We offer people around the world a supportive, challenging and diverse working environment. We value your passion and commitment, and reward your performance.",
      "Succeeding at EMFI means respecting, understanding and trusting colleagues and clients. Challenging others and being challenged in return. Being passionate about what you do. Driving yourself forward, always wanting to do things the right way.",
      "Does that sound like you? Discover our many career opportunities by clicking here..",
    ],
    image: candidate,
  },
  {
    id: "2",
    isImage: false ,
    title: "OUR VALUES",
    paragraphs: [
      "We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We keep our workplaces safe by following health and safety rules. Doing this makes sure we have safe and healthy working conditions in which our dignity is respected.",
      " We encourage each other to speak up and report potential violations without fear of reprisals. EMFI will never punish or reprimand anyone who reports breaches or violations in good faith.",
    ],
    image: ourvalue,
  },
];

type AsSeenContent = {
  id: string;
  image: FunctionComponent;
  alt: string;
};

export const AsSeenContent: AsSeenContent[] = [
  {
    id: "1",
    image: BloomBergBrandIcon,
    alt: "",
  },
  {
    id: "2",
    image: ReutersIcon,
    alt: "",
  },
  {
    id: "3",
    image: ChanthamIcon,
    alt: "",
  },
  {
    id: "4",
    image: VOAIcon,
    alt: "",
  },
  {
    id: "5",
    image: AljazeeraIcon,
    alt: "",
  },
  {
    id: "6",
    image: France24Icon,
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
