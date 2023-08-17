import React from "react";
import { BaseField, Input, Select, Textarea } from "@yasa/field";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@yasa/badge";

export function FieldsScreen() {
  return (
    <>
      <h1>Fields</h1>
      <p>
        All fields rely on the <code>BaseField</code> component, which is a{" "}
        <code>div</code> that wraps the field.
      </p>

      <div className="d-flex align-items-stretch flex-column gap-20">
        <h2>Base</h2>
        <BaseField icon={<BiSearch />}>
          <div className="rounded-lg d-flex gap-10 flex-start">
            <Badge title="badge" />
            <Badge title="badge" variant="success" />
          </div>
        </BaseField>
      </div>
      <div className="d-flex align-items-stretch flex-column gap-20">
        <h2>Input</h2>
        <Input icon={<BiSearch />} />
      </div>
      <div className="d-flex align-items-stretch flex-column gap-20">
        <h2>Textarea</h2>
        <Textarea />
      </div>
      <div className="d-flex align-items-stretch flex-column gap-20">
        <h2>Select</h2>
        <Select>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
      </div>
      <div className="d-flex align-items-stretch flex-column gap-20">
        <h2>API</h2>
      </div>
    </>
  );
}
