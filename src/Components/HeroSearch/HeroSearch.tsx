import React, { useEffect, useState, useRef } from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "../../styles/HeroSearch.module.scss";
import { search } from "../../../helper";
import { useOnClickOutside } from "../../hooks/useOnclickOutSide";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const [viewList, setViewList] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchValue !== undefined && searchValue !== "") {
      const result: any = search(data, searchValue, searchKeyname);
      console.log("result", result);
      setViewList(result);
    }
  }, [searchValue]);

  const refinst = useRef<any>();
  useOnClickOutside(refinst, () => {
    setShow(false);
  });

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const Router = useRouter();

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
              focus={setShow}
              placeholder={placeholder}
              handleChange={handleChange}
            />
            {show ? (
              <ul className="searchBoxList">
                {viewList?.map((i: any, index: any) => (
                  <li key={index}>
                    <Link href={`/${Router.query.lang}/${i.Link}`}>
                      {i[searchKeyname]}
                    </Link>
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
