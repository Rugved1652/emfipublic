import Image from "next/image";
import React, { useState, useEffect } from "react";
import EBondIcon from "../Icons/EBondIcon";
import EMFILogo from "../Icons/EMFILogo";

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
    <div>
      <div className="wrapperAnimation">
        <div id="wrapper">
          {isProductHero ? (
            <>
              {first ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatable"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data.slideText}
                    </p>
                    <div className="textAnimation">
                      <Image
                        src={data.Productimage}
                        width={200}
                        height={200}
                        alt={"sss"}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {second ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatableReverse"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data.slideText} <EMFILogo />
                    </p>
                    <div className="textAnimationReverse">
                      {data.slideText} <EMFILogo />
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <>
              {first ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatable"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data.slideText1}
                    </p>
                    <div className="textAnimation"> {data.slideText1}</div>
                  </div>
                </div>
              ) : null}
              {second ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatableReverse"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data.slideText2}
                    </p>
                    <div className="textAnimationReverse">
                      {data.slideText2}
                    </div>
                  </div>
                </div>
              ) : null}
              {third ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatable"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data?.slideText3}
                    </p>
                    <div className="textAnimation"> {data?.slideText3}</div>
                  </div>
                </div>
              ) : null}
              {forth ? (
                <div style={{ display: "flex" }}>
                  <div
                    className="heading animatableReverse"
                    style={{ position: "relative" }}
                  >
                    <p style={{ visibility: "hidden", position: "absolute" }}>
                      {data.slideText4}
                    </p>
                    <div className="textAnimationReverse">
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
