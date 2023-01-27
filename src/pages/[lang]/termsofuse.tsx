import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import {
  termofUseEN,
  termofUseES,
  termOfUseHeroSearchEN,
  termOfUseHeroSearchES,
} from "../../constants/policies";

type Props = {
  termofuse: string;
  LegalHeroSearch: HeroSearchInfo;
};

const termsofuse = ({ termofuse, LegalHeroSearch }: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading={LegalHeroSearch.heading}
        subHeading={LegalHeroSearch.subHeading}
        placeholder={LegalHeroSearch.placeholderText}
        data={LegalHeroSearch.serviceList}
        searchKeyname={"label"}
      />
      <div
        dangerouslySetInnerHTML={{ __html: termofuse }}
        className="legalGroup"
      ></div>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "english" } }, { params: { lang: "espanol" } }],
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  return {
    props: {
      termofuse: params?.lang === "espanol" ? termofUseES : termofUseEN,
      LegalHeroSearch:
        params?.lang === "espanol"
          ? termOfUseHeroSearchES
          : termOfUseHeroSearchEN,
    },
  };
}
export default termsofuse;
