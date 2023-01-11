import React from "react";
import styles from "../../styles/InputComponent.module.scss";
import SearchIcon from "../Icons/SearchIcon";

type Props = {
  placeholder: string;
  handleChange?: Function;
};

const InputComponent = ({ placeholder, handleChange = () => {} }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder={placeholder}
        name=""
        id=""
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputComponent;
