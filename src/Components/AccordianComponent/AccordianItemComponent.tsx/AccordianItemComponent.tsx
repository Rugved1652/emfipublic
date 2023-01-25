import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ChartContainer from "../../../Containers/ChartContainer/ChartContainer";
import DoubleLineChartComponent from "../../Charts/LineChartComponent/DoubleLineChartComponent";
import LineChartComponent from "../../Charts/LineChartComponent/LineChartComponent";
import styles from "../../../styles/AccordianItem.module.scss";
import WorldMapChart from "../../Charts/WorldMapChart/WorldMapChart";
import { fetchData } from "../../../Services/apiFunction";

type Props = {};

const AccordianItemComponent = ({
  chartData,
  maptype,
  optionBanchMark,
  data,
  reportSlug,
  reportId,
  priceone,
  displaySubTitle,
  pricetwo,
  newChartData,
  active,
  current,
  id,
}: any) => {
  const Router = useRouter();
  const [newData, setnewData] = useState([]);

  const router = useRouter();

  const fetchNewData = async () => {
    const Res = await fetchData(
      `intelligence/${router.query.lang}/get-report-chart/${reportId}`
    );
    console.log(Res?.data?.sliders[0].chart_data?.history_data, "res");
    setnewData(Res?.data?.sliders[0].chart_data?.history_data);
  };
  console.log("newData", newData);
  useEffect(() => {
    if (active === current) {
      console.log("hey");
      fetchNewData();
    }
  }, [active]);

  return (
    <div>
      <div>
        <div className="mb-4" style={{ width: "100%" }}>
          <div className={styles.SubText}>
            <span className={styles.PriceOne}>
              - {priceone} {displaySubTitle}
            </span>
            {pricetwo !== "" || pricetwo ? (
              <span className={styles.PriceTwo}>
                - {pricetwo} {displaySubTitle}
              </span>
            ) : null}
          </div>
          {optionBanchMark > 0 && maptype === "market_history" ? (
            <DoubleLineChartComponent
              chartData={
                chartData?.benchmark_history_data
                  ? chartData?.benchmark_history_data
                  : newChartData[0]?.chart_data.benchmark_history_data
              }
            />
          ) : null}
          {optionBanchMark === 0 && maptype === "market_history" ? (
            <LineChartComponent
              chartData={chartData?.history_data}
              newChartData={newData}
              reportId={reportId}
            />
          ) : null}
          {maptype === "global" ? (
            <WorldMapChart chartData={chartData?.countries} />
          ) : (
            <></>
          )}
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
