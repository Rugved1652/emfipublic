import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DoubleLineChartComponent from "../../Charts/LineChartComponent/DoubleLineChartComponent";
import LineChartComponent from "../../Charts/LineChartComponent/LineChartComponent";

type Props = {};

const AccordianItemComponent = ({
  chartData,
  data,
  reportSlug,
  reportId,
}: any) => {
  console.log(chartData, "idata");
  const Router = useRouter();
  return (
    <div>
      <div>
        <div className="mb-4" style={{ width: "100%" }}>
          {/* <LineChartComponent chartData={data.chart_data?.history_data} /> */}

          <DoubleLineChartComponent
            chartData={chartData?.benchmark_history_data}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.slice(0, 650) }}></div>
        <Link
          className="intelligenceReadMore"
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
