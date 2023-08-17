import React from "react";
import styles from "./style.module.scss";
import { Link, LinkProps } from "../../link";

export type BaseButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> & {
  link?: LinkProps;
};

export function BaseButton({ className, ...rest }: BaseButtonProps) {
  if (rest.link) {
    const { link, ...restProps } = rest;

    return (
      <Link
        className={`${styles.baseButton} ${className || ""}`}
        extraProps={link}
        {...restProps}
      />
    );
  }
  return (
    <button className={`${styles.baseButton} ${className || ""}`} {...rest} />
  );
}
