import React from "react";
import styles from "../../../styles/Services.module.scss";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import ServiceCard from "../../../Components/Cards/ServiceCard/ServiceCard";
import {
  DetailsList,
  ProductContent,
  ServicesContent,
} from "../../../constants/serviceContent";
import Link from "next/link";
import {AttentionSeeker, Flip, Slide} from 'react-awesome-reveal';
type Props = {};

const services = (props: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading="EMFI GROUP"
        subHeading="United Kingdom"
        placeholder="Services"
      />
      <div className={styles.serviceCardGroupMain}>
        <div className={styles.serviceCardGroup}>
        <Flip direction={"vertical"} duration={1500}>
          {ServicesContent.map((service) => (
            <div className="border-ani">
            <span>
            <Link href={service.en_link}>
              <ServiceCard
                image={service.image}
                heading={service.heading}
                subHeading={service.subheading}
              />
            </Link>
            </span>
              </div>
          ))}
          </Flip>
        </div>
        <div className={styles.serviceCardGroup}>
          <Flip direction={"vertical"} duration={1500}>            
            {ProductContent.map((product) => (
              <div className="border-ani">
              <span>
              <Link href={product.en_link}>
                <ServiceCard
                  image={product.image}
                  subHeading={product.subheading}
                />
              </Link>
              </span>
              </div>
            ))}
          </Flip>
        </div>
      </div>
      <AttentionSeeker effect="headShake">
      <div className={styles.listGroup}>
        {DetailsList.map((details) => (
          <li>{details}</li>
        ))}
      </div>
      </AttentionSeeker>
    </div>
  );
};

export default services;
