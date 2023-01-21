import React, { useEffect, useState, useRef } from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "../../styles/HeroSearch.module.scss";
import { search } from "../../../helper";
import { useOnClickOutside } from "../../hooks/useOnclickOutSide";

type Props = {
  heading: string;
  subHeading: string;
  placeholder?: string | null;
  data?: any;
  searchKeyname?: string;
  sup?: string;
};

const HeroSearch = ({
  heading,
  subHeading,
  placeholder,
  data,
  searchKeyname = "",
  sup,
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

  const refinst = useRef<any>();
  useOnClickOutside(refinst, () => {
    setViewList([]);
  });

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.HeroSearchWrapper}>
      <div>
        <h3>
          {heading}
          {sup ? <sup>{sup}</sup> : ""}
        </h3>
        <h4>{subHeading}</h4>
      </div>
      <div ref={refinst} style={{ width: "50%" }}>
        {placeholder ? (
          <div style={{ position: "relative", width: "100%" }}>
            <InputComponent
              placeholder={placeholder}
              handleChange={handleChange}
            />
            {viewList.length !== 0 ? (
              <ul className="searchBoxList">
                {viewList?.map((i: any, index: any) => (
                  <li key={index}>
                    <a href="javascript:void(0);">{i[searchKeyname]}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSearch;
