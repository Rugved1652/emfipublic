import React from "react";
import styles from "../../../styles/CustomCard.module.scss";

type Props = {};

const CustomCard = ({ children }: any) => {
  return <div className={styles.CardWrapper}>{children}</div>;
};

CustomCard.Header = (props: any) => (
  <div className={styles.Head}>{props.children}</div>
);
CustomCard.Body = (props: any) => (
  <div className={styles.Body}>{props.children}</div>
);
CustomCard.Footer = (props: any) => (
  <div className={styles.Footer}>{props.children}</div>
);

export default CustomCard;
