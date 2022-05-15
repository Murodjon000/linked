import React from "react";

export const HomeIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M23 9V11H21V18C21 19.7 19.7 21 18 21H14V15H10V21H6C4.3 21 3 19.7 3 18V11H1V9L12 2L23 9Z"
      fill={props.fill || "#666666"}
      opacity={props.opacity || "0.6"}
    />
    <path
      d="M20 2H17V5.2L20 7.1V2Z"
      fill={props.fill || "#666666"}
      opacity={props.opacity || "0.6"}
    />
  </svg>
);
