import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  const Css = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;

  return <Global styles={Css} />;
};
