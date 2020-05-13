import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { Tarif } from "../models/tarif.model";
import { TarifTrackerError } from "../models/tarifTrackerError.model";

@Injectable()
export class TarifService {
  tarifsURL = "assets/tarifs.json";

  constructor(public http: HttpClient) {}

  getTarifs(): Observable<Tarif[] | TarifTrackerError> {
    return this.http.get<Tarif[]>(this.tarifsURL).pipe(
      tap((tarifs) => console.log(tarifs)),
      catchError((err) => this.handleHttpError(err))
    );
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<TarifTrackerError> {
    const dataError: TarifTrackerError = {
      errorCode: error.status.toString(),
      message: error.statusText,
      friendlyMessage: "An error occured.",
    };

    return throwError(dataError);
  }
}
