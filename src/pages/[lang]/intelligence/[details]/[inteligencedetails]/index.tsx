import React, { useEffect, useState } from "react";
import HeroSearch from "../../../../../Components/HeroSearch/HeroSearch";
import styles from "../../../../../styles/Details.module.scss";
import LinkedInIconWhite from "../../../../../Components/Icons/LinkedInIconWhite";
import FacebookIconWhite from "../../../../../Components/Icons/FacebookIconWhite";
import TwiterIconWhite from "../../../../../Components/Icons/TwiterIconWhite";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { saveAs } from "file-saver";
import { Fade } from "react-awesome-reveal";
import {
  fetchData,
  fetchDataV1,
  fetchtDataV3,
  postDataV1,
} from "../../../../../Services/apiFunction";
import moment from "moment";
import { res } from "../../../../../constants/intelligenceRes";
import Image from "next/image";
import { useRouter } from "next/router";
import { data } from "jquery";

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
  // const [] = useState(true);

  const Router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("gtti");
    console.log("storage", storage);
    if (!storage) {
      window.location.href = "https://login.emfi.uk";
    }
  }, []);

  const downLoadReport = async (data: any) => {
    const res = await postDataV1(`/download-report-pdf`, {
      lang: "es",
      report_id: data.id,
    });
    if (res.data.status === 1) {
      console.log(res, "res");
      window.open(res.data.report_url);
    }
    //     msg
    // :
    // "Report has been downloaded successfully."
    // report_url
    // :
    // "https://emfi-uat.s3.amazonaws.com/es_pdf/EMFI_Egypt_20230104.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLWVhc3QtMSJGMEQCIDTOSfASHgzlZZ9FI7FYGoV4t9Dc2GqFYXcKdUCFRIXkAiBWHxmFA176qFrCcrBEqBluEoKN51cx91R2bFdZlKw1QyrwAwjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDk0OTAyMDgzMjA4MCIMHKsNmEwllRUUwVM6KsQDZcJof%2BvoylyLv9HNq04eqFkXuz5flQ7yfx2e%2Bhq0IKlTGcoYQ%2BzPVuoheBR2GbT1Pn4eGs3D9%2B3rchhXnoKfOI0Gx%2FINp09qhoY0S%2BLEU%2BfzaHqZXndwkE%2Bq%2FYJyZbMVnPNenSDpXQvObA%2FcO33GetBoUejFZJLJkuJIWNCmhDxuF%2B%2Fsx%2FyP8wGsYYG%2FpNc5fgpbQc4OxXFUaKnFKoQ9oebaPBqficQ41akPueArSiRa8b8RpMomLeRcPPH2QNZvRFMMiQv37EhKxczQP4LFTvUB1%2FRxhkO633Y6pDEoNczPgnx0nyF2ylWgNRgVmHH%2B9nEt47eoIFVQ%2B472p33Gzmr2L9qxG1GGlbdJKDbg8epfQG%2Fceae2MF6z3ZOeS0G%2FyJe%2B9H5ifthjXOYc6ulMaQ0OuBSR5xkgtonOS1PrTtOjhNTWRF9u0EoTca2kUo5Zf6CiR8N8kn0%2BMCt9gK9wcHptkioZZi3eUb%2B1uVKXBAR6SEK5kP4FvbKVVRPm4jDET23v%2BH0D6lslRQxcZ61garZbnfd7bRBT2CzcQN%2Bm%2BS%2BodDnxebyO1SLORwluET95zUbcarr3vxf1peJzZOuV2a9IbXAwp%2Fm9ngY6pgEMsShclIYeEH7Itkt5w0pl1EqQ%2BScaTcGDhE5ywMRnNMspeh7bBDgj2OgUlRCYSuwOXZdJpkv2lndx5%2FW70vp688MiXoE9FgWp%2Fryqpz%2Bw5JkXSC3jQnUOgSe%2FPkGJoFWZnSrdDqYoOhXz%2BQpDd%2FAk4sejCm%2BreaBB3f1jbSvD6xf6TmVD%2F%2BxsZnXYV5XG7Eec2%2BQ2YjuwX4oLRMHZ0Exyf59dtqHJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5Z5QMWFIJLKPU5XO%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230124T064433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=4604af0e99e2d4fed4b39e2588bc87672917abdc2942d37e312959f6bb96e2a4"
    // status
    // :
    // 1
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
          <Fade
              triggerOnce={true}
              direction="up"
              duration={1500}
            >
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
                  <table>
                    <thead>
                      <tr>
                        <th>Security</th>
                        <th>Ask Price</th>
                        <th>Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {IntelligenceReport.data.sovereign_data.map(
                        (data: any) => (
                          <tr>
                            <td>{data.security_name}</td>
                            <td>{data.ask_price}</td>
                            <td>{data.bid_price}</td>
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
          <Fade
              triggerOnce={true}
              direction="right"
              duration={1500}
            >
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
                <span className="showMoreDetails" onClick={() => setShowMore((prev) => !prev)}>
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
