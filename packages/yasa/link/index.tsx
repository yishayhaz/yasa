import React from "react";

export type LinkProps = {
  Component?: React.ElementType;
  extraProps?: Record<string, any>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({
  Component = "a",
  className,
  extraProps,
  ...rest
}: LinkProps) {
  return (
    <Component
      {...rest}
      {...extraProps}
      className={`reset-link ${className || ""}`}
    />
  );
}
