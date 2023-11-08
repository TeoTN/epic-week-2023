import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeComponentProps = JSX.IntrinsicElements["code"] &
  ReactMarkdownProps & {
    inline?: boolean;
  };
interface Props extends Omit<CodeComponentProps, "ref"> {
  codeTagProps?: any;
}

export const RichCode = ({
  node,
  inline,
  className,
  children,
  codeTagProps,
  style,
  ...props
}: Props) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      codeTagProps={codeTagProps}
      children={String(children).replace(/\n$/, "")}
      style={{ ...atomDark, ...style }}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
