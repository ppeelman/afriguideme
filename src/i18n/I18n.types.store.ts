import { CHANGE_LOCALE } from "./I18n.store";

// State
export type Locale = string;

// Action creators
export interface ChangeLocaleAction {
  type: typeof CHANGE_LOCALE;
  locale: Locale;
}

export type I18nActionTypes = ChangeLocaleAction; // use TypeScript's Union Type to express all possible actions
