import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { StationService } from './services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
})
export class StationListComponent implements OnInit {
  @ViewChild('form') form: NgForm | undefined;
  formSubmitted = false;
  name = environment.application.name;
  stations: any;

  // search items
  stationName = '';
  constructor(private stationService: StationService) {}

  ngOnInit(): void {}

  // search for stations matching user search input
  // observable displayed in template using Angular async pipe
  onSubmitStationSearch(): void {
    if (this.stationName) {
      this.stations = this.stationService
        .apiStationSearch(this.stationName, 5)
        .pipe(
          tap((data) => console.log('data: ', data.places)),
          map((data) => data.places)
        );
    }
  }
}
