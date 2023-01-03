import React from "react";
import styles from "../../styles/AboutHero.module.scss";

type Props = {
  image: string;
  data: any;
};

const AboutHero = ({ image, data }: Props) => {
  return (
    <div className={styles.textContainer}>
      {data.data.map((i: any) => (
        <p>{i}</p>
      ))}
    </div>
  );
};

export default AboutHero;
