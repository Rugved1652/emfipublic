import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import AccordianComponent from "../../../Components/AccordianComponent/AccordianComponent";
import HeroSearch from "../../../Components/HeroSearch/HeroSearch";
import { fetchData } from "../../../Services/apiFunction";
import { useRouter } from "next/router";

type Props = {
  intelligenceList: any;
  otherReports: any;
  specialReports: any;
};

const Intelligence = ({ intelligenceList }: Props) => {
  const router = useRouter();

  const fetchMoreOtherReports = async () => {
    const res: any = await fetchData(
      `intelligence/${router?.query.lang}/get-other-report?page=${otherReportsPageNum}`
    );
    console.log("res?.data?.sliders", res);
    if (res) {
      setotherReportsData((prev: any) => [...prev, ...res?.data?.sliders]);

      if (res?.data?.pagination?.next) {
        setotherReportsDataPageNum(res?.data?.pagination?.next);
        setotherReportsHasMore(true);
      } else {
        setotherReportsDataPageNum(0);
        setotherReportsHasMore(false);
      }
    }
    console.log(res);
  };

  const fetchMoreSpecialReports = async () => {
    const res: any = await fetchData(
      `intelligence/${router?.query.lang}/get-spacial-report?page=${specialReportPageNum}`
    );
    console.log("res?.data?.sliders", res);
    if (res) {
      setspecialReportsData((prev: any) => [...prev, ...res?.data?.sliders]);

      if (res?.data?.pagination?.next) {
        setspecialReportsPageNum(res?.data?.pagination?.next);
        setspecialReportsHasMore(true);
      } else {
        setspecialReportsPageNum(0);
        setspecialReportsHasMore(false);
      }
    }
    console.log(res);
  };

  useEffect(() => {
    fetchMoreOtherReports();
    fetchMoreSpecialReports();
  }, []);

  const [otherReportsPageNum, setotherReportsDataPageNum] = useState(1);
  const [specialReportPageNum, setspecialReportsPageNum] = useState(1);
  const [otherReportsHasMore, setotherReportsHasMore] = useState(false);
  const [specialReportsHasMore, setspecialReportsHasMore] = useState(false);
  const [otherReportsData, setotherReportsData] = useState<any[]>([]);
  const [specialReportsData, setspecialReportsData] = useState<any[]>([]);

  return (
    <div className="container">
      <HeroSearch
        heading="Intelligence"
        subHeading="November 17, 2022"
        placeholder="Search by Keyword"
        data={intelligenceList.data.reports_list}
        searchKeyname="title"
      />
      <div className="intelligenceBoxCustom row">
        <AccordianComponent
          data={otherReportsData}
          fetchMore={fetchMoreOtherReports}
          hasMore={otherReportsHasMore}
        />
        <AccordianComponent
          data={specialReportsData}
          fetchMore={fetchMoreSpecialReports}
          hasMore={specialReportsHasMore}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let intelligenceList = await fetchData(
    `intelligence/${context?.params.lang}`
  );
  return {
    props: {
      intelligenceList: intelligenceList || null,
    },
  };
};

export default Intelligence;
