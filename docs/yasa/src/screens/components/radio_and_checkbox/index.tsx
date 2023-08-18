import { Checkbox, Radio } from "@yasa/form";
import code from "./code?raw";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  Checkbox,
  Radio,
};

export function RadioAndCheckboxScreen() {
  return <CodeBlock code={stripCode(code)} scope={scope} />;
}
