import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../../../Services/apiFunction";
import styles from "../../../../styles/inteligenceCountry.module.scss";

type Props = {};

const index = ({ blogPostList }: any) => {
  return (
    <div className="container">
      <HeroSearch
        heading="Research"
        subHeading="Angola"
        placeholder="Search"
        searchKeyname="title"
        data={blogPostList?.data?.reports_list}
      />
      <div className="d-flex" style={{ margin: "30px 0" }}>
        <div className=" col-lg-10">
          {Array.from(Array(25).keys()).map((key) => (
            <li>
              <Link href="/english/intelligence/details">
                <div>
                  <p>Country Report: Nothing New Under The Sun</p>
                  <span>April 27, 2021</span>
                </div>
              </Link>
            </li>
          ))}
        </div>
        <div className=" col-lg-2">
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
  let blogPost = await fetchData(
    `intelligence/${context?.params.lang}/get-report-details/${context?.query.id}`
  );
  let blogPostList = await fetchData(`intelligence/espanol`);
  return {
    props: {
      blogPost: blogPost || null,
      blogPostList: blogPostList || null,
    },
  };
};

export default index;
