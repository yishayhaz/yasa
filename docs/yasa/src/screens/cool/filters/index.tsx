import { useFilters } from "@yasa/hooks/filters";
import { Input, Select, Radio, Checkbox } from "@yasa/form";
import { Button } from "@yasa/button";
import { CodeBlock } from "docs/yasa/src/common/code_block";
import code from "./code?raw";
import { stripCode } from "docs/yasa/src/common/strip_code";

const scope = { useFilters, Select, Input, Button, CodeBlock, Radio, Checkbox };

export function FiltersScreen() {
  return (
    <>
      <h1>Filters</h1>
      <CodeBlock code={stripCode(code)} scope={scope} />
    </>
  );
}
