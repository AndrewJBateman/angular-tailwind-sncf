/**
 * StationService class.
 *
 * This class extends the ApiService class and provides a method for searching for a list
 * of geographical objects within the coverage of fr-idf (Ile de France).
 *
 * @param {string} stationName - The name of the station to search for.
 * @param {number} count - The number of search results to retrieve.
 * @returns {Observable<SncfResponse[]>} - An observable that emits an array of SncfResponse
 * objects.
 */
import { take, catchError, toArray, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ApiService } from "./api.service";
import { SncfResponse } from "../models/sncf";

@Injectable({
  providedIn: "root",
})
export class StationService extends ApiService {
  // API search for List of geographical objects within coverage fr-idf
  // fr-idf = Ile de France
  apiStationSearch(stationName: string, count: number): Observable<SncfResponse[]> {
    const queryUrl =
      this.rootUrl +
      "coverage/fr-idf/places?q=" +
      stationName +
      "&count=" +
      count +
      "&type%5B%5D=stop_area&depth=3";
    const searchResults = this.fetchAPIData(queryUrl).pipe(
      take(count),
      toArray(),
      catchError(err => {
        return throwError(() => err);
      }),
    );
    return searchResults;
  }
}
