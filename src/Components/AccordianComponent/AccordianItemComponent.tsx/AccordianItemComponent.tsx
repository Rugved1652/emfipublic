import React from "react";
import LineChartComponent from "../../Charts/LineChartComponent/LineChartComponent";

type Props = {};

const AccordianItemComponent = (props: Props) => {
  return (
    <div>
      <div>
        <div className="mb-4" style={{ width: "100%", height: "40vh" }}>
          <LineChartComponent />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores
          ipsa nam. Voluptates facere sapiente nisi magnam ex veniam nemo
          tempore temporibus sunt dolore eum laudantium expedita error,
          perferendis enim. Illo sapiente labore illum incidunt fuga maiores
          nihil iusto recusandae.
        </p>
        <button> Continue Reading</button>
      </div>
      <div></div>
    </div>
  );
};

export default AccordianItemComponent;
