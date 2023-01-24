import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const LineChartComponent = ({ chartData }: any) => {
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
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
