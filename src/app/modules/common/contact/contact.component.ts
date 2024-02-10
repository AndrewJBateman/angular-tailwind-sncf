import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './models/user';
import { GithubService } from './services/github.service';
import { AsyncPipe, SlicePipe, DatePipe } from '@angular/common';

const USERNAME = 'andrewjbateman';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    standalone: true,
    imports: [
    AsyncPipe,
    SlicePipe,
    DatePipe
],
})
export class ContactComponent implements OnInit {
  user$: Observable<User>;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.user$ = this.githubService.getUser(USERNAME).pipe(
      catchError(error => {
        // Handle the error here
        return throwError(error);
      })
    );
  }
}
