import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StationService extends ApiService {
  // API search for stations that match stationName
  apiStationSearch(stationName: string, count: number): Observable<any> {
    const queryUrl =
      this.rootUrl +
      'coverage/fr-idf/places?q=' +
      stationName +
      '&count=' +
      count +
      '&type%5B%5D=stop_area&depth=3';
    return this.fetchAPIData(queryUrl);
  }
}
