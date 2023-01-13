import Image from "next/image";
import React, { useState, useEffect } from "react";
import EBondIcon from "../Icons/EBondIcon";
import EMFILogo from "../Icons/EMFILogo";
import styles from "../../styles/ProductHero.module.scss";
type Props = {
  image?: string;
  data?: any;
  isProductHero?: boolean;
};

const ProductHero = ({ image, data, isProductHero }: Props) => {
  const [slide, setSlide] = useState(0);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [forth, setForth] = useState(0);

  useEffect(() => {
    setSlide(0);
    setTimeout(() => {
      setFirst(1);
    }, 100);
    setTimeout(() => {
      setSecond(1);
    }, 2100);
    setTimeout(() => {
      setThird(1);
    }, 4100);
    setTimeout(() => {
      setForth(1);
    }, 6100);
    setTimeout(() => {
      setFirst(0);
      setSecond(0);
      setThird(0);
      setForth(0);
      setSlide(1);
    }, 10499);
  }, [slide]);

  return (
    <div className={styles.eSliderMain}>
      <div className="wrapperAnimation">
        <div id="wrapper" className={styles.marginZero}>
          {isProductHero ? (
            <>
              {first ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatable} ${styles.pRelative}  ${styles.eLogo}`}
                  >
                    <p className={styles.eSliderSliderText}>{data.slideText}</p>
                    <div className="textAnimation">
                      <div className={styles.textAnimation}>
                        <Image
                          src={data.Productimage}
                          width={200}
                          height={200}
                          alt={"E logo image"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {second ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatableReverse} ${styles.pRelative} ${styles.eLogoText}`}
                  >
                    <p className={styles.eSliderSliderText}>
                      {data.slideText} <Image
                          src={data.emfiLogo}
                          width={200}
                          height={200}
                          alt={"EMFI logo"}
                        /> 
                    </p>
                    <div className={styles.textAnimationReverse}>
                      {data.slideText}  <Image
                          src={data.emfiLogo}
                          width={200}
                          height={200}
                          alt={"EMFI logo"}
                        /> 
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <>
              {first ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatable} ${styles.pRelative}`}
                  >
                    <p className={styles.eSliderSliderText}>
                      {data.slideText1}
                    </p>
                    <div className={styles.textAnimation}>
                      {data.slideText1}
                    </div>
                  </div>
                </div>
              ) : null}
              {second ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatableReverse} ${styles.pRelative}`}
                  >
                    <p className={styles.eSliderSliderText}>
                      {data.slideText2}
                    </p>
                    <div className={styles.textAnimationReverse}>
                      {data.slideText2}
                    </div>
                  </div>
                </div>
              ) : null}
              {third ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatable} ${styles.pRelative}`}
                  >
                    <p className={styles.eSliderSliderText}>
                      {data?.slideText3}
                    </p>
                    <div className={styles.textAnimation}>
                      {" "}
                      {data?.slideText3}
                    </div>
                  </div>
                </div>
              ) : null}
              {forth ? (
                <div className={styles.dFlex}>
                  <div
                    className={`${styles.heading} ${styles.animatableReverse} ${styles.pRelative}`}
                  >
                    <p className={styles.eSliderSliderText}>
                      {data.slideText4}
                    </p>
                    <div className={styles.textAnimationReverse}>
                      {data.slideText4}
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
