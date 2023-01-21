import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Flip } from "react-awesome-reveal";
import CustomCard from "../../../../Components/Cards/CustomCard/CustomCard";
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
import { AsSeenContentES } from "../../../../constants/information";
import MapContainer from "../../../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../../../Containers/SwipeCarousel/SwipeCarousel";

type Props = {
  content: any;
};

const Products = ({ content }: Props) => {
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
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>{"As Seen In*"}</h2>
          </div>
          <div className="AsSeenIn">
            {AsSeenContentES.map((brand: any, index: any) => (
              <Flip key={index} direction={"vertical"} duration={1500}>
                <div
                  className="border-ani"
                  onMouseEnter={() => setGreyImage(index)}
                  onMouseLeave={() => setGreyImage(-1)}
                >
                  <span>
                    <CustomCard className="AsSeenInCard">
                      <Image
                        src={
                          greyImage === index ? brand.hoverImage : brand?.image
                        }
                        alt={"img"}
                        width={280}
                        height={100}
                      />
                    </CustomCard>
                  </span>
                </div>
              </Flip>
            ))}
          </div>
          <p className="AsSeenInText">
            {
              "*And other news media outlets. All logos and trademarks are property of their respective owners and used here for identification purposes only. Use of these logos and trademarks does not imply endorsement by the logo and trademark owners in any way. Please visit respective websites for further information."
            }
          </p>
        </div>
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

export default Products;
