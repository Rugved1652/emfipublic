import { GetServerSideProps } from "next";
import React from "react";
import { Accordion } from "react-bootstrap";
import AccordianComponent from "../../Components/AccordianComponent/AccordianComponent";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../Services/apiFunction";

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

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const intelligenceList = await fetchData(
    `intelligence/${context?.params.lang}`
  );
  const otherReports = await fetchData(
    `intelligence/${context?.params.lang}/get-other-report?page=${context.pageNum}`
  );
  const specialReports = await fetchData(
    `intelligence/${context?.params.lang}/get-spacial-report?page=${context.pageNum}`
  );
  return {
    props: {
      intelligenceData: intelligenceList,
      otherReports: otherReports,
    },
  };
};

export default intelligence;
