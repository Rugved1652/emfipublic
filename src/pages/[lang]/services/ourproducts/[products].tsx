import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import ProductHero from "../../../../Components/HeroSection/ProductHero";
import { eBondContent } from "../../../../constants/information";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";

type Props = {};

const products = (props: Props) => {
  return (
    <>
      <SwiperCarousel
        data={eBondContent}
        SildeComponent={ProductHero}
      ></SwiperCarousel>
      <div className="container">
        <MapContainer />
      </div>
    </>
  );
};

export default products;
