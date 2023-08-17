import { CodeBlock } from "docs/yasa/src/common/code_block";

export function SetupScreen() {
  return (
    <>
      <h1>Setup</h1>
      <p>
        After you successfully installed Yasa - you can start using it.
        <br />
        But there are a few steps you have to do before you unleash the full
        power of Yasa.
      </p>
      <article>
        <h2>Sass files</h2>
        <p>
          First and foremost, you need to import the main sass file into your
          main file (usually main.tsx).
          <br />
          This will load all the css rules into your project.
        </p>
        <CodeBlock
          code={`@import "yasa-ui/styles/_index.scss";`}
          disabled
          noPreview
          language="css"
        />
        <p>
          If you're familiar with design systems, you probably have already came
          across the `abstracts` folder.
          <br />
          This folder contains all the resusable variables, mixins, functions,
          etc. keep it DRY!
          <br />
          You can use this folder in your own sass files, like so:
        </p>
        <CodeBlock
          code={`@use "~yasa-ui/styles/abstracts" as *;`}
          disabled
          noPreview
          language="css"
        />
        <p>
          Or even better, you can inject it into your sass compiler, so you can
          use it everywhere.
        </p>
        <h3>Inject css rules using vite</h3>
        <p>You can achieve this with webpack, rollup, etc.</p>
        <CodeBlock
          disabled
          noPreview
          language="javascript"
          code={JSON.stringify(
            {
              css: {
                preprocessorOptions: {
                  scss: {
                    additionalData: "@use `~yasa-ui/styles/abstracts` as *;",
                  },
                },
              },
            },
            null,
            2
          )}
        />
      </article>
      <article>
        <h2>HTML Changes</h2>
        <h3>Basic styles</h3>
        <p>
          You should add "app" class to your {"<HTML>"} tag.
          <br />
          This will load the theme, and basic layout to your page
        </p>
        <CodeBlock
          disabled
          code={`<html class="app">
    ...
</html>`}
          noPreview
        />
        <h3>Theme (light/dark)</h3>
        <p>
          By default, Yasa will load the theme based on `prefers-color-scheme`.
          <br />
          If you want to control the theme, you can add the `data-theme` to the
          body tag, like so:
        </p>
        <CodeBlock
          disabled
          code={`<body data-theme="dark">
  ...
</body>`}
          noPreview
        />
        <p>There are currently two themes: `light` and `dark`.</p>
      </article>
      <h2>That's it! You're good to go 💪</h2>
    </>
  );
}
