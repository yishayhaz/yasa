import React, { useId } from "react";

export type RadioProps = {
  label?: string | React.ReactNode;
  variant?: RadioVariant;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export type RadioVariant =
  | "primary"
  | "neutral"
  | "success"
  | "danger"
  | "warning";

export function Radio({ label, variant, ...rest }: RadioProps) {
  const id = useId();

  const pAccent = React.useMemo(() => {
    const _variant = variant === "neutral" ? "s-neutral-900" : variant;
    return `rgba(var(--${_variant}, var(--primary)))`;
  }, [variant]);

  return (
    <div className="d-flex justify-content-start gap-10 w-100">
      <input
        {...rest}
        type="radio"
        id={rest.id || id}
        style={{
          accentColor: pAccent,
        }}
      />
      {Boolean(label) && (
        <label htmlFor={rest.id || id} className="fs-xs cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
}
