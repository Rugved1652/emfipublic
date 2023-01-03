import Image from "next/image";
import React from "react";
import { AboutEmfiContent } from "../../constants/information";
import styles from "../../styles/AboutEmfi.module.scss";
import { Fade } from "react-awesome-reveal";
import EmfiText from "../../Assets/emfi-text.svg";

type Props = {
  aboutData: any;
};

const AboutEmfi = ({ aboutData }: Props) => {
  return (
    <div className={styles.aboutEmfi}>
      <div>
        {aboutData.map((content: any, index: any) => (
          <Fade
            key={content.id}
            className={styles.aboutEmfiSection}
            triggerOnce={true}
            direction="up"
            duration={1500}
          >
            <div
              className={`${styles.aboutEmfiSection} ${
                index % 2 === 0 ? styles.odd : styles.even
              }`}
            >
              <div className={`aboutTilte ${styles.textContainer}`}>
                <h2>
                  {content.title}
                  {content?.isImage ? (
                    <Image
                      className="emfiText"
                      src={EmfiText}
                      width={200}
                      height={30}
                      alt={"emfitext"}
                    />
                  ) : null}
                </h2>
                {content.paragraph.map((paragraph: string) => (
                  <p>{paragraph}</p>
                ))}
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={"aboutImage"}
                  src={content.image}
                  alt={"alt"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AboutEmfi;
