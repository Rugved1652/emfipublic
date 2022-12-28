import React from "react";
import styles from "../../styles/InputComponent.module.scss";
import SearchIcon from "../Icons/SearchIcon";

type Props = {
  placeholder: string;
};

const InputComponent = ({ placeholder }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder={placeholder} name="" id="" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputComponent;
