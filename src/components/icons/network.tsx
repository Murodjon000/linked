import React from "react";

export const NetworkIcon = (props: any) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M12.5 16V22H3.5V16C3.5 14.3 4.8 13 6.5 13H9.5C11.2 13 12.5 14.3 12.5 16ZM18 13C19.9 13 21.5 11.4 21.5 9.5C21.5 7.6 19.9 6 18 6C16.1 6 14.5 7.6 14.5 9.5C14.5 11.4 16.1 13 18 13ZM19 15H17C15.6 15 14.5 16.1 14.5 17.5V22H21.5V17.5C21.5 16.1 20.4 15 19 15ZM8 2C5.5 2 3.5 4 3.5 6.5C3.5 9 5.5 11 8 11C10.5 11 12.5 9 12.5 6.5C12.5 4 10.5 2 8 2Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);