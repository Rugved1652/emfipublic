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
        en_Link: "/english/services/ourproducts/ebonds",
        es_Link: "/espanol/services/ourproducts/ebonds",
      },
      {
        id: "ewealth",
        icon: EWealthIcon,
        en_Link: "/english/services/ourproducts/ewealth",
        es_Link: "/espanol/services/ourproducts/ewealth",
      },
      {
        id: "efunds",
        icon: EFundIcon,
        en_Link: "/english/services/ourproducts/efund",
        es_Link: "/espanol/services/ourproducts/efund",
      },
      {
        id: "eintel",
        icon: EIntelIcon,
        en_Link: "/english/services/ourproducts/eintel",
        es_Link: "/espanol/services/ourproducts/eintel",
      },
    ],
  },

  Services: {
    en_label: "Services",
    es_label: "Servicios",
    Routes: [
      {
        id: "sales&trading",
        en_Link: "/english/services/ourservices/securities",
        es_Link: "/espanol/services/ourservices/securities",
        en_label: "Sales & Trading",
        es_label: "Sales y Trading",
      },
      {
        id: "wealthmanagement",
        en_Link: "/english/services/ourservices/wealth",
        es_Link: "/espanol/services/ourservices/wealth",
        en_label: "Wealth Management",
        es_label: "Gestión de patrimonios",
      },
      {
        id: "assetmanagement",
        en_Link: "/english/services/ourservices/capital",
        es_Link: "/espanol/services/ourservices/capital",
        en_label: "Asset Management",
        es_label: "Gestión de Activos",
      },
      {
        id: "fintechasaservices",
        en_Link: "/english/services/ourservices/fintech",
        es_Link: "/espanol/services/ourservices/fintech",
        en_label: "Fintech as-a-Services",
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
        isDownLoad: false,
        en_Link: "/english/policydocuments",
        es_Link: "/espanol/policydocuments",
        en_label: "Policy Documents",
        es_label: "Documentos De Póliza",
        downloadLink: "",
      },
      {
        id: "standardisedcosts",
        isDownLoad: true,
        en_Link:
          "https://emfi-uat.s3.amazonaws.com/uploads/standardised_cost/EMFIStandardisedCosts.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX//////////wEaCXVzLWVhc3QtMSJIMEYCIQC8DVkWxdyeBAoRhxDYC93o/ZRdUhSjDlEEe5V+6LFYIgIhANYJ5OCe92hyY+JSqDozHhkPOS6Oh31GxqcMpT5Zaz6FKvADCP7//////////wEQAxoMOTQ5MDIwODMyMDgwIgx5Ecf9wjYH7g//kd4qxAPNfHS8HkZ9caLdO0aYBLlGdd96tjBBUxoS/6bPhZzuoSBKsQSIl5gcdrMSbfcg12PmLTV3My36HIFB960mtwaQcq47shNXI7HjAlA3oLy/ONu7wge7az8Zpfccix3Up1+YU4lrL90mDAVq57jNm/+5/XErsu+Q7hU45fvngUCip5p/DY8+3koIMHr0mdsAtqbFqpf4T1ngDqS0IV0bSqE88IGj5+c6L8Q4A0rTxFb9WtottWcwWaoCGvKo4vZHPcXSrN07D2C06C7hP8OPP15EARzSZswlBCV2i0wavihro8r/CFaCuyEugz7S2qy0KA+mVWw+q8k/MozYGFGJDWcM5B2ZEOX2jOaUtmtFAltpuaZ5gnPR5AJBP3IptH8EESXiSry9334Rq2csGPElNwbZXfcR8HqwTfNEzDVXeP6wLxME4mi4YydLlollslfxDjuR2WMKOCwI1tIkz/sjkWpXqro9Q2UVvkwCIZEWBIuB+PfCs1NIi8O8lFKx/nI1/44L8X8eyvGyC/5Fwja2EcdRS3y7L3KP6b1qYiY71TfU1igbgqDWETq/ajieUst5xZP0SdXYVJpTTuutNFEsqkegOTX67DDT5cKeBjqkAYk0E1QZvu6PlJsoVCsRWo3zwC30/JbXjo0U1Twp8jJP41Ih0zYKSYtMtt5TgOfdjKAbQybOE+H3m5qpksv9bZMPXSkxwkW4dQAmZW+y4vLq1CEb2HtPfoQOHAieVIjvtA4PGCzr9cHeMKzZX/OOi/0dW4n90wB79O3tkExPic13JI7X26EWHzdNskgXeXIleU0ysgJN+RdqWgICOFvoobTJB6kx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5Z5QMWFIAY54P5PO/20230125/us-east-1/s3/aws4_request&X-Amz-Date=20230125T061543Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=a737d7fed28258389e2ba9e5abd79b51c644009bfc3052cb8c2d0e540d7202bf",
        es_Link:
          "https://emfi-uat.s3.amazonaws.com/uploads/standardised_cost/EMFIStandardisedCosts.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX//////////wEaCXVzLWVhc3QtMSJIMEYCIQC8DVkWxdyeBAoRhxDYC93o/ZRdUhSjDlEEe5V+6LFYIgIhANYJ5OCe92hyY+JSqDozHhkPOS6Oh31GxqcMpT5Zaz6FKvADCP7//////////wEQAxoMOTQ5MDIwODMyMDgwIgx5Ecf9wjYH7g//kd4qxAPNfHS8HkZ9caLdO0aYBLlGdd96tjBBUxoS/6bPhZzuoSBKsQSIl5gcdrMSbfcg12PmLTV3My36HIFB960mtwaQcq47shNXI7HjAlA3oLy/ONu7wge7az8Zpfccix3Up1+YU4lrL90mDAVq57jNm/+5/XErsu+Q7hU45fvngUCip5p/DY8+3koIMHr0mdsAtqbFqpf4T1ngDqS0IV0bSqE88IGj5+c6L8Q4A0rTxFb9WtottWcwWaoCGvKo4vZHPcXSrN07D2C06C7hP8OPP15EARzSZswlBCV2i0wavihro8r/CFaCuyEugz7S2qy0KA+mVWw+q8k/MozYGFGJDWcM5B2ZEOX2jOaUtmtFAltpuaZ5gnPR5AJBP3IptH8EESXiSry9334Rq2csGPElNwbZXfcR8HqwTfNEzDVXeP6wLxME4mi4YydLlollslfxDjuR2WMKOCwI1tIkz/sjkWpXqro9Q2UVvkwCIZEWBIuB+PfCs1NIi8O8lFKx/nI1/44L8X8eyvGyC/5Fwja2EcdRS3y7L3KP6b1qYiY71TfU1igbgqDWETq/ajieUst5xZP0SdXYVJpTTuutNFEsqkegOTX67DDT5cKeBjqkAYk0E1QZvu6PlJsoVCsRWo3zwC30/JbXjo0U1Twp8jJP41Ih0zYKSYtMtt5TgOfdjKAbQybOE+H3m5qpksv9bZMPXSkxwkW4dQAmZW+y4vLq1CEb2HtPfoQOHAieVIjvtA4PGCzr9cHeMKzZX/OOi/0dW4n90wB79O3tkExPic13JI7X26EWHzdNskgXeXIleU0ysgJN+RdqWgICOFvoobTJB6kx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5Z5QMWFIAY54P5PO/20230125/us-east-1/s3/aws4_request&X-Amz-Date=20230125T061543Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=a737d7fed28258389e2ba9e5abd79b51c644009bfc3052cb8c2d0e540d7202bf",
        en_label: "Standardised Costs",
        es_label: "Costos Estandarizados",
        downloadLink: "",
      },
      {
        id: "pillar3disclosure",
        isDownLoad: false,
        en_Link: "/",
        es_Link: "/",
        en_label: "Pillar 3 Disclousure",
        es_label: "Pillar 3 Disclosure",
        downloadLink: "",
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
      "© 2023 EMFI Group Limited. All Rights Reserved. 25-26 Dering St, Mayfair, London W1S 1AW, United Kingdom. Intended For Professional Clients Only. Not Suitable For Retail Clients. Not Intended For Nor A Solicitation Of Any Offer Of Service To US Persons.",
    footerTextES:
      "© 2023 EMFI Group Limited. Todos los derechos reservados. 25-26 Dering St, Mayfair, London W1S 1AW, United Kingdom. Sólo para clientes profesionales. No es adecuado para clientes minoristas. No está destinado ni a solicitar una oferta de servicio a personas estadounidenses.",
  },
};
