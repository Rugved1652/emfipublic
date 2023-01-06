import { GetServerSideProps } from "next";
import React, { useState } from "react";
import AccordianComponent from "../../Components/AccordianComponent/AccordianComponent";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../Services/apiFunction";
import { IntelligenceData } from "../../constants/intelligenceInfo";

type Props = {
  intelligenceList: any;
  otherReports: any;
  specialReports: any;
};

const intelligence = ({
  intelligenceList,
  otherReports,
  specialReports,
}: Props) => {
  console.log("otherReports", otherReports);
  const [PageNum, setPageNum] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  return (
    <div className="container">
      <HeroSearch
        heading="Intelligence"
        subHeading="November 17, 2022"
        placeholder="Search by Keyword"
      />
      <div className="intelligenceBoxCustom d-flex gap-4">
        <AccordianComponent data={otherReports} />
        <AccordianComponent data={specialReports} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // const intelligenceList = await fetchData(
  //   `intelligence/${context?.params.lang}`
  // );
  // const otherReports = await fetchData(
  //   `intelligence/${context?.params.lang}/get-other-report?page=${context?.pageNum}`
  // );
  // const specialReports = await fetchData(
  //   `intelligence/${context?.params.lang}/get-spacial-report?page=${context?.pageNum}`
  // );
  return {
    props: {
      intelligenceList: null,
      otherReports: IntelligenceData?.data,
      specialReports: IntelligenceData?.data,
    },
  };
};

export default intelligence;
