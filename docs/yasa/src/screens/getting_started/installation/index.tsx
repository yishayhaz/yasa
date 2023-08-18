import { CodeBlock } from "docs/yasa/src/common/code_block";

export function InstallationScreen() {
  return (
    <article>
      <h1>Installation</h1>
      <p>
        In order to use Yasa, you will need to install it with npm.
        <br />
        Yasa uses Sass, so you will need to install it as well.
      </p>
      <CodeBlock code="npm i -D sass && npm i yasa" disabled noPreview />
    </article>
  );
}
