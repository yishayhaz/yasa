import { CodeBlock } from "docs/yasa/src/common/code_block";
import React from "react";

export function BreakpointsScreen() {
  return (
    <>
      <h1>Breakpoints</h1>

      <article>
        <h2>Devices</h2>
        <p>
          In Yasa we concider 3 devices: <code>mobile</code>,{" "}
          <code>tablet</code>, and <code>desktop</code>.
          <br />
          They can be described with 2 variables: <code>$bp-sm</code> and{" "}
          <code>$bp-md</code>.
        </p>
        <CodeBlock
          noPreview
          disabled
          code="$bp-sm: 768px;
$bp-md: 1200px;"
          language="css"
        />
        <h2>Mixins</h2>
        <p>To actually use the breakpoints, you can use the sass mixins</p>
        <CodeBlock
          code="@include mobile {
  // width < $bp-sm
  @content;
}

@include tablet-and-mobile {
  width < $bp-md
  @content;
}

@include tablet() {
  // (width < $bp-md) and (width >= $bp-sm)
  @content;
}

@include tablet-and-desktop {
  // (width >= $bp-sm)
  @content;
}

@include desktop() {
  // (width >= $bp-md)
  @content;
}"
          noPreview
          disabled
        />
      </article>
    </>
  );
}
