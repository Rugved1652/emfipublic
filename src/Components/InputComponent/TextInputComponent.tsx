import React, { useState } from "react";
import styles from "../../styles/TextInputComponent.module.scss";

type Props = {
  label?: string;
  text?: string;
  setText?: (arg0: any) => void;
};

const TextInputComponent = ({ label, setText }: Props) => {
  const [first, setfirst] = useState(null);
  return (
    <div className={styles.inputContainer}>
      <input
        value={first ? first : ""}
        className="w-full border border-[#e5e5e5] focus:ring-0 animate-none focus:border-secondaryBg input-item"
        type="text"
        onChange={(e: any) => setfirst(e.target.value)}
      />
      <label className={first ? styles.filled : ""} htmlFor={"userName"}>
      Label
      </label>
    </div>
  );
};

export default TextInputComponent;
