import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import { useTheme } from "../../providers/theme";

export type CodeBlockProps = {
  code: string;
  scope?: Record<string, unknown>;
  language?: string;
  disabled?: boolean;
  noPreview?: boolean;
  noInline?: boolean;
};

export function CodeBlock({
  code,
  scope,
  language,
  disabled,
  noPreview,
  noInline,
}: CodeBlockProps) {
  const theme = useTheme();
  return (
    <LiveProvider
      code={code}
      scope={scope}
      disabled={disabled}
      language={language}
      theme={theme.theme === "light" ? themes.github : themes.vsDark}
      noInline={noInline}
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
