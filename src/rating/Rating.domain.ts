class Rating {
  public stars: number;

  constructor(numberOfStars: number) {
    this._checkValid(numberOfStars);
    this.stars = numberOfStars;
  }

  private _checkValid(numberOfStars: number): never | void {
    const isNotInteger: boolean = numberOfStars % 1 !== 0;
    const isNegative: boolean = numberOfStars < 0;
    const isHigherThanFive: boolean = numberOfStars > 5;

    if (isNotInteger || isNegative || isHigherThanFive) {
      throw Error(
        `[Rating.domain] - _checkValid: Invalid rating of ${numberOfStars}.\
         Rating should be a positive integer equal or below 5`
      );
    }
  }
}

export default Rating;
