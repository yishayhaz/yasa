import styles from "./style.module.scss";
import { BaseButton, BaseButtonProps } from "../base";
import { Spinner, SpinnerProps } from "../../spinner";

export type ButtonProps = BaseButtonProps & {
  variant?: ButtonVariants;
  autoWidth?: boolean;
  isLoading?: boolean;
  spinnerProps?: Omit<SpinnerProps, "size">;
};

export type ButtonVariants =
  | "primary"
  | "neutral"
  | "success"
  | "danger"
  | "warning"
  | "link";

export const Button = ({
  className,
  variant = "primary",
  children,
  autoWidth,
  isLoading,
  spinnerProps,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      data-variant={variant === "link" ? "neutral" : variant}
      {...(autoWidth && { "data-auto-width": true })}
      {...(variant === "link" && { "data-link": true })}
      className={`${className || ""} ${styles.button}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <Spinner size="inline" variant="currentColor" {...spinnerProps} />
      ) : (
        children
      )}
    </BaseButton>
  );
};
