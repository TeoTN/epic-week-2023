import { ReactElement, useCallback } from "react";
import MD from "react-markdown";
// @ts-expect-error
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Highlighter } from "./Highlighter";
import { SlideTitle } from "./SlideTitle";
import { withErrorBoundary } from "./visual-runtime/error-boundary";

interface Props {
  id?: string;
  children: string;
  highlighterProps?: Omit<SyntaxHighlighterProps, "children">;
}

export const Markdown = withErrorBoundary({ scope: "markdown" })(({
  id,
  children,
  highlighterProps,
}: Props): ReactElement | null => {
  const code: CodeComponent = useCallback(
    (props: any) => <Highlighter {...props} {...highlighterProps} />,
    [highlighterProps],
  );
  const pre = useCallback(
    (props: any) => <pre data-id={id} {...props} />,
    [id],
  );

  if (!children) {
    return null;
  }

  return (
    <MD
      className="markdown-output"
      components={{
        code,
        h3: SlideTitle,
        pre,
      }}
    >
      {children}
    </MD>
  );
});
