import Head from "next/head";
import React from "react";
import { AnyMessageParams } from "yup/lib/types";
import HeroSearch from "../../../../../Components/HeroSearch/HeroSearch";
import ServiceHero from "../../../../../Components/HeroSection/ServiceHero";
import {
  AnalyticslEN,
  AnalyticslES,
  CapitalEN,
  CapitalES,
  CapitalMapData,
  CapitalpageEN,
  CapitalpageES,
  FintechMapData,
  fintechpageEN,
  fintechpageES,
  FundsEN,
  FundsES,
  securitiesEN,
  securitiesES,
  SecuritiesMapData,
  SecuritiespageEN,
  SecuritiespageES,
  WealthMapData,
  WealthpageEN,
} from "../../../../../constants/serviceDetailsContent";
import MapContainer from "../../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../../Containers/SwipeCarousel/SwipeCarousel";
type Props = {
  content: any;
  servicePageInfo: any;
};

const Services = ({ content, servicePageInfo, MapData, MetaTitle }: any) => {
  console.log(MapData, "map");
  return (
    <>
      <Head>
        <title>{MetaTitle}</title>
      </Head>
      <div className="container">
        <HeroSearch
          subHeading={servicePageInfo.subHeading}
          heading={servicePageInfo.heading}
          placeholder={servicePageInfo.placeholderText}
          data={servicePageInfo.serviceList}
          searchKeyname={"label"}
        />
      </div>
      <SwiperCarousel
        page="service"
        data={content}
        className={"serviceSlider"}
        SildeComponent={ServiceHero}
      ></SwiperCarousel>
      <div className="container">
        <MapContainer MapData={MapData} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { services: "securities", lang: "english" } },
      { params: { services: "securities", lang: "espanol" } },
      { params: { services: "wealth", lang: "english" } },
      { params: { services: "wealth", lang: "espanol" } },
      { params: { services: "fintech", lang: "english" } },
      { params: { services: "fintech", lang: "espanol" } },
      { params: { services: "capital", lang: "english" } },
      { params: { services: "capital", lang: "espanol" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: any) {
  let content: any;
  let servicePageInfo: any;
  let MapData: any;
  let MetaTitle: any;
  if (params?.lang === "english") {
    switch (params.services) {
      case "securities":
        MetaTitle = "EMFI | Capital Markets";
        MapData = SecuritiesMapData;
        content = securitiesEN;
        servicePageInfo = SecuritiespageEN;
        break;
      case "wealth":
        MetaTitle = "EMFI | Wealth Management";
        MapData = WealthMapData;
        content = CapitalEN;
        servicePageInfo = WealthpageEN;
        break;
      case "fintech":
        MetaTitle = "EMFI | Fintech as-a-Service";
        MapData = FintechMapData;
        content = AnalyticslEN;
        servicePageInfo = fintechpageEN;
        break;
      case "capital":
        MetaTitle = "EMFI | Asset Management";
        MapData = CapitalMapData;
        content = FundsEN;
        servicePageInfo = CapitalpageEN;
        break;
      default:
        MetaTitle = "EMFI ";
        content = [];
        servicePageInfo = {};
        MapData = {};
        break;
    }
  } else if (params?.lang === "espanol") {
    switch (params.services) {
      case "securities":
        MetaTitle = "EMFI | Mercados Capitales";

        MapData = SecuritiesMapData;
        content = securitiesES;
        servicePageInfo = SecuritiespageES;
        break;
      case "wealth":
        MetaTitle = "EMFI | Gestión de patrimonios";
        MapData = WealthMapData;
        content = CapitalES;
        servicePageInfo = WealthpageEN;
        break;
      case "fintech":
        MetaTitle = "EMFI | Fintech as-a-Service";
        MapData = FintechMapData;
        content = AnalyticslES;
        servicePageInfo = fintechpageES;
        break;
      case "capital":
        MetaTitle = "EMFI | Gestión de Activos";
        MapData = CapitalMapData;
        content = FundsES;
        servicePageInfo = CapitalpageES;
        break;
      default:
        MetaTitle = "EMFI";
        content = [];
        servicePageInfo = {};
        MapData = {};
        break;
    }
  }
  return {
    // Passed to the page component as props
    props: {
      content: content,
      servicePageInfo: servicePageInfo,
      MapData: MapData,
      MetaTitle: MetaTitle,
    },
  };
}

export default Services;
