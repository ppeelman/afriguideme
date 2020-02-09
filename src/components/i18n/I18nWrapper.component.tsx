// EXTERNAL
import React, { FunctionComponent, ReactChild, ReactChildren } from "react";
import { IntlProvider } from "react-intl";
//
// INTERNAL
import { useObservable } from "../../utils/useObservable.util";
import I18nService from "../../services/I18n.service";
import { messages } from "../../translations";
import { i18nConfig } from "../../config/i18n.config";

interface I18nWrapperProps {
  children: ReactChild | ReactChildren
}

export const I18nWrapper: FunctionComponent<I18nWrapperProps> = (
  props: I18nWrapperProps
) => {
  const locale: string = useObservable<string>(I18nService.locale);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={i18nConfig.defaultLocale}
    >
      {props.children}
    </IntlProvider>
  );
};
