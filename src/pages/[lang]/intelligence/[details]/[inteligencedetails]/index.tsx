import React, { useEffect, useState } from "react";
import HeroSearch from "../../../../../Components/HeroSearch/HeroSearch";
import styles from "../../../../../styles/Details.module.scss";
import LinkedInIconWhite from "../../../../../Components/Icons/LinkedInIconWhite";
import FacebookIconWhite from "../../../../../Components/Icons/FacebookIconWhite";
import TwiterIconWhite from "../../../../../Components/Icons/TwiterIconWhite";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { Fade } from "react-awesome-reveal";
import {
  fetchData,
  fetchDataV1,
  fetchtDataV3,
  postDataV1,
} from "../../../../../Services/apiFunction";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  blogPost: any;
  blogPostList?: any;
  recentReport: any;
  IntelligenceReport: any;
  Report: any;
  countriesList: any;
};

const Index = ({
  blogPost,
  blogPostList,
  recentReport,
  IntelligenceReport,
  Report,
  countriesList,
}: Props) => {
  console.log(Report, "recentReport");
  console.log(countriesList, "recentReport");

  const [showMore, setShowMore] = useState(false);

  const Router = useRouter();

  // useEffect(() => {
  //   const storage = localStorage.getItem("gtti");
  //   console.log("storage", storage);
  //   if (!storage) {
  //     window.location.href = "https://login.emfi.uk";
  //   }
  // }, []);

  const downLoadReport = async (data: any) => {
    const res = await postDataV1(`/download-report-pdf`, {
      lang: "es",
      report_id: data.id,
    });
    if (res.data.status === 1) {
      console.log(res, "res");
      window.open(res.data.report_url);
    }
  };

  return (
    <div className="container">
      <HeroSearch
        heading={IntelligenceReport.data.title}
        subHeading={moment(IntelligenceReport.data.report_date).format(
          "MMMM DD, YYYY"
        )}
        placeholder="Search"
        searchKeyname="title"
        data={blogPostList?.data?.reports_list}
      />
      <div className={styles.inteligenceDetailsGroup}>
        <div className="row">
          <div className="col-md-12 col-lg-8 col-xl-9">
            <Fade triggerOnce={true} direction="up" duration={1500}>
              <div className={styles.inteligenceDetails}>
                <div>
                  <h3>{IntelligenceReport.data.report_title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: IntelligenceReport.data.description,
                    }}
                  />
                </div>
                <div>
                  {IntelligenceReport.data.report_data.map((report: any) => (
                    <>
                      {report.type === "image" ? (
                        <Image
                          src={
                            report.report_img
                              ? report.report_img
                              : "/placeholder.jpg"
                          }
                          alt=""
                          width={300}
                          height={300}
                        />
                      ) : (
                        <></>
                      )}
                      {report.type === "description" ? (
                        <>
                          <h3>{report.title}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: report.long_description
                                ? report.long_description
                                : "",
                            }}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {report.type === "performance" ? (
                        <>
                          <h3>{report.performance_main_title}</h3>
                          <h3>{report.performance_title}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: report.performance_description
                                ? report.performance_description
                                : "",
                            }}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                  <div>
                    {/* Yield		Change	52 WK Low	52 WK High */}
                    <table>
                      <thead>
                        <tr>
                          <th>Security</th>
                          <th>Ask</th>
                          <th>Bid</th>
                          <th>Yield</th>
                          <th>Spread</th>
                          <th>52 WK Low</th>
                          <th>52 WK High</th>
                        </tr>
                      </thead>
                      <tbody>
                        {IntelligenceReport.data.sovereign_data.map(
                          (data: any) => (
                            <tr>
                              <td>{data.security_name}</td>
                              <td>{data.ask_price}</td>
                              <td>{data.bid_price}</td>
                              <td>{data.yld_ytm_mid}</td>
                              <td>{data.z_sprd_mid}</td>
                              <td>{data.low_52_week}</td>
                              <td>{data.high_52_week}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-3 ">
            <Fade triggerOnce={true} direction="right" duration={1500}>
              <button
                onClick={() =>
                  downLoadReport({
                    id: IntelligenceReport.data.id,
                    lang: Router.query.lang === "espanol" ? "es" : "en",
                  })
                }
                className={styles.downloadReport}
              >
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
                  <FacebookIconWhite />
                  <TwiterIconWhite />
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
                  {!showMore
                    ? countriesList?.countries
                        ?.slice(0, 5)
                        ?.map((country: any) => (
                          <li>
                            <Link
                              href={`/${Router.query.lang}/intelligence/${country.country_name}`}
                            >
                              {country.country_name}
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
                        ))
                    : countriesList?.countries?.map((country: any) => (
                        <li>
                          <Link
                            href={`/${Router.query.lang}/intelligence/${country.country_name}`}
                          >
                            {country.country_name}
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
                <span
                  className="showMoreDetails"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {!showMore ? "Show More" : "Show Less"}
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let recentReport = await fetchData(`home/latest-report-list`);
  let CountryList = await fetchData(`home/countries-list`);
  let blogPostList = await fetchData(`intelligence/espanol`);
  let Report = await fetchtDataV3(
    `/api/workstation/research-details/${context?.query.id}`
  );
  return {
    props: {
      // blogPost: blogPost || null,
      blogPostList: blogPostList || null,
      recentReport: recentReport,
      IntelligenceReport: Report.data,
      Report: Report.data || null,
      countriesList: CountryList.data || null,
    },
  };
};

export default Index;
