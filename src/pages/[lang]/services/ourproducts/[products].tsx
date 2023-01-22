import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Flip } from "react-awesome-reveal";
import CustomCard from "../../../../Components/Cards/CustomCard/CustomCard";
import ProductHero from "../../../../Components/HeroSection/ProductHero";
import {
  AsSeenContentEN,
  AsSeenContentES,
} from "../../../../constants/globalContent";
import {
  ebondHeroInformationEN,
  ebondHeroInformationES,
  eFundHeroInformationEN,
  eFundHeroInformationES,
  eIntelHeroInformationEN,
  eIntelHeroInformationES,
  eWealthHeroInformationEN,
  eWealthHeroInformationES,
} from "../../../../constants/productDetailsContent";
import AsSeenIn from "../../../../Containers/AsSeenIn/AsSeenIn";

import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";

type Props = {
  content: any;
  AsSeenContent: AsSeenSection;
};

const Products = ({ content, AsSeenContent }: Props) => {
  const [imagePosition, setImagePosition] = useState(false);
  const [greyImage, setGreyImage] = useState(-1);

  const Router = useRouter();
  console.log("content", content);
  console.log("imagePosition", imagePosition);
  return (
    <>
      <div>
        <Image
          src={`/${Router?.query?.products}.svg`}
          alt={"eLogo"}
          width={200}
          height={200}
          className={`eLogoBg ${imagePosition ? "eLogoBgHide " : ""}`}
        />
      </div>

      <SwiperCarousel
        image={content.image}
        data={content.data}
        SildeComponent={ProductHero}
        page={"product"}
        setImagePosition={setImagePosition}
      ></SwiperCarousel>
      <div className="container">
        <AsSeenIn AsSeenContent={AsSeenContent} />
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
  let AsSeenContent =
    params?.lang === "espanol" ? AsSeenContentES : AsSeenContentEN;
  if (params?.lang === "english") {
    switch (params?.products) {
      case "ebonds":
        content = ebondHeroInformationEN;
        break;
      case "ewealth":
        content = eWealthHeroInformationEN;
        break;
      case "efund":
        content = eFundHeroInformationEN;
        break;
      case "eintel":
        content = eIntelHeroInformationEN;
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
        content = eWealthHeroInformationES;
        break;
      case "efund":
        content = eFundHeroInformationES;
        break;
      case "eintel":
        content = eIntelHeroInformationES;
        break;
      default:
        content = {};
        break;
    }
  }

  return {
    // Passed to the page component as props
    props: { content: content, AsSeenContent: AsSeenContent },
  };
}

export default Products;
