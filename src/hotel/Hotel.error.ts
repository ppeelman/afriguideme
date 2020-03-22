import log from "loglevel";
import { HotelConstructorProps } from "./Hotel.domain";

const ERROR_NAME = "HotelError";

export class HotelError extends Error {
  constructor(message: string) {
    log.error(`${ERROR_NAME} - ${message}`);
    super(message);
    this.name = ERROR_NAME;
  }
}

export class InvalidCreationArguments extends HotelError {
  constructor(props: HotelConstructorProps) {
    super(`Invalid creation arguments: ${JSON.stringify(props)}`);
  }
}
