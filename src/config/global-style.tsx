import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    background-color: #252628;
   
  }

  body {
    padding-bottom: 40px;
    color: #f7f8f8;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
  }
`;
