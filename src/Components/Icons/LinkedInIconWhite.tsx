import Link from "next/link";
import React from "react";

type Props = {};

const LinkedInIconWhite = (props: Props) => {
  return (
    <Link
      target="_blank"
      href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fuat.emfi.uk%2Fenglish%2Fresearch%2Fdetails%2Fone-step-at-a-time-1521"
    >
      <svg
        id="linkedin"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <rect
          id="Rectangle_2747"
          data-name="Rectangle 2747"
          width="28"
          height="28"
          rx="5"
          fill="#071932"
        />
        <path
          id="Union_29"
          data-name="Union 29"
          d="M1.116,16c-.446,0-.647-.2-.647-.638q0-2.354,0-4.708,0-2.329,0-4.658c0-.493.184-.679.68-.681q1.034,0,2.069,0c.466,0,.663.193.663.65q0,4.7,0,9.392c0,.451-.207.643-.67.644H1.116Zm4.969-.066c-.413,0-.6-.181-.6-.59q0-4.728,0-9.456c0-.419.171-.593.586-.595q1.113,0,2.227,0a.5.5,0,0,1,.575.56c.005.223,0,.446,0,.669a3.263,3.263,0,0,1,1.663-1.182,4.842,4.842,0,0,1,3.395.165,3.335,3.335,0,0,1,1.811,2.417,8.88,8.88,0,0,1,.244,2.164C16,11.831,16,13.576,16,15.322c0,.425-.181.605-.607.606q-1.126,0-2.252,0c-.433,0-.609-.171-.609-.6q0-2.3,0-4.592a4.892,4.892,0,0,0-.185-1.593,1.488,1.488,0,0,0-1.276-1.106,1.652,1.652,0,0,0-1.748.748,3.012,3.012,0,0,0-.456,1.65c-.005,1.6,0,3.21,0,4.815,0,.528-.154.681-.681.682h-2.1ZM2.158,4.315A2.167,2.167,0,0,1,0,2.151,2.176,2.176,0,1,1,2.168,4.315Z"
          transform="translate(6 6)"
          fill="#fdfdfd"
        />
      </svg>
    </Link>
  );
};

export default LinkedInIconWhite;
