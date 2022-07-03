import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Route not found");

    // only because we are extending built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; filed?: string | undefined; }[] {
    return [{ message: "Route not found" }];
  }
}
