import React from "react";
import Badge from "../../Components/Badge/Badge";
import HeaderText from "../../Components/HeaderText/HeaderText";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import HistoryChartContainer from "../../Containers/HistoryChartContainer/HistoryChartContainer";
import TableComponent from "../../Components/TableComponent/TableComponent";
import styles from "../../styles/Pricing.module.scss";
import PriceCard from "../../Components/Cards/CustomPriceCard/CustomPriceCard";
import MarketMoverCard from "../../Components/Cards/MarketMoverCard/MarketMoverCard";
import {AttentionSeeker,Fade, Flip, Slide} from 'react-awesome-reveal';
type Props = {};

const pricing = (props: Props) => {
  return (
    <div className="container mb-5">
      <HeroSearch
        heading="Pricing"
        subHeading="November 18, 2022"
        placeholder="Search by Country"
      />
      <div className={`priceBoxCustom ${styles.cardGroup}`}>
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
      <div className={styles.badgeGroup}>
        <Badge title="India" isActive={true} />
        <Badge title="All" isActive={false} />
        <Badge title="Middle East" isActive={false} />
        <Badge title="North America" isActive={false} />
        <Badge title="Latin America" isActive={false} />
        <Badge title="Emerging Asia" isActive={false} />
        <Badge title="Europe" isActive={false} />
      </div>
      <div className={styles.pricingPage}>
        <HeaderText />
        <Fade triggerOnce={true} direction="up" duration={1500}>
          <TableComponent />
        </Fade>
      </div>
      <div className={styles.pricingPage}>
        <HeaderText />
        <div className={styles.cardGroup}>
          <MarketMoverCard />
          <MarketMoverCard />
        </div>
      </div>
      <div className={styles.pricingPage}>
        <HeaderText />
        <Fade triggerOnce={true} direction="up" duration={1500}>
          <HistoryChartContainer />
        </Fade>
      </div>
      <div className={styles.pricingPage}>
        <HeaderText />
        <Fade triggerOnce={true} direction="up" duration={1500}>
          <HistoryChartContainer />
        </Fade>
        
      </div>
    </div>
  );
};

export default pricing;
