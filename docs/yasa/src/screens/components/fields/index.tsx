import { BaseField, Input, Select, Textarea } from "@yasa/form/fields";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@yasa/badge";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  BaseField,
  Input,
  Select,
  Textarea,
  BiSearch,
  Badge,
};

export function FieldsScreen() {
  return <CodeBlock code={stripCode(code)} scope={scope} />;
}
