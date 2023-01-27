import React from "react";
import styles from "../../styles/InputComponent.module.scss";
import SearchIcon from "../Icons/SearchIcon";

type Props = {
  placeholder?: string;
  handleChange?: Function;
  focus?: Function;
};

const InputComponent = ({
  placeholder,
  handleChange = () => {},
  focus = () => {},
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <input
        // onBlur={() => focus(false)}
        onFocus={() => focus(true)}
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
