import React from "react";
import { BaseField, BaseFieldProps } from "../base";

export type SelectProps = Omit<
  BaseFieldProps,
  "icon" | "btnIcon" | "btnIconLabel" | "isLoading" | "onClick"
> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  label,
  title,
  className,
  isValid,
  disabled,
  required,
  id,
  children,
  ...rest
}: SelectProps) {
  return (
    <BaseField
      label={label}
      title={title}
      className={className}
      isValid={isValid}
      disabled={disabled}
      required={required}
      id={id}
    >
      <select
        id={id}
        required={required}
        disabled={disabled}
        style={{
          borderInlineEnd: "0.75rem solid transparent",
        }}
        {...rest}
      >
        {children}
      </select>
    </BaseField>
  );
}
