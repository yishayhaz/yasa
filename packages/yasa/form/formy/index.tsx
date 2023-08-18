/*
  ! Doesn't support Combobox
  ! Doesn't preserve type onSubmit
*/

import React, { useEffect, useMemo } from "react";
import {
  Form as PrimitiveForm,
  FormProps as PrimitiveFormProps,
} from "../form";
import {
  Input,
  InputProps,
  Textarea,
  TextareaProps,
  Select,
  SelectProps,
} from "../fields";
import { Button, ButtonProps } from "../../button/button";
import { AnyObject } from "../../types";
import { deepClone } from "../../utils/deepClone";

export type FormyProps = {
  onSubmit: FormyOnSubmit;
  fields: FormyFields;
  setFields: React.Dispatch<React.SetStateAction<FormyFields>>;
  errors?: FormyErrors;
  setErrors?: React.Dispatch<React.SetStateAction<FormyErrors>>;
  buttonLabel?: string;
  buttonProps?: Omit<ButtonProps, "link" | "onClick" | "disabled">;
  children?: [React.ReactNode, React.ReactNode];
  initialValues?: FormyInitialValues;
  /*
    ! initialValues MUST be a useMemo
  */
  isDisabled?: (internalDisabled: boolean) => boolean | undefined | null;
} & Omit<PrimitiveFormProps, "onSubmit">;

export type FormyErrors = { [key: string]: string };

export type FormyOnSubmit = (
  data: { [key: string]: FormyFieldValue },
  fields: FormyFields,
  e: React.FormEvent<HTMLFormElement>
) => void;

export type FormyFieldValue =
  | string
  | number
  | readonly string[]
  | undefined
  | null;

export type FormyFields = { [key: string]: FormyField };

export type FormyInitialValues = {
  [key: string]: string | number | undefined | null;
};

export type FormyField = {
  as: "input" | "textarea" | "select";
  validation?: FormyValidation[];
  nullWhenEmpty?: boolean; // only meant for string fields!
  field: Omit<
    InputProps,
    "onChange" | "pattern" | "name" | "onClick" | "isValid"
  > &
    Omit<
      TextareaProps,
      "onChange" | "pattern" | "name" | "onClick" | "isValid"
    > &
    FormyFieldSelect;
};

export type FormyFieldSelect = Omit<
  SelectProps,
  "onChange" | "pattern" | "name" | "onClick" | "isValid" | "children"
> & {
  options?: {
    label: string;
    value: string | number;
    disabled?: boolean;
    isDefault?: boolean;
  }[];
};

export type FormyValidation = {
  pattern?: RegExp;
  validate?: FormyFieldValidate;
  message: string;
};

export type FormyFieldValidate = (
  value: string | number | readonly string[] | undefined
) => boolean | null;

export function Formy({
  onSubmit,
  fields,
  buttonLabel = "Submit",
  setFields,
  buttonProps,
  children,
  initialValues,
  isDisabled,
  errors,
  setErrors,
  ...rest
}: FormyProps) {
  const handleIsValid = (name: string) => {
    const field = fields[name];

    if (!field) return null;

    if (errors && errors[name]) {
      return {
        isValid: false,
        title: errors[name],
      };
    }

    if (!field.field.value) return null;
    if (!field.validation) return null;

    for (const validation of field.validation) {
      const isValidateValid = validation.validate?.(field.field.value) ?? true;
      const isPatternValid =
        validation.pattern?.test(field.field.value?.toString() ?? "") ?? true;

      if (!isValidateValid || !isPatternValid) {
        return {
          isValid: false,
          title: validation.message,
        };
      }
    }

    return {
      isValid: true,
    };
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    let value: FormyFieldValue = e.target.value;

    const newFields = { ...fields };
    const field = newFields[name];

    if (!field) return;

    if (field.field.type === "number" && value) {
      value = Number(value);
    }

    field.field.value = value;

    setFields(newFields);

    if (errors && errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors?.(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (_isDisabled) return;

    const data: AnyObject = {};

    for (const [name, field] of Object.entries(fields)) {
      let value: FormyFieldValue = field.field.value;

      // only send changed values
      if (initialValues && initialValues[name] === value) continue;

      if (field.nullWhenEmpty && !value) value = null;

      data[name] = value;
    }

    return onSubmit(data, fields, e);
  };

  useEffect(() => {
    if (!initialValues) return;

    // Sync fields with initialValues
    const newFields = deepClone(fields);

    for (const [name, field] of Object.entries(newFields)) {
      if (name in initialValues) {
        field.field.value = initialValues[name];
      }
    }

    setFields(newFields);
  }, [initialValues]);

  const _isDisabled = useMemo(() => {
    let nothingChanged = Boolean(initialValues);

    for (const [name, field] of Object.entries(fields)) {
      const validation = handleIsValid(name);

      if (initialValues) {
        const bothEmpty = !field.field.value && !initialValues[name];
        const areDifferent = field.field.value !== initialValues[name];

        // cases
        // 1. both empty, but diffrent types: null, "", undefined, etc. that won't be equal.
        // 2. one/both has value, no matter the type

        if (areDifferent && !bothEmpty) {
          nothingChanged = false;
        }
      }

      const didNotPassValidation =
        validation !== null && validation.isValid === false;

      const hasValue = field.field.value !== "" && "value" in field.field;

      const isRequiredAndEmpty = field.field.required && !hasValue;

      const shouldDisable = didNotPassValidation || isRequiredAndEmpty;

      if (shouldDisable) return isDisabled?.(true) ?? true;
    }

    // if nothing changed, disable submit
    return isDisabled?.(nothingChanged) ?? nothingChanged;
  }, [fields, initialValues, isDisabled]);

  return (
    <PrimitiveForm onSubmit={handleSubmit} {...rest}>
      {children?.[0]}
      {Object.entries(fields).map(([name, { as, field }], idx) => {
        if (as === "select") {
          return (
            <Select
              key={idx}
              name={name}
              {...(field as SelectProps)}
              {...handleIsValid(name)}
              value={field.value ?? ""}
              onChange={handleChange}
            >
              {field.options?.map((option, idx) => {
                return (
                  <option
                    key={idx}
                    disabled={
                      option.disabled ??
                      Boolean(option.isDefault && field.value)
                    }
                    value={option.value}
                  >
                    {option.label}
                  </option>
                );
              })}
            </Select>
          );
        }
        if (as === "input") {
          return (
            <Input
              key={idx}
              name={name}
              {...(field as InputProps)}
              {...handleIsValid(name)}
              value={field.value ?? ""}
              onChange={handleChange}
            />
          );
        }
        return (
          <Textarea
            key={idx}
            name={name}
            {...(field as TextareaProps)}
            {...handleIsValid(name)}
            value={field.value ?? ""}
            onChange={handleChange}
          />
        );
      })}
      {children?.[1]}
      <Button {...buttonProps} disabled={_isDisabled}>
        {buttonLabel}
      </Button>
    </PrimitiveForm>
  );
}
