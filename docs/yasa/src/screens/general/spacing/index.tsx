import { CodeBlock } from "docs/yasa/src/common/code_block";
import { stripCode } from "docs/yasa/src/common/strip_code";
import React from "react";

export function SpacingScreen() {
  return (
    <>
      <article>
        <h1>Spacing</h1>
        <p>All spacing are accessible via class names.</p>
        <h2>RTL Friendly</h2>
        <p>
          Yasa is RTL friendly, all spacers are using{" "}
          <code>
            {"{margin/padding}"}-inline-{"{start/end}"}
          </code>
          , so you can enjoy RTL support without any extra work.
        </p>
        <h2>Syntax</h2>
        <h3>Spacers</h3>
        <p>
          Padding is represented by <code>p-</code> prefix, and margin is by{" "}
          <code>m-</code> prefix.
        </p>
        <h3>Directions</h3>
        <p>
          There are 6 directions, y (top and bottom), x (start and end), t
          (top), b (bottom), s (start), and e (end).
        </p>
        <h3>Sizes</h3>
        <p>spaces are in px unit, 2-50 with step of 2 (2, 4, 6, 8 ... 50).</p>
        <h3>Syntax</h3>
        <CodeBlock
          code={[
            `py-10 // padding-top: 10px;`,
            `mx-20 // margin-inline: 20px;`,
            `my-30 // margin-block: 30px;`,
            `ps-40 // padding-inline-start: 40px;`,
          ].join("\n")}
          noPreview
          disabled
        />
      </article>
    </>
  );
}
