import React from "react";
import styles from "../../styles/HeaderText.module.scss";

type Props = {};

const HeaderText = (props: Props) => {
  return (
    <div className={styles.Headergroup}>
      <h4>Market Price</h4> <h6>Credit</h6>
    </div>
  );
};

export default HeaderText;
