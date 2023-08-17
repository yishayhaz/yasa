import React from "react";
import styles from "./style.module.scss";
import { BaseButton } from "../../button/base";
import { Spinner } from "../../spinner";

export type BaseFieldProps = {
  icon?: React.ReactNode;
  btnIcon?: React.ReactNode;
  btnIconLabel?: string;
  label?: string;
  title?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  isValid?: FieldIsValid;
  children?: React.ReactNode;
  required?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type FieldIsValid = true | false | null;

export function BaseField({
  label,
  title,
  icon,
  btnIcon,
  btnIconLabel,
  className,
  isValid,
  isLoading,
  disabled,
  onClick,
  id,
  children,
  ...rest
}: BaseFieldProps) {
  const _btnIconLabel = btnIconLabel || label;

  return (
    <div
      className={`${styles.field} ${className || ""}`}
      {...(typeof isValid === "boolean" && { "data-valid": isValid })}
    >
      <label className={styles.field__label} htmlFor={id} hidden={!label}>
        {rest.required && "* "}
        {label}
      </label>
      <div
        className={styles.field__wrraper}
        {...(disabled && { "aria-disabled": true })}
      >
        {children}
        {btnIcon && (
          <BaseButton
            className={styles.field__icon}
            aria-label={_btnIconLabel}
            onClick={onClick}
            type="button"
            {...(disabled && { disabled })}
          >
            {isLoading && <Spinner size="sm" variant="neutral" />}
            {!isLoading && btnIcon}
          </BaseButton>
        )}
        {icon && <div className={styles.field__icon}>{icon}</div>}
      </div>
      {title && <span className={styles.field__title}>{title}</span>}
    </div>
  );
}
