import React from "react";

export const JobIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M10 10H14V14H10V10ZM10 21H14V17H10V21ZM3 14H7V10H3V14ZM3 21H7V17H3V21ZM3 7H7V3H3V7ZM17 14H21V10H17V14ZM17 3V7H21V3H17ZM10 7H14V3H10V7ZM17 21H21V17H17V21Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);
