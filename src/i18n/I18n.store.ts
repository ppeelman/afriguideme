import { StoreAction } from "../store";
import { i18nConfig } from "./I18n.config";

const CHANGE_LOCALE = "CHANGE_LOCALE";

const FALLBACK_LOCALE = "nl";
const INITIAL_STATE = i18nConfig.locale || FALLBACK_LOCALE;

export const I18nReducer = (
  state = INITIAL_STATE,
  action: StoreAction<string>
): string => {
  switch (action.type) {
    case CHANGE_LOCALE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export const changeLocale = (locale: string) => (dispatch: any) => {
  dispatch({
    type: CHANGE_LOCALE,
    payload: locale
  });
};
