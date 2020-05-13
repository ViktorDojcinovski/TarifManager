import { Injectable, ErrorHandler } from "@angular/core";

import { TarifTrackerError } from "../../models/tarifTrackerError.model";

@Injectable()
export class TarifTrackerErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    let customError: TarifTrackerError;
    customError.errorCode = "4xx";
    customError.message = (<Error>error).message;
    customError.friendlyMessage = "An network error occured. Please try again.";
  }
}
