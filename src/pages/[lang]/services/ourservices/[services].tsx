import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import ServiceHero from "../../../../Components/HeroSection/ServiceHero";
import {
  AnalyticslEN,
  AnalyticslES,
  CapitalEN,
  CapitalES,
  CapitalpageEN,
  CapitalpageES,
  fintechpageEN,
  fintechpageES,
  FundsEN,
  FundsES,
  securitiesEN,
  securitiesES,
  SecuritiespageEN,
  SecuritiespageES,
} from "../../../../constants/serviceDetailsContent";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";
type Props = {
  content: any;
  servicePageInfo: HeroSearchInfo;
};

const Services = ({ content, servicePageInfo }: Props) => {
  return (
    <>
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
        <MapContainer />
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
  if (params?.lang === "english") {
    switch (params.services) {
      case "securities":
        content = securitiesEN;
        servicePageInfo = SecuritiespageEN;
        break;
      case "wealth":
        content = CapitalEN;
        servicePageInfo = CapitalpageEN;
        break;
      case "fintech":
        content = AnalyticslEN;
        servicePageInfo = fintechpageEN;
        break;
      case "capital":
        content = FundsEN;
        servicePageInfo = CapitalpageEN;
        break;
      default:
        content = [];
        servicePageInfo = {};
        break;
    }
  } else if (params?.lang === "espanol") {
    switch (params.services) {
      case "securities":
        content = securitiesES;
        servicePageInfo = SecuritiespageES;
        break;
      case "wealth":
        content = CapitalES;
        servicePageInfo = CapitalpageES;
        break;
      case "fintech":
        content = AnalyticslES;
        servicePageInfo = fintechpageES;
        break;
      case "capital":
        content = FundsES;
        servicePageInfo = CapitalpageES;
        break;
      default:
        content = [];
        servicePageInfo = {};
        break;
    }
  }
  return {
    // Passed to the page component as props
    props: { content: content, servicePageInfo: servicePageInfo },
  };
}

export default Services;
