import { useState } from "react";
import { Form } from "@yasa/form";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  useState,
  Form,
};

export function FormScreen() {
  return (
    <>
      <div>
        <h1>Form</h1>
        <p>
          Form is a component that helps you to create a form with validation,
          error handling, and editing state.
        </p>
      </div>
      <h2>Example</h2>
      <CodeBlock code={stripCode(code)} scope={scope} />
      <h2>API</h2>
    </>
  );
}
