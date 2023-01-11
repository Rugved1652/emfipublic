import React, { useEffect, useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "../../styles/HeroSearch.module.scss";
import { search } from "../../../helper";

type Props = {
  heading: string;
  subHeading: string;
  placeholder: string;
  data?: any;
  searchKeyname?: string;
};

const HeroSearch = ({
  heading,
  subHeading,
  placeholder,
  data,
  searchKeyname = "",
}: Props) => {
  const [viewList, setViewList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue !== undefined && searchValue !== "") {
      const result: any = search(data, searchValue, searchKeyname);
      console.log("result", result);
      setViewList(result);
    }
  }, [searchValue]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.HeroSearchWrapper}>
      <div>
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
      </div>
      <div style={{ width: "50%" }}>
        <div style={{ position: "relative", width: "100%" }}>
          <InputComponent
            placeholder={placeholder}
            handleChange={handleChange}
          />
          {viewList ? (
            <ul
              style={{
                width: "100%",
                position: "absolute",
                height: "300px",
                overflow: "auto",
                background: "#ffffff",
                marginTop: "8px",
              }}
            >
              {viewList?.map((i: any, index: any) => (
                <li key={index}>{i.title}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
