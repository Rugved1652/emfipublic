import React from "react";
import ProductHero from "../../../../Components/HeroSection/ProductHero";
import {
  ebondHeroInformation,
  ebondHeroInformationES,
  eFundHeroInformation,
  eFundHeroInformationEs,
  eIntelHeroInformation,
  eIntelHeroInformationEs,
  eWealthHeroInformation,
  eWealthHeroInformationEs,
} from "../../../../constants/aboutContent";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";

type Props = {
  content: any;
};

const products = ({ content }: Props) => {
  console.log("content", content);
  return (
    <>
      <SwiperCarousel
        image={content.image}
        data={content.data}
        SildeComponent={ProductHero}
        page={"product"}
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
      { params: { products: "ebonds", lang: "english" } },
      { params: { products: "ebonds", lang: "espanol" } },
      { params: { products: "ewealth", lang: "english" } },
      { params: { products: "ewealth", lang: "espanol" } },
      { params: { products: "eintel", lang: "english" } },
      { params: { products: "eintel", lang: "espanol" } },
      { params: { products: "efund", lang: "english" } },
      { params: { products: "efund", lang: "espanol" } },
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
      case "ebonds":
        content = ebondHeroInformation;
        break;
      case "ewealth":
        content = eWealthHeroInformation;
        break;
      case "efund":
        content = eFundHeroInformation;
        break;
      case "eintel":
        content = eIntelHeroInformation;
        break;
      default:
        content = {};
        break;
    }
  } else if (params?.lang === "espanol") {
    switch (params?.products) {
      case "ebonds":
        content = ebondHeroInformationES;
        break;
      case "ewealth":
        content = eWealthHeroInformationEs;
        break;
      case "efund":
        content = eFundHeroInformationEs;
        break;
      case "eintel":
        content = eIntelHeroInformationEs;
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

export default products;
