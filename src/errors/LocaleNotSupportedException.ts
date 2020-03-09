export class LocaleNotSupportedException extends Error {
  constructor(locale: string) {
    const message =`${locale} is currently not supported, no translations available`;

    super(message);
    this.name = 'LocaleNotSupported';
  }
}
