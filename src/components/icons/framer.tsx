import * as React from "react";
import { SVGProps } from "react";
const FramerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 20.3335H16V27.0002L9 20.3335Z"
        fill="#0055FF"
      />
      <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
      <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
    </g>
  </svg>
);
export default FramerIcon;
