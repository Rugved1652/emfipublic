import React from "react";
import { Accordion } from "react-bootstrap";
import AccordianComponent from "../../Components/AccordianComponent/AccordianComponent";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";

type Props = {};

const intelligence = (props: Props) => {
  return (
    <div className="container">
       <HeroSearch
        heading="Intelligence"
        subHeading="November 17, 2022"
        placeholder="Search by Keyword"
      />
      <div className="intelligenceBoxCustom d-flex gap-4">
        <AccordianComponent />
        <AccordianComponent />
      </div>
    </div>
  );
};

export default intelligence;
