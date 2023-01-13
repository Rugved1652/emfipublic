import Image from "next/image";
import React from "react";
import styles from "../../styles/HeroTextArea.module.scss";
import readMoreArrow from "../../Assets/read-more-arrow.png";
import moment from "moment";
import { sanitize } from "dompurify";

type Props = {};

function HeroTextArea({ title, date, description, subHeading }: any) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHead}>
        <h2 className={styles.heroHeadText}>
          {title}: <span>{moment(date).format("MMMM DD, YYYY")}</span>
        </h2>
        <h4 className={styles.heroHeadSubText}>Flash Note:{subHeading}</h4>
      </div>
      <div
        className={styles.heroPara}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className={styles.heroCTA}>
        Read More{" "}
        <Image
          className={styles.readMoreIcon}
          width={14}
          height={12}
          alt="Read more"
          src={readMoreArrow}
        />
      </div>
    </div>
  );
}

export default HeroTextArea;
