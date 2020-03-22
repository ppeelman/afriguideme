// EXTERNAL
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//
// INTERNAL
import "./index.css";
import App from "./App";
import I18nWrapper from "./components/i18n/I18nWrapper.component";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <I18nWrapper>
      <App />
    </I18nWrapper>
  </Provider>,
  document.getElementById("root")
);
