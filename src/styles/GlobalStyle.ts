import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p img {
    width: 400px;
    height: 400px;
  }

  pre {
    background-color: #F3F4F6;
  }

  h2 {
  scroll-margin-top: 110px;
 }

 section {
  scroll-margin-top: 110px;
 }
`;
