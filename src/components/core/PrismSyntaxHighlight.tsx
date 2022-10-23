import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const PrismSyntaxHighlight = ({ children, className }: any) => {
  const language = className.replace(/language-/gm, '');

  return (
    <Highlight
      {...defaultProps}
      theme={ theme }
      code={ children }
      language={ language }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <div
          className={className}
          style={ style }
          sx={{
            p: '24px',
            fontSize: 1,
            borderRadius: 2,
            overflowX: 'auto',
            overflowY: 'hidden'
          }}
        >
          {
            tokens.slice(0, -1).map((line: any, i: number) => (
              <div {...getLineProps({ line, key: i })}>
                {
                  line.map((token: any, key: number) => (
                    <span {...getTokenProps({ token, key })} />
                  ))
                }
              </div>
            ))
          }
        </div>
      )}
    </Highlight>
  );
};

export default  PrismSyntaxHighlight;
