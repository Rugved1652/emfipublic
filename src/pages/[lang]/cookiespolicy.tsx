import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { cookiespolicyEN, cookiespolicyES } from "../../constants/policies";

const cookiespolicy = ({ cookiespolicy }: any) => {
  return (
    <div className="container">
      <HeroSearch
        heading="Legal"
        subHeading="EMFI Group"
        placeholder="Cookies Policy"
      />
      <div className="legalGroup">
        {cookiespolicy.map((cookie: any) => (
          <>
            {cookie.head ? (
              <div className="checkGroup">
                <div className="checkGroupbox">
                  <input type="checkbox" name="" id="one" />
                  <span className="chk-check"></span>
                </div>
                <label htmlFor="one" className="chk-check">
                  {cookie.head}
                </label>
              </div>
            ) : null}
            <p>{cookie.desc}</p>
          </>
        ))}
        <button>Save</button>
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
    },
  };
}

export default cookiespolicy;
