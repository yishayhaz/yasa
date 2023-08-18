import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import { useTheme } from "../../providers/theme";
import { useMemo } from "react";

export type CodeBlockProps = {
  code: string | string[];
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

  const _code = useMemo(() => {
    if (Array.isArray(code)) {
      return code
        .map((l) => l.trim())
        .join("\n")
        .trim();
    }

    return code;
  }, [code]);

  return (
    <LiveProvider
      code={_code}
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
