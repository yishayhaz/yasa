import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

export type CodeBlockProps = {
  code: string;
  scope?: Record<string, unknown>;
  language?: string;
  disabled?: boolean;
  noPreview?: boolean;
};

export function CodeBlock({
  code,
  scope,
  language,
  disabled,
  noPreview,
}: CodeBlockProps) {
  return (
    <LiveProvider
      code={code}
      scope={scope}
      disabled={disabled}
      language={language}
    >
      {noPreview ? null : (
        <>
          <LivePreview />
          <LiveError />
        </>
      )}
      <LiveEditor />
    </LiveProvider>
  );
}
