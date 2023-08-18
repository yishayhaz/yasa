import { CodeBlock } from "docs/yasa/src/common/code_block";
import React from "react";

export function LayoutScreen() {
  return (
    <>
      <h1>Layout</h1>
      <article>
        <h2>What does it mean</h2>
        <p>
          By saying layout, we're mainally talking about the{" "}
          <code>display</code> attribute and it's relevant attributes.
          <br />
          All attributes are accesiable via utility classes.
        </p>
        <h2>Displays</h2>
        <p>
          Currently Yasa has full support for <code>flex</code>.
        </p>
        <h3>Inline Block</h3>
        <CodeBlock
          code={[
            `// html:`,
            `<div class="d-inline-block"></div>`,
            `// css:`,
            `{ display: inline-block; }`,
          ]}
          disabled
          noPreview
        />
        <h3>Block</h3>
        <CodeBlock
          code={[
            `// html:`,
            `<div class="d-block"></div>`,
            `// css:`,
            `{ display: block; }`,
          ]}
          disabled
          noPreview
        />
        <h3>Flex</h3>
        <p>
          Flex is also accesiable via <code>@flex</code> mixin.
        </p>
        <CodeBlock
          code={[
            `// display:`,
            `<div class="d-flex" /> // display: flex;`,
            `<div class="d-inline-flex" /> // display: inline-flex;`,
            ``,
            `// flex-direction`,
            `<div class="flex-column" /> // flex-direction: column;`,
            ``,
            `// justify-content`,
            `<div class="justify-content-start" /> // justify-content: flex-start;`,
            `<div class="justify-content-end" /> // justify-content: flex-end;`,
            `<div class="justify-content-center" /> // justify-content: center;`,
            `<div class="justify-content-between" /> // justify-content: space-between;`,
            `<div class="justify-content-around" /> // justify-content: space-around;`,
            `<div class="justify-content-even" /> // justify-content: space-evenly;`,
            ``,
            `// align-items`,
            `<div class="align-items-start" /> // align-items: flex-start;`,
            `<div class="align-items-end" /> // align-items: flex-end;`,
            `<div class="align-items-center" /> // align-items: center;`,
            `<div class="align-items-baseline" /> // align-items: baseline;`,
            `<div class="align-items-stretch" /> // align-items: stretch;`,
            ``,
            `// general`,
            `<div class="flex-start" /> // justify-content: flex-start; align-items: flex-start;`,
            `<div class="flex-wrap" /> // flex-wrap: wrap;`,
            `<div class="flex-wrap-reverse" /> // flex-wrap: wrap-reverse;`,
          ]}
          disabled
          noPreview
        />
        <h2>Other</h2>
        <p>There are a few other useful attributes</p>
        <CodeBlock
          code={[
            `// html:`,
            `<div class="text-center"></div>`,
            `// css:`,
            `{ text-align: center; }`,
          ]}
          disabled
          noPreview
        />
      </article>
    </>
  );
}
