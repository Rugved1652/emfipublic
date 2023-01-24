import Link from "next/link";
import React from "react";

type Props = {};

const MessageIconWhite = (props: Props) => {
  return (
    <Link
      target="_blank"
      href="https://twitter.com/intent/tweet?text=&url=https%3A%2F%2Fuat.emfi.uk%2Fenglish%2Fresearch%2Fdetails%2Fone-step-at-a-time-1521"
    >
      <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40">
        <g id="Rectangle_2831" data-name="Rectangle 2831" fill="#fff" stroke="#071932" stroke-width="1">
          <rect width="60" height="40" rx="7" stroke="none"/>
          <rect x="0.5" y="0.5" width="59" height="39" rx="6.5" fill="none"/>
        </g>
        <path id="Path_2318" data-name="Path 2318" d="M921.747,344.417A4.234,4.234,0,0,1,917.9,341.6a4.57,4.57,0,0,0,1.832-.075,4.077,4.077,0,0,1-3.249-4,4.2,4.2,0,0,0,.865.344,3.179,3.179,0,0,0,.913.133,4.075,4.075,0,0,1-1.217-5.391,11.867,11.867,0,0,0,8.52,4.24,4.385,4.385,0,0,1-.083-1.153,3.865,3.865,0,0,1,1.879-3.157,4.126,4.126,0,0,1,5.116.514.262.262,0,0,0,.273.077,8.548,8.548,0,0,0,2.262-.836c.048-.026.092-.074.177-.049a4.049,4.049,0,0,1-1.759,2.152,9.771,9.771,0,0,0,2.261-.554,6.058,6.058,0,0,1-.929,1.145,7.159,7.159,0,0,1-.933.792.25.25,0,0,0-.119.239,11.447,11.447,0,0,1-2.047,6.884,11.023,11.023,0,0,1-5.071,4.115,11.807,11.807,0,0,1-3.55.82,12.228,12.228,0,0,1-4.347-.419,11.4,11.4,0,0,1-3-1.343A8.532,8.532,0,0,0,921.747,344.417Z" transform="translate(-895.695 -319.881)" fill="#071932"/>
      </svg>
    </Link>
  );
};

export default MessageIconWhite;
