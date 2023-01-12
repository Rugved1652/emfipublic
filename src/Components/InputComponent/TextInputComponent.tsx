import { registerStyles } from "@emotion/utils";
import React, { useState } from "react";
import styles from "../../styles/TextInputComponent.module.scss";

type Props = {
  label?: string;
  text?: string;
  setText?: (arg0: any) => void;
  register?: any;
  inputRef?: any;
};

const TextInputComponent = ({ label, setText, register, inputRef }: Props) => {
  const [value, setValue] = useState(null);
  console.log(register);
  return (
    <div className={styles.inputContainer}>
      <input
        {...register(inputRef)}
        value={value ? value : ""}
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <label className={value ? styles.filled : ""} htmlFor={"userName"}>
        {label}
      </label>
    </div>
  );
};

export default TextInputComponent;
