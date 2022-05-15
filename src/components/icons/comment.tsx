import React from "react";

export const CommnetIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M7 9H17V10H7V9ZM7 13H14V12H7V13ZM23 11C23.0148 12.0949 22.7643 13.1772 22.2697 14.1541C21.7751 15.1311 21.0512 15.9738 20.16 16.61L12 22V18H8C6.14348 18 4.36301 17.2625 3.05025 15.9497C1.7375 14.637 1 12.8565 1 11C1 9.14348 1.7375 7.36301 3.05025 6.05025C4.36301 4.7375 6.14348 4 8 4H16C17.8565 4 19.637 4.7375 20.9497 6.05025C22.2625 7.36301 23 9.14348 23 11ZM21 11C21 9.67392 20.4732 8.40215 19.5355 7.46447C18.5979 6.52678 17.3261 6 16 6H8C6.67392 6 5.40215 6.52678 4.46447 7.46447C3.52678 8.40215 3 9.67392 3 11C3 12.3261 3.52678 13.5979 4.46447 14.5355C5.40215 15.4732 6.67392 16 8 16H14V18.28L19 15C19.6336 14.5463 20.1469 13.9448 20.4955 13.2477C20.844 12.5507 21.0172 11.7791 21 11Z"
      fill={props.fill || "#666666"}
      fillOpacity={props.opacity || "0.6"}
    />
  </svg>
);