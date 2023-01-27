import React from "react";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import {
  privacypolicyEN,
  privacypolicyES,
  PrivacyPolicyHeroSearchEN,
  PrivacyPolicyHeroSearchES,
} from "../../../constants/policies";

type Props = {
  privacypolicy: string;
  LegalHeroSearch: HeroSearchInfo;
};

const privacypolicy = ({ privacypolicy, LegalHeroSearch }: Props) => {
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
        dangerouslySetInnerHTML={{ __html: privacypolicy }}
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
      privacypolicy:
        params?.lang === "espanol" ? privacypolicyES : privacypolicyEN,
      LegalHeroSearch:
        params?.lang === "espanol"
          ? PrivacyPolicyHeroSearchES
          : PrivacyPolicyHeroSearchEN,
    },
  };
}

export default privacypolicy;
