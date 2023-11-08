import { ComponentProps, ReactElement, useCallback } from "react";
import MD from "react-markdown";
// @ts-expect-error JS code
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Highlighter } from "./Highlighter";
import { SlideTitle } from "./SlideTitle";
import { withErrorBoundary } from "./visual-runtime/error-boundary";

type MarkdownProps = ComponentProps<typeof MD>;

interface Props extends MarkdownProps {
  id?: string;
  children: string;
  highlighterProps?: Omit<SyntaxHighlighterProps, "children">;
}

export const Markdown = withErrorBoundary({ scope: "markdown" })(({
  id,
  children,
  highlighterProps,
  ...props
}: Props): ReactElement | null => {
  const code: CodeComponent = useCallback(
    (props: any) => <Highlighter {...props} {...highlighterProps} />,
    [highlighterProps],
  );
  const pre = useCallback(
    ({ node, ...props }: any) => <pre data-id={id} {...props} />,
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
      {...props}
    >
      {children}
    </MD>
  );
});
