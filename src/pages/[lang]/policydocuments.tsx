import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { privacypolicyEN, privacypolicyES } from "../../constants/policies";
import { regulatoryEN, regulatoryES } from "../../constants/policies";

type Props = {};

const PrivacyDocuments = ({ privacypolicy }: any) => {
  return (
    <div className="container">
      <HeroSearch
        heading="LEGAL"
        subHeading="EMFI group"
        placeholder="Privacy Policy - Global Users"
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
    },
  };
}

export default PrivacyDocuments;