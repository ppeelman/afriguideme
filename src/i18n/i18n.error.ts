import log from "loglevel";

const ERROR_NAME = "I18nError";

export class I18nError extends Error {
  constructor(message: string) {
    log.error(`${ERROR_NAME} - ${message}`);
    super(message);
    this.name = ERROR_NAME;
  }
}

export class LocaleNotSupportedException extends I18nError {
  constructor(locale: string) {
    const message = `${locale} is currently not supported, no translations available`;
    super(message);
  }
}
