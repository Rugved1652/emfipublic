import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import AccordianComponent from "../../../Components/AccordianComponent/AccordianComponent";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../../Services/apiFunction";
import { IntelligenceData } from "../../../constants/intelligenceInfo";

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
  useEffect(() => {}, []);

  console.log("otherReports", otherReports);
  console.log("specialReports", specialReports);
  console.log("intelligenceList", intelligenceList);
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
  let otherReports = await fetchData(
    `intelligence/${context?.params.lang}/get-other-report?page=1`
  );
  let specialReports = await fetchData(
    `intelligence/${context?.params.lang}/get-spacial-report?page=1`
  );
  let intelligenceList = await fetchData(
    `intelligence/${context?.params.lang}`
  );
  return {
    props: {
      otherReports: otherReports,
      specialReports: specialReports,
      intelligenceList: intelligenceList || null,
    },
  };
};

export default intelligence;
