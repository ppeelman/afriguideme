import * as R from 'ramda';

// INTERNAL
import { Singleton } from "../utils/Singleton.util";
import { messages } from "./translations";
import { LocaleNotSupportedException } from "./i18n.error";
import store from "../store";
import { changeLocale } from "./i18n.store";

class I18nService extends Singleton {
  public setLocale(locale: string): void {
    if(this._isLocaleSupported(locale)) {
      store.dispatch<any>(changeLocale(locale))
    } else {
      throw new LocaleNotSupportedException(locale);
    }
  }

  private _isLocaleSupported(locale: string): boolean {
    return R.compose(R.includes(locale), R.keys)(messages)
  }

  /**
   * Returns the preferred language of the user, usually the language of the browser UI.
   * @return {string} language code, eg. en-US, nl-BE, es-ES...
   */
  public getUserPreferredLanguage(): string {
    return navigator.language;
  }
}

export default new I18nService();
