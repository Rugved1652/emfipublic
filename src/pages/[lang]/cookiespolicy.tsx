import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import {
  cookiespolicyEN,
  cookiespolicyES,
  CookiesPolicyHeroSearchEN,
  CookiesPolicyHeroSearchES,
} from "../../constants/policies";

type Props = {
  cookiespolicy: any[];
  LegalHeroSearch: HeroSearchInfo;
  SaveBtnText: string;
};

const cookiespolicy = ({
  cookiespolicy,
  LegalHeroSearch,
  SaveBtnText,
}: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading={LegalHeroSearch.heading}
        subHeading={LegalHeroSearch.subHeading}
        placeholder={LegalHeroSearch.placeholderText}
        data={LegalHeroSearch.serviceList}
        searchKeyname={"label"}
      />
      <div className="legalGroup">
        {cookiespolicy.map((cookie: any) => (
          <>
            {cookie.head ? (
              <div className="checkGroup">
                <div className="checkGroupbox">
                  <input type="checkbox" name="" id={cookie.id} />
                  <span className="chk-check"></span>
                </div>
                <label htmlFor={cookie.id} className="chk-check">
                  <div dangerouslySetInnerHTML={{ __html: cookie.head }} />
                </label>
              </div>
            ) : null}{" "}
            <div dangerouslySetInnerHTML={{ __html: cookie.desc }} />
          </>
        ))}
        <button>{SaveBtnText}</button>
      </div>
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
      cookiespolicy:
        params?.lang === "espanol" ? cookiespolicyES : cookiespolicyEN,
      LegalHeroSearch:
        params?.lang === "espanol"
          ? CookiesPolicyHeroSearchES
          : CookiesPolicyHeroSearchEN,
      SaveBtnText: params?.lang === "espanol" ? "Envio" : "Save",
    },
  };
}

export default cookiespolicy;
