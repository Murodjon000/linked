import React from "react";

export const PlusIcon = (props: any) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M1 5L8 9.61L15 5V7.39L8 12L1 7.39V5Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);
