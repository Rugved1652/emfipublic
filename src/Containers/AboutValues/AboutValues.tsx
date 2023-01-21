import Image from "next/image";
import React from "react";
import { infoSectionContentEN } from "../../constants/information";
import styles from "../../styles/AboutEmfi.module.scss";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import EmfiText from "../../Assets/emfi-text.svg";
type Props = {
  infoSectionContent: any;
};

const AboutValues = (infoSectionContent: Props) => {
  return (
    <div className={styles.aboutEmfi}>
      <div>
        {infoSectionContentEN.map((content, index) => (
          <Fade
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
                  {content.title}{" "}
                  {content.isImage ? (
                    <Image
                      className="emfiText"
                      src={EmfiText}
                      width={200}
                      height={30}
                      alt={"emfitext"}
                    />
                  ) : null}
                </h2>
                {content.paragraphs.map((paragraph) => (
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

export default AboutValues;
