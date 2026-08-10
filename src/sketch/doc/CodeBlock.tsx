import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: "tsx" | "ts" | "bash";
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <Highlight theme={themes.oneLight} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} overflow-x-auto rounded-xl p-4 text-[13px] leading-[1.6]`}
          style={{ ...style, background: "#FAFAFA", border: "1px solid rgba(61,43,80,0.1)" }}
        >
          {tokens.map((line, i) => {
            const { key: lineKey, ...lineProps } = getLineProps({ line });
            return (
              <div key={i} {...lineProps}>
                {line.map((token, tokenIndex) => {
                  const { key: tokenKey, ...tokenProps } = getTokenProps({ token });
                  return <span key={tokenIndex} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
