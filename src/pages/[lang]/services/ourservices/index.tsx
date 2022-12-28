import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import ServiceHero from "../../../../Components/HeroSection/ServiceHero";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";

type Props = {};

const assetmanagement = (props: Props) => {
  return (
    <>
      <div className="container">
        <HeroSearch
          subHeading="EMFI Securities Limited"
          heading="Capital Market"
          placeholder="EMFI Securities Limited"
        />
        {/* <SwiperCarousel>
          <ServiceHero />
        </SwiperCarousel> */}
        <MapContainer />
      </div>
    </>
  );
};

export default assetmanagement;
