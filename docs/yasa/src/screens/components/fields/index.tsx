import React from "react";
import { BaseField, Input, Select, Textarea } from "@yasa/field";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@yasa/badge";

export function FieldsScreen() {
  return (
    <>
      <h1>Fields</h1>

      <h2>Base</h2>
      <div>
        <BaseField icon={<BiSearch />}>
          <div className="rounded-lg d-flex gap-10 flex-start">
            <Badge title="badge" />
            <Badge title="badge" variant="success" />
          </div>
        </BaseField>
      </div>
      <h2>Input</h2>
      <div>
        <Input icon={<BiSearch />} />
      </div>
      <h2>Textarea</h2>
      <div>
        <Textarea />
      </div>
      <h2>Select</h2>
      <div>
        <Select>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
      </div>
    </>
  );
}
