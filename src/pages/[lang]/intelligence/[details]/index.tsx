import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../../../Services/apiFunction";
import styles from "../../../../styles/inteligenceCountry.module.scss";
import { Fade } from "react-awesome-reveal";
type Props = {};

const index = ({ blogPostList, PostbyCountries }: any) => {
  // console.log(PostbyCountries.data.reports_list);
  return (
    <div className="container">
      <HeroSearch
        heading="Research"
        subHeading="Angola"
        placeholder="Search"
        searchKeyname="title"
        data={blogPostList?.data?.reports_list}
      />
      <div className="row" style={{ margin: "30px 0" }}>
        <div className="col-md-12 col-lg-8 col-xl-9">
          {PostbyCountries.data.reports_list.map((post: any) => (
             <Fade
             key={post.id}
             triggerOnce={true}
             direction="up"
             duration={1500}
             className="afterLoginResearch"
           >
            <div>
              <Link href={`/english/intelligence/details/${post.report_slug}?id=${post.id}`}>
                  <p>{post.report_slug}</p>
                  <span>April 27, 2021</span>
              </Link>
            </div>
            </Fade>
          ))}
        </div>
        <div className="col-md-12 col-lg-4 col-xl-3">
          <div
            className={`${styles.countryGroup} ${styles.inteligenceDetailSidebar}`}
          >
            <h3>Country</h3>
            <ul>
              {Array.from(Array(5).keys()).map((key) => (
                <li>
                  <Link href="/english/intelligence/details">
                    Angola
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let blogPostList = await fetchData(`intelligence/espanol`);
  let PostbyCountries = await fetchData(
    `intelligence/espanol/search/${context?.params.details}`
  );
  return {
    props: {
      PostbyCountries: PostbyCountries || null,
      blogPostList: blogPostList || null,
    },
  };
};

export default index;
