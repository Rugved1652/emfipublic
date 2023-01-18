import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import ServiceHero from "../../../../Components/HeroSection/ServiceHero";
import {
  SalesNTradingContent,
  ServicesContent,
} from "../../../../constants/serviceContent";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";
type Props = {};

const services = (props: Props) => {
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

export default services;
