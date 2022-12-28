import React from "react";
import { sanitize } from "dompurify";
import styles from "../../styles/AboutHero.module.scss";
import EBondIcon from "../Icons/EBondIcon";

type Props = {
  image: string;
  data: any;
};

const AboutHero = ({ image, data }: Props) => {
  console.log(data);
  return (
    <div className={styles.textContainer}>
      <EBondIcon />
      <div dangerouslySetInnerHTML={{ __html: data.data }}></div>
      {image ? <div></div> : null}
    </div>
  );
};

export default AboutHero;
