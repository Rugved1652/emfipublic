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
  sup: string;
  link: string;
};

type ProductContent = {
  id: string;
  image: string;
  subheading: string;
  link: string;
};

type SalesNTradingContent = {
  title: string;
  img: string;
  paragraph: string[];
};

export const ServicesContentES: ServicesContent[] = [
  {
    id: "01",
    image: SalesNTrading,
    heading: "Sales y Trading ",
    subheading: "EMFI Securities Limited 2",
    sup: "2",
    link: "/espanol/services/ourservices/securities",
  },
  {
    id: "02",
    image: WealthManagement,
    heading: "Gestión de patrimonios",
    subheading: "EMFI Capital Limited 3",
    sup: "3",
    link: "/espanol/services/ourservices/wealth",
  },
  {
    id: "03",
    image: AssetManagement,
    heading: "Gestión de Activos",
    subheading: "EMFI Fund SPC 4",
    sup: "4",
    link: "/espanol/services/ourservices/capital",
  },
  {
    id: "04",
    image: FintechAsAService,
    heading: "Fintech como-Servicio",
    subheading: "EMFI Analytics Limited 5",
    sup: "5",
    link: "/espanol/services/ourservices/fintech",
  },
];
export const ServicesContentEN: ServicesContent[] = [
  {
    id: "01",
    image: SalesNTrading,
    heading: "Sales & Trading",
    subheading: "EMFI Securities Limited 2",
    sup: "2",
    link: "/english/services/ourservices/securities",
  },
  {
    id: "02",
    image: WealthManagement,
    heading: "Wealth Management",
    subheading: "EMFI Capital Limited 3",
    sup: "3",
    link: "/english/services/ourservices/wealth",
  },
  {
    id: "03",
    image: AssetManagement,
    heading: "Asset Management",
    subheading: "EMFI Fund SPC 4",
    sup: "4",
    link: "/english/services/ourservices/capital",
  },
  {
    id: "04",
    image: FintechAsAService,
    heading: "Fintech As-A-Service",
    subheading: "EMFI Analytics Limited 5",
    sup: "5",
    link: "/english/services/ourservices/fintech",
  },
];

export const servicepageEN = {
  heading: "EMFI Group",
  subHeading: "United Kingdom",
  placeholderText: "Services",
  serviceList: [
    { label: "EMFI Securities Limited 2", value: 1 },
    { label: "EMFI Capital Limited 3", value: 2 },
    { label: "EMFI Fund SPC 4", value: 3 },
    { label: "EMFI Analytics Limited 5", value: 4 },
  ],
};

export const servicepageES = {
  heading: "Grupo EMFI",
  subHeading: "Reino Unido",
  placeholderText: "Servicios",
  serviceList: [
    { label: "EMFI Securities Limited 2", value: 1 },
    { label: "EMFI Capital Limited 3", value: 2 },
    { label: "EMFI Fund SPC 4", value: 3 },
    { label: "EMFI Analytics Limited 5", value: 4 },
  ],
};

export const ProductContentES: ProductContent[] = [
  {
    id: "01",
    image: ebonds,
    subheading: "EMFI Securities Limited 2",
    link: "/espanol/services/ourproducts/ebonds",
  },
  {
    id: "02",
    image: ewealth,
    subheading: "EMFI Securities Limited 3",
    link: "/espanol/services/ourproducts/ewealth",
  },
  {
    id: "03",
    image: efund,
    subheading: "EMFI Securities Limited 4",
    link: "/espanol/services/ourproducts/efund",
  },
  {
    id: "04",
    image: eintel,
    subheading: "EMFI Securities Limited 5",
    link: "/espanol/services/ourproducts/eintel",
  },
];
export const ProductContentEN: ProductContent[] = [
  {
    id: "01",
    image: ebonds,
    subheading: "EMFI Securities Limited 2",
    link: "/english/services/ourproducts/ebonds",
  },
  {
    id: "02",
    image: ewealth,
    subheading: "EMFI Securities Limited 3",
    link: "/english/services/ourproducts/ewealth",
  },
  {
    id: "03",
    image: efund,
    subheading: "EMFI Securities Limited 4",
    link: "/english/services/ourproducts/efund",
  },
  {
    id: "04",
    image: eintel,
    subheading: "EMFI Securities Limited 5",
    link: "/english/services/ourproducts/eintel",
  },
];

export const DetailsListEN: any[] = [
  "1. Registered in England and Wales (United Kingdom). Company number 11391808.",
  "2. Authorised and regulated by the Financial Conduct Authority. Reference number 763979",
  "3. Authorised And Regulated By The Financial Conduct Authority. Reference Number 822389.",
  "4. Authorised By The Cayman Islands Monetary Authority. Licenced Mutual Fund Number 1664891.",
  "5. Registered In England And Wales (United Kingdom). Company Number 11380416.",
];
export const DetailsListES: any[] = [
  "1. Registrado en Inglaterra y Gales (Reino Unido). Número de empresa 11391808.",
  "2. Autorizado y regulado por la Financial Conduct Authority. Número de referencia 763979.",
  "3. Autorizado y regulado por la Financial Conduct Authority. Número de referencia 822389.",
  "4. Autorizado por la Cayman Islands Monetary Authority. Fondo de inversión con licencia número 1664891.",
  "5. Registrado en Inglaterra y Gales (Reino Unido). Número de empresa 11380416.",
];

export const securitiesContent: SalesNTradingContent[] = [
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
export const wealthContent: SalesNTradingContent[] = [
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
export const fintechContent: SalesNTradingContent[] = [
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
export const capitalContent: SalesNTradingContent[] = [
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
