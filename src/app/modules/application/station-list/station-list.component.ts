import { Component, OnInit, ViewChild } from "@angular/core";

import { NgForm } from "@angular/forms";
import { take, toArray } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { StationService } from "./services/station.service";

@Component({
  selector: "app-station-list",
  templateUrl: "./station-list.component.html",
})
export class StationListComponent implements OnInit {
  @ViewChild("form") form: NgForm | undefined;
  formSubmitted = false;
  name = environment.application.name;
  stations: any;
  latAverage: number = 0;
  lonAverage: number = 0;
  stationCount = 50;

  // search items
  stationName = "";
  constructor(private stationService: StationService) {}

  ngOnInit(): void {}

  // search for stations matching user search input
  // observable displayed in template using Angular async pipe
  onSubmitStationSearch(): void {
    if (this.stations) {
      this.stations = [];
    }
    if (this.stationName) {
      this.stationService
        .apiStationSearch(this.stationName, this.stationCount)
        .pipe(take(this.stationCount), toArray())
        .subscribe(data => (this.stations = data[0].places));
    }
  }
}
