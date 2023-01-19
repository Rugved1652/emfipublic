import Image from "next/image";
import React from "react";
import style from "../../../styles/ServiceCard.module.scss";

type Props = {
  image: string;
  heading?: string;
  subHeading?: string;
  sup?: string;
};

const ServiceCard = ({ image, heading, subHeading, sup }: Props) => {
  return (
    <div className={style.ServiceCard}>
      <div>
        <Image src={image} alt="" />
      </div>
      <h2 className={style.heading}>{heading}</h2>
      <p className={style.subHeading}>{subHeading}<sup>{sup}</sup></p>
    </div>
  );
};

export default ServiceCard;
