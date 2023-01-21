import React from "react";
import styles from "../../../styles/Services.module.scss";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import ServiceCard from "../../../Components/Cards/ServiceCard/ServiceCard";
import {
  DetailsListEN,
  DetailsListES,
  ProductContentEN,
  ProductContentES,
  servicepageEN,
  servicepageES,
  ServicesContentEN,
  ServicesContentES,
} from "../../../constants/serviceContent";
import Link from "next/link";
import { Flip, Fade } from "react-awesome-reveal";
import { fetchData } from "../../../Services/apiFunction";
import { useRouter } from "next/router";
type Props = {};

const Services = ({
  serviceContent,
  productContent,
  PageInfo,
  DetailsList,
}: any) => {
  const Router = useRouter();
  return (
    <div className="container">
      <HeroSearch
        heading={PageInfo.heading}
        subHeading={PageInfo.subHeading}
        placeholder={PageInfo.placeholderText}
        data={PageInfo.serviceList}
        searchKeyname="label"
        sup="1"
      />
      <div className={styles.serviceCardGroupMain}>
        <div className={styles.serviceCardGroup}>
          <Flip triggerOnce={true} direction={"vertical"} duration={1500}>
            {serviceContent.map((service: any) => (
              <div className="border-ani">
                <span>
                  <Link href={service.link}>
                    <ServiceCard
                      image={service.image}
                      heading={service.heading}
                      subHeading={service.subheading}
                      sup={service.sup}
                    />
                  </Link>
                </span>
              </div>
            ))}
          </Flip>
        </div>
        <div className={styles.serviceCardGroup}>
          <Flip triggerOnce={true} direction={"vertical"} duration={1500}>
            {productContent.map((product: any) => (
              <div className="border-ani">
                <span>
                  <Link href={product.link} className="serviceElogoBox">
                    <ServiceCard                     
                      image={product.image}
                      subHeading={product.subheading}
                      sup={product.sup}
                    />
                  </Link>
                </span>
              </div>
            ))}
          </Flip>
        </div>
      </div>
      <Fade triggerOnce={true} direction="up" duration={1500}>
        <div className={styles.listGroup}>
          {DetailsList.map((details: string) => (
            <li>{details}</li>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "english" } }, { params: { lang: "espanol" } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  if (params?.lang === "espanol") {
    return {
      props: {
        serviceContent: ServicesContentES,
        productContent: ProductContentES,
        DetailsList: DetailsListES,
        PageInfo: servicepageES,
      },
    };
  } else if (params?.lang === "english") {
    return {
      props: {
        serviceContent: ServicesContentEN,
        productContent: ProductContentEN,
        DetailsList: DetailsListEN,
        PageInfo: servicepageEN,
      },
    };
  }
};

export default Services;
