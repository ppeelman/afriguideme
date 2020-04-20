import log from "loglevel";
import { IProps } from "./Activity.domain";

const ERROR_NAME = "ActivityError";

export class ActivityError extends Error {
  constructor(message: string) {
    log.error(`${ERROR_NAME} - ${message}`);
    super(message);
    this.name = ERROR_NAME;
  }
}

export class InvalidCreationArguments extends ActivityError {
  constructor(props: IProps) {
    super(`Invalid creation arguments: ${JSON.stringify(props)}`);
  }
}
