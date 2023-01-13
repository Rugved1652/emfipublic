import SalesNTrading from "../Assets/SalesTrading.svg";
import WealthManagement from "../Assets/WealthManagement.svg";
import AssetManagement from "../Assets/AssetManagement.svg";
import FintechAsAService from "../Assets/FintechAsAService.svg";
import ebonds from "../Assets/ebondsblue.svg";
import ewealth from "../Assets/ewealthblue.svg";
import efund from "../Assets/efundsblue.svg";
import eintel from "../Assets/eintelblue.svg";
import ourservices from "../Assets/SalesNTrading/ourservice.svg";
import ourapproch from "../Assets/SalesNTrading/ouraproach.svg";
import ourclients from "../Assets/SalesNTrading/ourclients.svg";

type ServicesContent = {
  id: string;
  image: string;
  heading: string;
  subheading: string;
  en_link: string;
  es_link: string;
};

type ProductContent = {
  id: string;
  image: string;
  subheading: string;
  en_link: string;
  es_link: string;
};

type SalesNTradingContent = {
  title: string;
  img: string;
  paragraph: string[];
};

export const ServicesContent: ServicesContent[] = [
  {
    id: "01",
    image: SalesNTrading,
    heading: "Sales & Trading",
    subheading: "EMFI Securities Limited 2",
    es_link: "/espanol/services/ourservices/salesntrading",
    en_link: "/english/services/ourservices/salesntrading",
  },
  {
    id: "02",
    image: WealthManagement,
    heading: "Wealth Management",
    subheading: "EMFI Securities Limited 3",
    es_link: "/espanol/services/ourservices/wealthmanagement",
    en_link: "/english/services/ourservices/wealthmanagement",
  },
  {
    id: "03",
    image: AssetManagement,
    heading: "Asset Management",
    subheading: "EMFI Securities Limited 4",
    es_link: "/espanol/services/ourservices/assetmanagement",
    en_link: "/english/services/ourservices/assetmanagement",
  },
  {
    id: "04",
    image: FintechAsAService,
    heading: "Fintech As-A-Service",
    subheading: "EMFI Securities Limited 5",
    es_link: "/espanol/services/ourservices/fintechasaservice",
    en_link: "/english/services/ourservices/fintechasaservice",
  },
];

export const ProductContent: ProductContent[] = [
  {
    id: "01",
    image: ebonds,
    subheading: "EMFI Securities Limited 2",
    es_link: "/espanol/services/ourproducts/ebonds",
    en_link: "/english/services/ourproducts/ebonds",
  },
  {
    id: "02",
    image: ewealth,
    subheading: "EMFI Securities Limited 3",
    es_link: "/espanol/services/ourproducts/ewealth",
    en_link: "/english/services/ourproducts/ewealth",
  },
  {
    id: "03",
    image: efund,
    subheading: "EMFI Securities Limited 4",
    es_link: "/espanol/services/ourproducts/efund",
    en_link: "/english/services/ourproducts/efund",
  },
  {
    id: "04",
    image: eintel,
    subheading: "EMFI Securities Limited 5",
    es_link: "/espanol/services/ourproducts/eintel",
    en_link: "/english/services/ourproducts/eintel",
  },
];

export const DetailsList: string[] = [
  "1. Registered in England and Wales (United Kingdom). Company number 11391808.",
  "2. Authorised and regulated by the Financial Conduct Authority. Reference number 763979",
  "3. Authorised And Regulated By The Financial Conduct Authority. Reference Number 822389.",
  "4. Authorised By The Cayman Islands Monetary Authority. Licenced Mutual Fund Number 1664891.",
  "5. Registered In England And Wales (United Kingdom). Company Number 11380416.",
];

export const SalesNTradingContent: SalesNTradingContent[] = [
  {
    title: "Our Services",
    img: ourservices,
    paragraph: [
      "EMFI Securities provides corporate, institutional, and wealth management clients with expert advice, innovative financial solutions, outstanding execution and comprehensive access to the world's capital markets.",
      "EMFI Securities is an active participant in capital markets flow activities, including sales, trading and market-making across a range of securities.",
      "From cash equities to credit, we give our clients access to the products and liquidity they need. Not only do we help our clients to spot market trends, we also help our clients to act on them.",
      "We offer bespoke solutions for public and private clients. Whether for portfolio building, hedging, yield enhancement, or disposal, we help our clients to manage their Assets worldwide.",
    ],
  },
  {
    title: "Our Aproach",
    img: ourapproch,
    paragraph: [
      "From distribution to managing risk and providing liquidity, we help clients realize their financial goals.",
      "We don't just offer our clients a wide range of sales, trading, execution and clearing services; we try to make such services simple, intuitive and flexible for our clients to use.",
      "We give our clients access to industry-leading technology and electronic platforms with the speed and flexibility to succeed in today's markets.",
      "Whatever our client's investment and trading strategies, we help them to engage effectively with the markets that matter most to them.",
    ],
  },
  {
    title: "Our Clients",
    img: ourclients,
    paragraph: [
      "EMFI Securities provides corporate, institutional, and wealth management clients with expert advice, innovative financial solutions, outstanding execution and comprehensive access to the world's capital markets.",
      "EMFI Securities is an active participant in capital markets flow activities, including sales, trading and market-making across a range of securities.",
      "From cash equities to credit, we give our clients access to the products and liquidity they need. Not only do we help our clients to spot market trends, we also help our clients to act on them.",
      "We offer bespoke solutions for public and private clients. Whether for portfolio building, hedging, yield enhancement, or disposal, we help our clients to manage their Assets worldwide.",
    ],
  },
];
