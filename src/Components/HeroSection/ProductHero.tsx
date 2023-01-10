import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import WavyText from "../WavyText/WavyText";

type Props = {
  image?: string;
  data?: any;
};

const ProductHero = ({ image, data }: Props) => {
  const div1: any = useRef();
  const div2: any = useRef();
  const div3: any = useRef();

  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [third, setthird] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setfirst(1);
    }, 800);
    setTimeout(() => {
      setsecond(1);
    }, 2800);
    setTimeout(() => {
      setthird(1);
    }, 4800);
  }, []);

  return (
    <div>
      <div className="wrapperAnimation">
        <div id="wrapper">
          {first ? (
            <div style={{ display: "flex" }}>
              <div
                className="heading animatable"
                style={{ position: "relative" }}
              >
                <p style={{ visibility: "hidden", position: "absolute" }}>
                  EMERGENING
                </p>{" "}
                <div className="textAnimation">EMERGENING</div>
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
                  EMERGENING
                </p>{" "}
                <div className="textAnimationReverse">EMERGENING</div>
              </div>
            </div>
          ) : null}

          {/* {second ? (
            <div style={{ display: "flex" }}>
              <div className="heading animatable">
                <p style={{ visibility: "hidden", position: "relative" }}>
                  EMERGENING
                </p>{" "}
                <div className="textAnimation" style={{ position: "absolute" }}>
                  EMERGENING
                </div>
              </div>
            </div>
          ) : null}
          {third ? (
            <div style={{ display: "flex" }}>
              <div className="heading animatable">
                <p style={{ visibility: "hidden", position: "relative" }}>
                  EMERGENING
                </p>{" "}
                <div className="textAnimation" style={{ position: "absolute" }}>
                  EMERGENING
                </div>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
