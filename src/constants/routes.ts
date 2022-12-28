import AppStoreIcon from "../Components/Icons/AppStoreIcon";
import BloomBergIcon from "../Components/Icons/BloomBergIcon";
import EBondIcon from "../Components/Icons/EBondIcon";
import EFundIcon from "../Components/Icons/EFundIcon";
import EIntelIcon from "../Components/Icons/EIntelIcon";
import EWealthIcon from "../Components/Icons/EWealthIcon";
import FacebookIcon from "../Components/Icons/FacebookIcon";
import LinkedInIcon from "../Components/Icons/LinkedInIcon";
import PlayStoreIcon from "../Components/Icons/PlayStoreIcon";
import TwitterIcon from "../Components/Icons/TwitterIcon";

type NavbarRoutes = {
  key: string;
  en_label: string;
  es_label: string;
  path: string;
  es_path: string;
};

export const NavbarRoutes: NavbarRoutes[] = [
  {
    key: "home",
    en_label: "Home",
    es_label: "Inicio",
    path: "/english",
    es_path: "/",
  },
  {
    key: "pricing",
    en_label: "Pricing",
    es_label: "Precios",
    path: "/english/pricing",
    es_path: "/",
  },
  {
    key: "intelligence",
    en_label: "Intelligence",
    es_label: "Inteligencia",
    path: "/english/intelligence",
    es_path: "/",
  },
  {
    key: "Services",
    en_label: "Services",
    es_label: "Servicios",
    path: "/english/services",
    es_path: "/",
  },
  {
    key: "about",
    en_label: "About",
    es_label: "Acerca De Nosotros",
    path: "/english/about",
    es_path: "/",
  },
  {
    key: "contact",
    en_label: "Contact",
    es_label: "Contacto",
    path: "/english/contact",
    es_path: "/",
  },
];

export const FooterRoutes = {
  Products: {
    label: "Products",
    Routes: [
      {
        id: "ebonds",
        icon: EBondIcon,
        Link: "/english/services/product/bonds",
        es_Link: "/",
      },
      {
        id: "ewealth",
        icon: EWealthIcon,
        Link: "/english/services/product/wealth",
        es_Link: "/",
      },
      {
        id: "efunds",
        icon: EFundIcon,
        Link: "/english/services/product/funds",
        es_Link: "/",
      },
      {
        id: "eintel",
        icon: EIntelIcon,
        Link: "/english/services/product/intel",
        es_Link: "/",
      },
    ],
  },
  Services: {
    label: "Services",
    Routes: [
      {
        id: "sales&trading",
        Link: "english/services/ourservices/salesntrading",
        es_Link: "/",
        lable: "Sales & Trading",
      },
      {
        id: "wealthmanagement",
        Link: "english/services/ourservices/salesntrading",
        es_Link: "/",
        lable: "Wealth Management",
      },
      {
        id: "assetmanagement",
        Link: "english/services/ourservices/salesntrading",
        es_Link: "/",
        lable: "Asset Management",
      },
      {
        id: "fintechasaservices",
        Link: "english/services/ourservices/salesntrading",
        es_Link: "/",
        lable: "Fintech as-a Services",
      },
    ],
  },
  Regulatory: {
    label: "Regulatory",
    Routes: [
      {
        id: "policydocuments",
        Link: "/english/privacypolicy",
        es_Link: "/",
        lable: "Policy Documents",
      },
      {
        id: "standardisedcosts",
        Link: "/english/standardisedcosts",
        es_Link: "/",
        lable: "Standardised Costs",
      },
      {
        id: "pillar3disclosure",
        Link: "/pillar3disclosure",
        es_Link: "/",
        lable: "Pillar 3 Disclousure",
      },
    ],
  },
  Legal: {
    label: "Legal",
    Routes: [
      {
        id: "termsofuse",
        label: "Terms Of Use",
        Link: "/english/termsofuse",
        es_Link: "/",
      },
      {
        id: "privacypolicy",
        label: "Privacy Policy",
        Link: "/english/privacypolicy",
        es_Link: "/",
      },
      {
        id: "cookiespolicy",
        label: "Cookies Policy",
        Link: "/english/cookiespolicy",
        es_Link: "/",
      },
      {
        id: "scamalert",
        label: "Scam Alert",
        Link: "/english/scamalert",
        es_Link: "/",
      },
    ],
  },
  Social: {
    Routes: [
      { id: "twitter", icon: TwitterIcon, Link: "/bonds", es_Link: "/" },
      { id: "linkedIn", icon: LinkedInIcon, Link: "/wealth", es_Link: "/" },
      { id: "facebook", icon: FacebookIcon, Link: "/funds", es_Link: "/" },
      { id: "bloomberg", icon: BloomBergIcon, Link: "/intel", es_Link: "/" },
      { id: "appstore", icon: AppStoreIcon, Link: "/intel", es_Link: "/" },
      {
        id: "playstorestore",
        icon: PlayStoreIcon,
        Link: "/intel",
        es_Link: "/",
      },
    ],
    footerText:
      "© 2022 EMFI Group Limited. All Rights Reserved. 25-26 Dering St, Mayfair, London W1S 1AW, United Kingdom. Intended For Professional Clients Only. Not Suitable For Retail Clients. Not Intended For Nor A Solicitation Of Any Offer Of Service To US Persons.",
  },
};
