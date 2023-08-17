import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button } from "@yasa/button";

const scope = { Button };

const code = `<Button>Hello</Button>`;

export function GettingStartedOverviewScreen() {
  return (
    <>
      <h1>Getting Started</h1>

      <pre>
        <LiveProvider code={code} scope={scope}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </pre>
    </>
  );
}
