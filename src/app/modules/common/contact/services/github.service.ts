/**
 * This is a TypeScript class called GithubService.
 * It is an Angular service that handles HTTP requests to the GitHub API.
 * The class has a constructor that injects the HttpClient dependency.
 * It also has a method called getUser, which takes a user parameter of type string and returns an Observable of type User.
 * The method first checks if the user parameter is valid, and then constructs the URL for the GitHub API request.
 * It then makes an HTTP GET request to the API using the HttpClient service.
 * If an error occurs during the request, the method catches the error and throws a new error with a custom error message.
 * The method returns the response from the API as an Observable.
 * The class is decorated with the @Injectable decorator, indicating that it can be injected as a dependency.
 * The decorator also specifies that the service should be provided at the root level.
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { User } from "../models/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    if (!user || user.trim() === "") {
      throw new Error("Invalid user parameter");
    }
    const githubUrl = environment.GITHUB_BASE_URL;
    const userSearchUrl = `${githubUrl}${user}`;
    return this.http.get<User>(userSearchUrl).pipe(
      catchError(err => {
        const errorMessage = `Error occurred while fetching user: ${err.message}`;
        return throwError(() => errorMessage);
      }),
    );
  }
}
