import log from "loglevel";

const ERROR_NAME = "ActivityError";

export class ActivityError extends Error {
  constructor(message: string) {
    log.error(`${ERROR_NAME} - ${message}`);
    super(message);
    this.name = ERROR_NAME;
  }
}
