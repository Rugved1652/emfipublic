import React, { useState } from "react";
import styles from "../../styles/TextAreaComponent.module.scss";

type Props = {
  label?: string;
  text?: string;
  setText?: (arg0: any) => void;
};

const TextAreaInputComponent = ({ label, setText }: Props) => {
  const [first, setfirst] = useState(null);
  return (
    <div className={styles.inputContainer}>
      <textarea
        value={first ? first : ""}
        onChange={(e: any) => setfirst(e.target.value)}
        name=""
        id=""
        cols={30}
        rows={4}
      ></textarea>
      <label className={first ? styles.filled : ""} htmlFor={""}>
        Label
      </label>
    </div>
  );
};

export default TextAreaInputComponent;
