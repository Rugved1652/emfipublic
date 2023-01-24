import React from "react";
// import { Tooltip } from "react-bootstrap";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import CustomCard from "../CustomCard/CustomCard";
import styles from "../../../styles/MarketMoverCard.module.scss";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
type Props = {};

const MarketMoverCard = (props: Props) => {
  const data = [
    {
      name: "CA",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "CB",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "CC",
      uv: 2000,
      pv: 4800,
    },
  ];
  return (
    <div className={styles.MarketMoverCard}>
      <Fade triggerOnce={true} direction="up" duration={1500}>
        <CustomCard>
          <CustomCard.Header>
            <span>US 10-Year</span>
          </CustomCard.Header>
          <CustomCard.Body>
            <div
              className={styles.moverbody}
              style={{ width: "100%", height: "30vh" }}
            >
              <ResponsiveContainer>
                <BarChart layout="vertical" data={data}>
                  <XAxis
                    tickLine={false}
                    type="number"
                    style={{
                      fontSize: "13px",
                      fontFamily: "Inter",
                      fill: "var(--brand-primary)",
                    }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    style={{
                      fontSize: "13px",
                      fontFamily: "Inter",
                      fill: "var(--brand-primary)",
                    }}
                    type="category"
                    dataKey="name"
                  />
                  {/* <Tooltip active={true} /> */}
                  {/* <Legend /> */}
                  <CartesianGrid horizontal={false} stroke="#e5e7eb" />
                  <Bar dataKey="pv" fill="#071932" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CustomCard.Body>
        </CustomCard>
      </Fade>
    </div>
  );
};

export default MarketMoverCard;
