import React, { useState } from "react";
import styles from "../../styles/TextInputComponent.module.scss";

type Props = {
  label?: string;
  text?: string;
  setText?: (arg0: any) => void;
};

const TextInputComponent = ({ label, setText }: Props) => {
  const [value, setValue] = useState(null);
  return (
    <div className={styles.inputContainer}>
      <input
        value={value ? value : ""}
        // className="w-full border border-[#e5e5e5] focus:ring-0 animate-none focus:border-secondaryBg input-item"
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
