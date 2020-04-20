export class Currency {
  constructor(private _amount: number, private _currency: string = "EUR") {}

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  private _options(): Intl.NumberFormatOptions {
    return { style: "currency", currency: "EUR" };
  }

  public format(locale: string): string {
    const options: Intl.NumberFormatOptions = this._options();
    return new Intl.NumberFormat(locale, options).format(this._amount);
  }
}
