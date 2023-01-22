import React from "react";
import HeroSearch from "../../../../../Components/HeroSearch/HeroSearch";
import styles from "../../../../../styles/Details.module.scss";
import LinkedInIconWhite from "../../../../../Components/Icons/LinkedInIconWhite";
import MessageIconWhite from "../../../../../Components/Icons/MessageIconWhite";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { fetchData } from "../../../../../Services/apiFunction";
import moment from "moment";

type Props = {
  blogPost: any;
  blogPostList?: any;
  recentReport: any;
};

const index = ({ blogPost, blogPostList, recentReport }: Props) => {
  console.log(recentReport, "recentReport");
  return (
    <div className="container">
      <HeroSearch
        heading="Angola"
        subHeading={moment(blogPostList?.data?.last_report_date).format(
          "MM/DD/YYYY"
        )}
        placeholder="Search"
        searchKeyname="title"
        data={blogPostList?.data?.reports_list}
      />
      <div className={styles.inteligenceDetailsGroup}>
        <div className="row">
          <div className="col-md-12 col-lg-8 col-xl-9">
            <div className={styles.inteligenceDetails}>
              {/* <h3>{blogPost?.data?.report_rows?.report_title}</h3> */}
              <div>
                {blogPost?.data?.report_data?.report_bullet_desc?.map(
                  (i: any) => (
                    <>
                      <h3>{i.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: i.description }}
                      />
                    </>
                  )
                )}
              </div>
              <div>
                {blogPost?.data?.report_data?.reports_translations?.map(
                  (i: any) => (
                    <>
                      <h3>{i.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: i.long_description }}
                      />
                    </>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-3 ">
            <button className={styles.downloadReport}>
              Download Report
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </button>
            <div
              className={`${styles.socialIconGroup} ${styles.inteligenceDetailSidebar}`}
            >
              <h3>Share On</h3>
              <div className={styles.socialIconGroupList}>
                <LinkedInIconWhite />
                <MessageIconWhite />
              </div>
            </div>
            <div
              className={`${styles.recentGroup} ${styles.inteligenceDetailSidebar}`}
            >
              <h3>Recent</h3>
              {recentReport.data.latest_report.map((report: any) => (
                <Link
                  key={report.id}
                  href={`/english/intelligence/details/${report.report_slug}?id=${report.id}`}
                  className={styles.recentGroup}
                >
                  <p>{report.report_ttl}</p>
                  <span>
                    {moment(report.report_date).format("MMMM DD, YYYY")}
                  </span>
                </Link>
              ))}
            </div>
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let blogPost = await fetchData(
    `intelligence/${context?.params.lang}/get-report-details/${context?.query.id}`
  );
  let recentReport = await fetchData(`home/latest-report-list`);
  let blogPostList = await fetchData(`intelligence/espanol`);
  return {
    props: {
      blogPost: blogPost || null,
      blogPostList: blogPostList || null,
      recentReport: recentReport,
    },
  };
};

export default index;
