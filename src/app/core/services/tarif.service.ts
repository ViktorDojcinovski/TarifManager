import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { ITarif } from "../../shared/models/tarif.model";
import { ITarifTrackingError } from "../../shared/models/tarifTrackerError.model";

@Injectable()
export class TarifService {
  tarifsURL = "assets/tarifs.json";

  constructor(public http: HttpClient) {}

  getTarifs(): Observable<ITarif[] | ITarifTrackingError> {
    return this.http.get<ITarif[]>(this.tarifsURL).pipe(
      tap(tarifs => console.log(tarifs)),
      catchError(err => this.handleHttpError(err))
    );
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<ITarifTrackingError> {
    const dataError: ITarifTrackingError = {
      message: error.statusText
    };

    return throwError(dataError);
  }
}
