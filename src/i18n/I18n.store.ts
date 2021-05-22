import { i18nConfig } from "./I18n.config";
import { ChangeLocaleAction, I18nActionTypes, Locale } from "./I18n.types.store";

/*
 =========================================================

 The structure of this file is inspired by the "ducks" pattern:
 https://github.com/erikras/ducks-modular-redux

 RULES:
    A module...

 1) MUST export default a function called reducer()
 2) MUST export its action creators as functions
 3) MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
 4) MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

 --------------

 The use of TypeScript with Redux is also based on the redux.js.org documentation:
 https://redux.js.org/recipes/usage-with-typescript

 =========================================================
*/

// Actions
export const CHANGE_LOCALE = "afriguideme/i18n/CHANGE_LOCALE";

const FALLBACK_LOCALE: Locale = "nl";
const INITIAL_STATE: Locale = i18nConfig.locale || FALLBACK_LOCALE;

// Reducer(s)
const reducer = (state: Locale = INITIAL_STATE, action: I18nActionTypes): Locale => {
  switch (action.type) {
    case CHANGE_LOCALE: {
      return (action as ChangeLocaleAction).locale;
    }

    default: {
      return state;
    }
  }
};

export default reducer;

// Action creator(s)
export const changeLocale = (locale: string): ChangeLocaleAction => ({
  type: CHANGE_LOCALE,
  locale
});
