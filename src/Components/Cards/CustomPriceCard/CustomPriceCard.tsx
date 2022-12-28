import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import {AttentionSeeker, Flip, Slide} from 'react-awesome-reveal';
import DiractionArrow from "../../Icons/DiractionArrow";
import styles from "../../../styles/PriceCard.module.scss";

type Props = {};

const PriceCard = (props: Props) => {
  return (
    <Flip triggerOnce={true} direction={"vertical"} duration={1500}>
      <div className="border-ani">
        <span>
          <div className={styles.cardWrapper}>
          <CustomCard>
            <CustomCard.Header>
              <span className={styles.cardHeader}>US 10-Year</span>
            </CustomCard.Header>
            <CustomCard.Body>
              <p className={styles.cardBody}>4.000</p>
            </CustomCard.Body>
            <CustomCard.Footer>
              <div className={styles.cardFooterWrapper} style={{}}>
                <div className={styles.cardFooter}>
                  <div className={styles.footerItem}>
                    <DiractionArrow />
                  </div>
                  <div className={styles.footerItem}>
                    <p>
                      <b>-0.194</b>
                    </p>
                    <p>
                      <b>0%</b>
                    </p>
                  </div>
                </div>
                </div>
              </CustomCard.Footer>
            </CustomCard>
          </div>
        </span>
      </div>
    </Flip>
  );
};

export default PriceCard;
