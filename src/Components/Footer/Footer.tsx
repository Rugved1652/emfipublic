import Link from "next/link";
import React from "react";
import { FooterRoutes } from "../../constants/routes";
import styles from "../../styles/Footer.module.scss";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
type Props = {};

const Footer = (props: Props) => {
  const Router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className="container-md">
        <Fade triggerOnce={true} direction="up">
          <div className={`row ${styles.footerBgColor}`}>
            <div className="col-12 col-lg-4 col-xl-4 mb-5 mb-xl-0">
              <div className="row">
                <div className="col-12 col-sm-6 mb-5 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {Router.query.lang === "espanol"
                        ? FooterRoutes.Products.es_label
                        : FooterRoutes.Products.en_label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Products.Routes.map((i) => (
                        <li
                          key={i.id}
                          className={`${styles.sectionListItem} ${styles.eIcon}`}
                        >
                          <Link
                            href={
                              Router.query.lang === "espanol"
                                ? i.es_Link
                                : i.en_Link
                            }
                            title=""
                          >
                            <i.icon isWhite={true} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-0 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {Router.query.lang === "espanol"
                        ? FooterRoutes.Services.es_label
                        : FooterRoutes.Services.en_label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Services.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link
                            href={
                              Router.query.lang === "espanol"
                                ? i.es_Link
                                : i.en_Link
                            }
                          >
                            {Router.query.lang === "espanol"
                              ? i.es_label
                              : i.en_label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-4 mb-5 mb-xl-0">
              <div className="row">
                <div className="col-12 col-sm-6 mb-5 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {Router.query.lang === "espanol"
                        ? FooterRoutes.Regulatory.es_label
                        : FooterRoutes.Regulatory.en_label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Regulatory.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link
                            href={
                              Router.query.lang === "espanol"
                                ? i.es_Link
                                : i.en_Link
                            }
                          >
                            {Router.query.lang === "espanol"
                              ? i.es_label
                              : i.en_label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-0 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {Router.query.lang === "espanol"
                        ? FooterRoutes.Legal.es_label
                        : FooterRoutes.Legal.en_label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Legal.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link
                            href={
                              Router.query.lang === "espanol"
                                ? i.es_Link
                                : i.en_Link
                            }
                            title=""
                          >
                            {Router.query.lang === "espanol"
                              ? i.es_label
                              : i.en_label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-4 pb-4 pb-sm-0">
              <div className={styles.footerBottom}>
                <ul className={styles.footerBottomSection}>
                  {FooterRoutes.Social.Routes.map((i) => (
                    <li key={i.id} className={styles.footericon}>
                      <Link href={i.Link} title="">
                        <i.icon />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className={styles.footerText}>
                  {Router.query.lang === "espanol"
                    ? FooterRoutes.Social.footerTextES
                    : FooterRoutes.Social.footerTextEN}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
