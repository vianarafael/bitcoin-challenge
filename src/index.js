import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family:  sans-serif;
    background-color: #f1f7fc;
    padding: 12px 50px 8px;
  }

`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
