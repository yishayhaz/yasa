import { Badge } from "@yasa/badge";
import code from "./code?raw";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = {
  Badge,
};

export function BadgeScreen() {
  return <CodeBlock code={stripCode(code)} scope={scope} />;
}
