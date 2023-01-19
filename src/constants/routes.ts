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
    es_path: "/espanol",
  },
  {
    key: "pricing",
    en_label: "Pricing",
    es_label: "Precios",
    path: "/english/pricing",
    es_path: "/espanol/pricing",
  },
  {
    key: "intelligence",
    en_label: "Intelligence",
    es_label: "Inteligencia",
    path: "/english/intelligence",
    es_path: "/espanol/intelligence",
  },
  {
    key: "Services",
    en_label: "Services",
    es_label: "Servicios",
    path: "/english/services",
    es_path: "/espanol/services",
  },
  {
    key: "about",
    en_label: "About",
    es_label: "Acerca De Nosotros",
    path: "/english/about",
    es_path: "/espanol/about",
  },
  {
    key: "contact",
    en_label: "Contact",
    es_label: "Contacto",
    path: "/english/contact",
    es_path: "/espanol/contact",
  },
];

export const FooterRoutes = {
  Products: {
    en_label: "Products",
    es_label: "Products",
    Routes: [
      {
        id: "ebonds",
        icon: EBondIcon,
        en_Link: "/english/services/product/bonds",
        es_Link: "/espanol/services/product/bonds",
      },
      {
        id: "ewealth",
        icon: EWealthIcon,
        en_Link: "/english/services/product/wealth",
        es_Link: "/espanol/services/product/wealth",
      },
      {
        id: "efunds",
        icon: EFundIcon,
        en_Link: "/english/services/product/funds",
        es_Link: "/espanol/services/product/funds",
      },
      {
        id: "eintel",
        icon: EIntelIcon,
        en_Link: "/english/services/product/intel",
        es_Link: "/espanol/services/product/intel",
      },
    ],
  },

  Services: {
    en_label: "Services",
    es_label: "Servicios",
    Routes: [
      {
        id: "sales&trading",
        en_Link: "/english/services/ourservices/salesntrading",
        es_Link: "/espanol/services/ourservices/salesntrading",
        en_label: "Sales & Trading",
        es_label: "Sales y Trading",
      },
      {
        id: "wealthmanagement",
        en_Link: "/english/services/ourservices/salesntrading",
        es_Link: "/espanol/services/ourservices/salesntrading",
        en_label: "Wealth Management",
        es_label: "Gestión de patrimonios",
      },
      {
        id: "assetmanagement",
        en_Link: "/english/services/ourservices/salesntrading",
        es_Link: "/espanol/services/ourservices/salesntrading",
        en_label: "Asset Management",
        es_label: "Gestión de Activos",
      },
      {
        id: "fintechasaservices",
        en_Link: "/english/services/ourservices/salesntrading",
        es_Link: "/espanol/services/ourservices/salesntrading",
        en_label: "Fintech as-a Services",
        es_label: "Fintech como-Servicio",
      },
    ],
  },
  Regulatory: {
    es_label: "Regulador",
    en_label: "Regulatory",
    Routes: [
      {
        id: "policydocuments",
        en_Link: "/english/privacypolicy",
        es_Link: "/",
        en_label: "Policy Documents",
        es_label: "Documentos De Póliza",
      },
      {
        id: "standardisedcosts",
        en_Link: "/english/standardisedcosts",
        es_Link: "/english/standardisedcosts",
        en_label: "Standardised Costs",
        es_label: "Costos Estandarizados",
      },
      {
        id: "pillar3disclosure",
        en_Link: "/",
        es_Link: "/",
        en_label: "Pillar 3 Disclousure",
        es_label: "Pillar 3 Disclosure",
      },
    ],
  },

  //   Legal
  // Términos De Uso
  // Política De Privacidad
  // Política De Cookies
  // Alerta De Estafas
  Legal: {
    en_label: "Legal",
    es_label: "Legal",
    Routes: [
      {
        id: "termsofuse",
        en_label: "Terms Of Use",
        es_label: "Términos De Uso",
        en_Link: "/english/termsofuse",
        es_Link: "/espanol/termsofuse",
      },
      {
        id: "privacypolicy",
        en_label: "Privacy Policy",
        es_label: "Política De Privacidad",
        en_Link: "/english/privacypolicy",
        es_Link: "/espanol/privacypolicy",
      },
      {
        id: "cookiespolicy",
        en_label: "Cookies Policy",
        es_label: "Política De Cookies",
        en_Link: "/english/cookiespolicy",
        es_Link: "/espanol/cookiespolicy",
      },
      {
        id: "scamalert",
        en_label: "Scam Alert",
        es_label: "Alerta De Estafas",
        en_Link: "/english/scamalert",
        es_Link: "/espanol/scamalert",
      },
    ],
  },
  Social: {
    Routes: [
      {
        id: "twitter",
        icon: TwitterIcon,
        Link: "https://twitter.com/EmfiSecurities",
      },
      {
        id: "linkedIn",
        icon: LinkedInIcon,
        Link: "https://www.linkedin.com/company/emfisecurities",
      },
      {
        id: "facebook",
        icon: FacebookIcon,
        Link: "https://www.facebook.com/EMFISecurities/",
      },
      { id: "bloomberg", icon: BloomBergIcon, Link: "bbg://screens/EMFI" },
      {
        id: "appstore",
        icon: AppStoreIcon,
        Link: "https://apps.apple.com/us/app/e-wealth/id1572648317",
      },
      {
        id: "playstorestore",
        icon: PlayStoreIcon,
        Link: "https://play.google.com/store/apps/details?id=com.emfi.emfi",
      },
    ],
    footerTextEN:
      "© 2022 EMFI Group Limited. All Rights Reserved. 25-26 Dering St, Mayfair, London W1S 1AW, United Kingdom. Intended For Professional Clients Only. Not Suitable For Retail Clients. Not Intended For Nor A Solicitation Of Any Offer Of Service To US Persons.",
    footerTextES:
      "© 2023 EMFI Group Limited. Todos los derechos reservados. 25-26 Dering St, Mayfair, London W1S 1AW, United Kingdom. Sólo para clientes profesionales. No es adecuado para clientes minoristas. No está destinado ni a solicitar una oferta de servicio a personas estadounidenses",
  },
};
