import React, { useEffect, useState } from "react";
import HeroTextArea from "../HeroTextArea/HeroTextArea";
import MapContainer from "../../Containers/ChartContainer/ChartContainer";
import styles from "../../styles/HeroSection.module.scss";
import WorldMapChart from "../Charts/WorldMapChart/WorldMapChart";
import LineChartComponent from "../Charts/LineChartComponent/LineChartComponent";
import Image from "next/image";
import topArrow from "../../Assets/topArrow.svg";
import dynamic from "next/dynamic";
import { isEmpty } from "../../../helper";
import DoubleLineChartComponent from "../Charts/LineChartComponent/DoubleLineChartComponent";

type Props = {
  data: any;
};

const HeroSection = ({ data }: Props) => {
  console.log("data", data);
  const [first, setfirst] = useState([]);
  // console.log(
  //   data?.display_title_second === "" || data?.graph_type === "global"
  //     ? []
  //     : console.log(
  //         "chart",
  //         data?.title,
  //         Object.values(data?.chart_data?.benchmark_history_data).map(
  //           (data: any) => ...data[0]
  //         )
  //       )
  // );

  useEffect(() => {
    data?.display_title_second === "" || data?.graph_type === "global"
      ? []
      : console.log(
          ...Object.values(data?.chart_data?.benchmark_history_data).map(
            (data: any) => data.map((i: any) => i)
          )
        );
  }, []);

  console.log("data", data);
  return (
    <div className={styles.HeroWrapper}>
      <HeroTextArea
        id={data.id}
        reportSlug={data.report_slug}
        title={data.title}
        date={data.display_date}
        graphType={data.graphType}
        description={data.description}
        subHeading={data.report_title}
      />
      <MapContainer
        country={data.title}
        priceone={data.display_title_first}
        pricetwo={data.display_title_second}
        displaySubTitle={data.display_sub_title}
      >
        {data?.graph_type === "global" ? (
          <WorldMapChart chartData={data.chart_data.countries} />
        ) : null}

        {data?.graph_type === "market_history" &&
        data?.display_title_second === "" ? (
          <LineChartComponent chartData={data.chart_data?.history_data} />
        ) : null}

        {data?.graph_type === "market_history" &&
        data?.display_title_second !== "" ? (
          <DoubleLineChartComponent
            chartData={data.chart_data?.benchmark_history_data}
          />
        ) : null}
      </MapContainer>
      <div className="tilteRoundBox">
        <div id="circle">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="160px"
            height="160px"
            viewBox="0 0 160 160"
            enableBackground="new 0 0 160 160"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 81, 81 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="81" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  xlinkHref="#circlePath"
                >
                  {data.title}
                </textPath>
              </text>
            </g>
          </svg>
          <div className="TopArrow">
            <Image
              className="TopArrowIcon"
              src={topArrow}
              width={16}
              height={16}
              alt={"Top arrow icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
