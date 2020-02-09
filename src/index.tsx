// EXTERNAL
import React from "react";
import ReactDOM from "react-dom";
//
// INTERNAL
import "./index.css";
import App from "./App";
import { I18nWrapper } from "./components/i18n/I18nWrapper.component";

ReactDOM.render(
  <I18nWrapper>
    <App />
  </I18nWrapper>,
  document.getElementById("root")
);
