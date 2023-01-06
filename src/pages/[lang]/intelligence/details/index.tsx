import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading="Angola"
        subHeading="November 2012"
        placeholder="Search"
      />
      <div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
        <div>
          <p>Country Report: Nothing New Under The Sun</p>
          <span>April 27, 2021</span>
        </div>
      </div>
      <div>Country</div>
    </div>
  );
};

export default index;
