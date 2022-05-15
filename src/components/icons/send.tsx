import React from "react";

export const SendIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M21 3L0 10L7.66 14.26L16 8L9.74 16.34L14 24L21 3Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);
