import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StationService extends ApiService {

  // constructor() { }


  // API search like stationName
  loadStationsLike(stationName: string, count: number): Observable<any> {
    console.log('rooturl: ', this.rootUrl);
    const queryUrl = this.rootUrl +
    "coverage/fr-idf/places?q=" +
    stationName +
    "&count=" +
    count +
    "&type%5B%5D=stop_area&depth=3";
    console.log('url: ',queryUrl);
    return this.fetchAPIData(
      this.rootUrl +
        "coverage/fr-idf/places?q=" +
        stationName +
        "&count=" +
        count +
        "&type%5B%5D=stop_area&depth=3"
    );
  }
}
