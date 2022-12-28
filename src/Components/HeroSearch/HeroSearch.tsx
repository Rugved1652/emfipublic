import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "../../styles/HeroSearch.module.scss";

type Props = {
  heading: string;
  subHeading: string;
  placeholder: string;
};

const HeroSearch = ({ heading, subHeading, placeholder }: Props) => {
  return (
    <div className={styles.HeroSearchWrapper}>
      <div>
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
      </div>
      <InputComponent placeholder={placeholder} />
    </div>
  );
};

export default HeroSearch;
