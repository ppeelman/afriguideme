import React, { FunctionComponent, ReactChild, ReactChildren } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";

import { messages } from "./translations";
import { i18nConfig } from "./I18n.config";
import { Store } from "../store";

interface I18nWrapperProps {
  children: ReactChild | ReactChildren;
  locale: string; // from Redux store
}

const I18nWrapper: FunctionComponent<I18nWrapperProps> = (props: I18nWrapperProps) => {
  const { locale } = props;

  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={i18nConfig.defaultLocale}>
      {props.children}
    </IntlProvider>
  );
};

const mapStateToProps = (store: Store) => ({
  locale: store.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(I18nWrapper);
