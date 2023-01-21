import React from "react";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import { privacypolicyEN, privacypolicyES } from "../../../constants/policies";

type Props = {};

const privacypolicy = ({ privacypolicy }: any) => {
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
    paths: [
      { params: { lang: "english", privacypolicy: "EEAEmp" } },
      { params: { lang: "espanol", privacypolicy: "EEAEmp" } },
      { params: { lang: "english", privacypolicy: "EEAUser" } },
      { params: { lang: "espanol", privacypolicy: "EEAUser" } },
      { params: { lang: "english", privacypolicy: "globalUser" } },
      { params: { lang: "espanol", privacypolicy: "globalUser" } },
      { params: { lang: "english", privacypolicy: "globalEmp" } },
      { params: { lang: "espanol", privacypolicy: "globalEmp" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  return {
    props: {
      privacypolicy:
        params?.lang === "espanol" ? privacypolicyES : privacypolicyEN,
    },
  };
}

export default privacypolicy;
