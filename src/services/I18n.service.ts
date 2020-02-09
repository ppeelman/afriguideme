// EXTERNAL
import { BehaviorSubject, Observable } from "rxjs";
//
// INTERNAL
import { i18nConfig } from "../config/i18n.config";
import { Singleton } from "../utils/Singleton.util";
import { messages } from "../translations";
import { LocaleNotSupportedException } from "../exceptions/LocaleNotSupportedException";

const FALLBACK_LOCALE = 'nl';

class I18nService extends Singleton {

  private _$locale: BehaviorSubject<string> = new BehaviorSubject<string>(i18nConfig.locale || FALLBACK_LOCALE);

  public get locale(): Observable<string> {
    return this._$locale.asObservable();
  }

  public setLocale(locale: string): void {
    if(this._isLocaleSupported(locale)) {
      this._$locale.next(locale);
    } else {
      throw new LocaleNotSupportedException(locale);
    }
  }

  private _isLocaleSupported(locale: string): boolean {
    return Object.keys(messages).includes(locale);
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
