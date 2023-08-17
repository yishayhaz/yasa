import React from "react";

const SIZES = ["xxl", "xl", "l", "ml", "m", "ms", "s", "xs", "xxs"];

const WEIGHTS = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "light",
  "lighter",
  "normal",
  "bold",
  "bolder",
];

export function TypographyScreen() {
  return (
    <>
      <h2>Font Size</h2>
      <div className="d-flex align-items-start flex-column">
        {SIZES.map((size) => (
          <span className={`fs-${size}`} key={size}>
            hey, I'm fs-{size}
          </span>
        ))}
      </div>
      <h2>Font Weight</h2>
      <div className="d-flex align-items-start flex-column">
        {WEIGHTS.map((weight) => (
          <span className={`fw-${weight} fs-ml`} key={weight}>
            hey, I'm fw-{weight}
          </span>
        ))}
      </div>
    </>
  );
}
