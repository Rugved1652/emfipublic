import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "../../styles/HeroSearch.module.scss";

type Props = {
  heading: string;
  subHeading: string;
  placeholder: string;
  data?: any;
};

const HeroSearch = ({ heading, subHeading, placeholder, data }: Props) => {
  return (
    <div className={styles.HeroSearchWrapper}>
      <div>
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
      </div>
      <div>
        <div style={{ position: "relative", width: "100%" }}>
          <InputComponent placeholder={placeholder} />
          {data &&
            data.map((i) => (
              <ul style={{ position: "absolute" }}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
