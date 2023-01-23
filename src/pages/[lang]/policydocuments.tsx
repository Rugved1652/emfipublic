import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import {
  privacypolicyEN,
  privacypolicyES,
  regulatorypageEN,
  regulatorypageES,
} from "../../constants/policies";
import { regulatoryEN, regulatoryES } from "../../constants/policies";

type Props = {
  privacypolicy: string;
  regulatoryPage: HeroSearchInfo;
};

const PrivacyDocuments = ({ privacypolicy, regulatoryPage }: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading={regulatoryPage.heading}
        subHeading={regulatoryPage.subHeading}
        placeholder={regulatoryPage.placeholderText}
        data={regulatoryPage.serviceList}
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
      privacypolicy: params?.lang === "espanol" ? regulatoryES : regulatoryEN,
      regulatoryPage:
        params?.lang === "espanol" ? regulatorypageES : regulatorypageEN,
    },
  };
}

export default PrivacyDocuments;
