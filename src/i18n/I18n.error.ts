import log from "loglevel";

const ERROR_NAME = "I18nError";

export class LocaleNotSupportedException extends Error {
  constructor(locale: string) {
    const message = `${ERROR_NAME} - ${locale} is currently not supported, no translations available`;
    log.error(`${ERROR_NAME} - ${message}`);
    super(message);
  }
}
