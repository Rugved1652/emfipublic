import React from "react";
import HeroTextArea from "../HeroTextArea/HeroTextArea";
import MapContainer from "../../Containers/ChartContainer/ChartContainer";
import styles from "../../styles/HeroSection.module.scss";
import WorldMapChart from "../Charts/WorldMapChart/WorldMapChart";
import LineChartComponent from "../Charts/LineChartComponent/LineChartComponent";
import dynamic from "next/dynamic";

type Props = {
  data: any;
};

const HeroSection = ({ data }: Props) => {
  console.log("dat", data);
  return (
    <div className={styles.HeroWrapper}>
      <HeroTextArea
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
        ) : (
          <LineChartComponent />
        )}
      </MapContainer>
    </div>
  );
};

export default HeroSection;
