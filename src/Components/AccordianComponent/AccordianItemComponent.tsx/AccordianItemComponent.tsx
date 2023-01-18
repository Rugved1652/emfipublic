import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LineChartComponent from "../../Charts/LineChartComponent/LineChartComponent";

type Props = {};

const AccordianItemComponent = ({ data, reportSlug, reportId }: any) => {
  const Router = useRouter();
  return (
    <div>
      <div>
        <div className="mb-4" style={{ width: "100%", height: "40vh" }}>
          <LineChartComponent />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
        <Link className="intelligenceReadMore"
          href={`/english/intelligence/details/${reportSlug}?id=${reportId}`}
        >
          Continue Reading
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default AccordianItemComponent;
