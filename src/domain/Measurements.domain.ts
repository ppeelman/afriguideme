const EMPTY_VALUE = '---';

export abstract class Measurement<M> {
  abstract toValue(): string;
  abstract toSymbol(): string;

  abstract plus(other: M): M;
  abstract minus(other: M): M;
  abstract times(size: number): M;
  abstract div(size: number): M

  public format(): string {
    return `${this.toValue()} ${this.toSymbol()}`;
  }

  public static round(num: number, numOfDecimalPlaces: number = 2): string {
    return num.toFixed(numOfDecimalPlaces);
  }
}

export class Pct extends Measurement<Pct> {
  public constructor(public fraction: number) { super(); }

  public toValue = (): string => Measurement.round(this.fraction * 100, 2);
  public toSymbol = (): string => '%';

  public toString = (): string => (this.fraction ? this.format() : EMPTY_VALUE);

  plus = (other: Pct) => new Pct(this.fraction + other.fraction);
  minus = (other: Pct) => new Pct(this.fraction - other.fraction);
  times = (size: number) => new Pct(this.fraction * size);
  div = (size: number) => new Pct(this.fraction / size);
}


