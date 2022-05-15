import React from "react";

export const JobAddIcon = (props: any) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M17.5 6V5C17.5 3.3 16.2 2 14.5 2H10.5C8.8 2 7.5 3.3 7.5 5V6H2.5V10C2.5 11.7 3.8 13 5.5 13H19.5C21.2 13 22.5 11.7 22.5 10V6H17.5ZM9.5 5C9.5 4.4 9.9 4 10.5 4H14.5C15.1 4 15.5 4.4 15.5 5V6H9.5V5ZM19.5 14C20.7 14 21.8 13.5 22.5 12.6V17C22.5 18.7 21.2 20 19.5 20H5.5C3.8 20 2.5 18.7 2.5 17V12.6C3.2 13.5 4.3 14 5.5 14H19.5Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);
