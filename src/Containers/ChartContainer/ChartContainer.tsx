import React from "react";
import styles from "../../styles/ChartContainer.module.scss";
import LineChartComponent from "../../Components/Charts/LineChartComponent/LineChartComponent";

type Props = {};

function ChartContainer({
  children,
  country,
  priceone,
  pricetwo,
  displaySubTitle,
}: any) {
  return (
    <div className={styles.chart}>
      <div className={styles.chartContainer}>
        <div className={styles.chartContainerHead}>
          <h3 className={styles.chartText}>{country}</h3>
          <div className={styles.SubText}>
            <span className={styles.PriceOne}>
              - {priceone} {displaySubTitle}
            </span>
            <span className={styles.PriceTwo}>
              - {pricetwo} {displaySubTitle}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.chartContent}>{children}</div>
    </div>
  );
}

export default ChartContainer;
