import { registerStyles } from "@emotion/utils";
import React, { useState } from "react";
import styles from "../../styles/TextAreaComponent.module.scss";

type Props = {
  label?: string;
  text?: string;
  setText?: (arg0: any) => void;
  register: any;
  inputRef: string;
};

const TextAreaInputComponent = ({
  label,
  setText,
  inputRef,
  register,
}: Props) => {
  const [first, setfirst] = useState(null);
  return (
    <div className={styles.inputContainer}>
      <textarea
        {...register(inputRef)}
        value={first ? first : ""}
        onChange={(e: any) => setfirst(e.target.value)}
        id=""
        cols={30}
        rows={4}
      ></textarea>
      <label className={first ? styles.filled : ""} htmlFor={""}>
        {label}
      </label>
    </div>
  );
};

export default TextAreaInputComponent;
