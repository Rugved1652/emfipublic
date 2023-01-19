import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import ServiceHero from "../../../../Components/HeroSection/ServiceHero";
import {
  capitalContent,
  fintechContent,
  SalesNTradingContent,
  securitiesContent,
  wealthContent,
} from "../../../../constants/serviceContent";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";
type Props = {};

const Services = ({ content }: any) => {
  return (
    <>
      <div className="container">
        <HeroSearch
          subHeading="EMFI Securities Limited"
          heading="Capital Market"
          placeholder="EMFI Securities Limited"
        />
      </div>
      <SwiperCarousel
        page="service"
        data={SalesNTradingContent}
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
  console.log(params);

  let content: any;
  if (params?.lang === "english") {
    switch (params?.products) {
      case "securities":
        content = securitiesContent;
        break;
      case "wealth":
        content = wealthContent;
        break;
      case "fintech":
        content = fintechContent;
        break;
      case "capital":
        content = capitalContent;
        break;
      default:
        content = {};
        break;
    }
  } else if (params?.lang === "espanol") {
    switch (params?.products) {
      case "securities":
        content = securitiesContent;
        break;
      case "wealth":
        content = wealthContent;
        break;
      case "fintech":
        content = fintechContent;
        break;
      case "capital":
        content = capitalContent;
        break;
      default:
        content = {};
        break;
    }
  }
  return {
    // Passed to the page component as props
    props: { content: content },
  };
}

export default Services;
