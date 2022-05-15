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
      d="M14 9H9V14H7V9H2V7H7V2H9V7H14V9Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);
