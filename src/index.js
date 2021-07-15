import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  // Reset CSS

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
