import Image from "next/image";
import React from "react";
import { AboutEmfiContent } from "../../constants/information";
import styles from "../../styles/AboutEmfi.module.scss";
import {AttentionSeeker} from 'react-awesome-reveal';
type Props = {};

const AboutEmfi = (props: Props) => {
  return (
    <AttentionSeeker effect="headShake">
    <div className={styles.aboutEmfi}>
      <div>
        {AboutEmfiContent.map((content, index) => (
          <div
            className={`${styles.aboutEmfiSection} ${
              index % 2 === 0 ? styles.odd : styles.even
            }`}
          >
            <div className={styles.textContainer}>
                <h2>{content.title}</h2>
                {content.paragraph.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
            </div>            
            <div className={styles.imageContainer}>
              <Image className={'aboutImage'} src={content.image} alt={"alt"} width={100} height={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </AttentionSeeker>
  );
};

export default AboutEmfi;
