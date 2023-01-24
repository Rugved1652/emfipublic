import React from "react";
import Select, { StylesConfig } from "react-select";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
type Props = {};

const styles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #CCCCCC",
    boxShadow: "none",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      border: "1px solid #CCCCCC",
    },
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const HistoryChartContainer = (props: Props) => {
  return (
    <div className={"cusromCardK"}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "30px" }}>
        <Select styles={styles} options={options} />
        <Select styles={styles} options={options} />
        <Select styles={styles} options={options} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <ResponsiveContainer>
          <AreaChart
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            width={730}
            height={250}
            data={data}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              tickLine={false}
              dataKey="name"
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
            />
            {/* <Tooltip active={true} /> */}
            <Area
              type="monotone"
              dataKey="pv"
              stroke="var(--brand-primary)"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--brand-primary)"
                  stopOpacity={0.6}
                />
                <stop
                  offset="80%"
                  stopColor="var(--brand-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoryChartContainer;
