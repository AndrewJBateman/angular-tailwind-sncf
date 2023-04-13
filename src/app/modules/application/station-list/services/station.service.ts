import { take, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ApiService } from "./api.service";
import { ISncfResponse } from "../models/sncf";

@Injectable({
  providedIn: "root",
})
export class StationService extends ApiService {
  // API search for List of geographical objects within coverage fr-idf
  // fr-idf = Ile de France
  apiStationSearch(stationName: string, count: number): Observable<ISncfResponse> {
    const queryUrl =
      this.rootUrl +
      "coverage/fr-idf/places?q=" +
      stationName +
      "&count=" +
      count +
      "&type%5B%5D=stop_area&depth=3";
    const searchResults = this.fetchAPIData(queryUrl).pipe(
      take(1),
      catchError(err => {
        return throwError(() => err);
      }),
    );
    console.log("searchResults: ", searchResults.subscribe(x => console.log(x)));
    return searchResults;
  }
}
