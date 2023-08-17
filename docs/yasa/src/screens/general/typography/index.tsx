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
      <div className="d-flex align-items-start flex-column gap-20">
        <h2>Font Size</h2>
        <p>
          All font sizes are accessible via variaty of method, with classes,
          sass variables, or css variables.
        </p>
        <pre>--fs-*, $fs-*, .fs-*</pre>
        <div className="d-flex align-items-start flex-column">
          {SIZES.map((size) => (
            <span className={`fs-${size}`} key={size}>
              hey, I'm fs-{size}
            </span>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-start flex-column gap-20">
        <h2>Font Weight</h2>
        <p>
          Same as sizes, all font weights are accessible via variaty of method,
          with classes, sass variables, or css variables.
        </p>
        <pre>--fw-*, $fw-*, .fw-*</pre>
        <div className="d-flex align-items-start flex-column">
          {WEIGHTS.map((weight) => (
            <span className={`fw-${weight} fs-ml`} key={weight}>
              hey, I'm fw-{weight}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
