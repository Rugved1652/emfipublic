import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

type Props = {};

const LineChartComponent = ({ chartData }: any) => {
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

  return (
    <div className="d-flex justify-content-center" style={{ height: "400px" }}>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            tickLine={false}
            dataKey="created_format"
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
          <Tooltip active={true} />
          {/* <Legend /> */}
          <CartesianGrid vertical={false} stroke="#e5e7eb" />
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
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--dark-gray-color)"
                stopOpacity={0.6}
              />
              <stop
                offset="80%"
                stopColor="var(--dark-gray-color)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="last_price"
            stroke="var(--brand-primary)"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="var(--dark-gray-color)"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
