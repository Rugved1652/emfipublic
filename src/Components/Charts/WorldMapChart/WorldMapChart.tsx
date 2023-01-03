import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function WorldMapChart({ chartData }: any) {
  return (
    <ComposableMap color="#ffffff">
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                fill={
                  chartData.some(
                    (chartData: any) =>
                      chartData.country_code === geo.id.slice(0, 2)
                  )
                    ? "#f0f0f0"
                    : "#f4f5f6"
                }
                geography={geo}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
