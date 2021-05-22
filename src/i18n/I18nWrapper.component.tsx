// EXTERNAL
import React, { FunctionComponent, ReactChild, ReactChildren } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
//
// INTERNAL
import { messages } from "./translations";
import { i18nConfig } from "./I18n.config";
import { RootState } from "../store";

interface Props {
  children: ReactChild | ReactChildren;
}

const I18nWrapper: FunctionComponent<Props> = ({ children }: Props) => {
  // Redux
  const locale: string = useSelector(({ locale }: RootState) => locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={i18nConfig.defaultLocale}>
      {children}
    </IntlProvider>
  );
};

export default I18nWrapper;
