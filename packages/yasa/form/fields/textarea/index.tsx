import React from "react";
import { BaseField, BaseFieldProps } from "../base";

export type TextareaProps = Omit<
  BaseFieldProps,
  "icon" | "btnIcon" | "btnIconLabel" | "isLoading" | "onClick"
> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    resize?: React.CSSProperties["resize"];
  };

export function Textarea({
  label,
  title,
  className,
  isValid,
  disabled,
  required,
  id,
  resize,
  ...rest
}: TextareaProps) {
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
      <textarea
        style={{
          resize: resize || "vertical",
        }}
        {...rest}
        {...(disabled && { disabled })}
        {...(required && { required })}
        {...(title && { title })}
        id={id}
      />
    </BaseField>
  );
}
