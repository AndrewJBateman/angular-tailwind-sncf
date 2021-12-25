import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

const apiKey = environment.API_TOKEN;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  protected readonly rootUrl = "https://api.navitia.io/v1/";

  protected readonly headers = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*")
    .set("Authorization", apiKey);

  constructor(private httpClient: HttpClient) {}

  // fetch API data
  fetchAPIData(url: string): Observable<any> {
    return this.httpClient.get(url, { headers: this.headers });
  }
}
