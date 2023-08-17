import React from "react";
import { BaseField, BaseFieldProps } from "../base";

export type InputProps = BaseFieldProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "onClick">;

export function Input({
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
  onKeyDown,
  required,
  id,
  ...rest
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(e);

    if (e.key === "Enter" && btnIcon) {
      ((e.target as HTMLInputElement).nextSibling as HTMLButtonElement).click();
    }
  };

  return (
    <BaseField
      icon={icon}
      btnIcon={btnIcon}
      btnIconLabel={btnIconLabel}
      label={label}
      title={title}
      id={id}
      isValid={isValid}
      disabled={disabled}
      className={className}
      required={required}
      isLoading={isLoading}
      onClick={onClick}
    >
      <input
        {...rest}
        {...(disabled && { disabled: true })}
        {...(required && { required: true })}
        {...(title && { title })}
        id={id}
        onKeyDown={handleKeyDown}
      />
    </BaseField>
  );
}
