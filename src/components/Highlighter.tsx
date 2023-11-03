import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { withErrorBoundary } from './visual-runtime/error-boundary';

type CodeComponentProps = JSX.IntrinsicElements['code'] &
  ReactMarkdownProps & {
    inline?: boolean;
  };

// type SyntaxHighlighterProps = ComponentProps<typeof SyntaxHighlighter>
interface Props
  extends Omit<CodeComponentProps, 'ref' | 'style'>,
    SyntaxHighlighterProps {
  codeTagProps?: any;
}

export const Highlighter = withErrorBoundary({scope:'highlighter'})(({
  node,
  inline,
  className,
  children,
  codeTagProps,
  style,
  ...props
}: Props) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      codeTagProps={codeTagProps}
      children={String(children).replace(/\n$/, '')}
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
});
