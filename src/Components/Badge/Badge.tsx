import React from "react";
import styles from "../../styles/Badge.module.scss";

type Props = {
  title: string;
  isActive: boolean;
};

const Badge = ({ title, isActive }: Props) => {
  return (
    <span className={isActive ? styles.activeBadge : styles.Badge}>
      {title}
    </span>
  );
};

export default Badge;
