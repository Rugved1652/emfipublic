import Link from "next/link";
import React from "react";
import { FooterRoutes } from "../../constants/routes";
import styles from "../../styles/Footer.module.scss";
import {Fade} from 'react-awesome-reveal';
type Props = {};

const Footer = (props: Props) => {
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
                      {FooterRoutes.Products.label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Products.Routes.map((i) => (
                        <li
                          className={`${styles.sectionListItem} ${styles.eIcon}`}
                        >
                          <Link href={i.Link} title="">
                            <i.icon />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-0 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {FooterRoutes.Services.label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Services.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link href={i.Link}>
                            {i.lable}
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
                      {FooterRoutes.Regulatory.label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Regulatory.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link href={i.Link} title="">
                            {i.lable}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mb-0 mb-sm-0">
                  <div className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                      {FooterRoutes.Legal.label}
                    </h3>
                    <ul className={styles.sectionList}>
                      {FooterRoutes.Legal.Routes.map((i) => (
                        <li className={styles.sectionListItem} key={i.id}>
                          <Link href={i.Link} title="">
                            {i.label}
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
                    <li className={styles.footericon}>
                      <a href="javascript:void(0);" title="">
                        <i.icon />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className={styles.footerText}>
                  {FooterRoutes.Social.footerText}
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
