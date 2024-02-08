import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { take, toArray } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { StationService } from "./services/station.service";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMarkerClusterModule } from "@asymmetrik/ngx-leaflet-markercluster";

import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MapComponent } from "./components/map/map.component";
import { StationDialogComponent } from "./components/station-dialog/station-dialog.component";


@Component({
    selector: "app-station-list",
    templateUrl: "./station-list.component.html",
    standalone: true,
    imports: [
    FormsModule,
    MapComponent,
    LeafletModule,
    LeafletMarkerClusterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    StationDialogComponent,
],
})
export class StationListComponent implements OnInit {
  name = environment.application.name;
  stations: any;
  latAverage: number = 0;
  lonAverage: number = 0;
  stationCount = 50;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {}

  // search for stations matching user search input
  // observable displayed in template using Angular async pipe
  onSubmitStationSearch(stationSearch: NgForm): void {
    if (this.stations) {
      this.stations = [];
    }
    let searchName = stationSearch.form.value.stationName
    if (searchName) {
      this.stationService
        .apiStationSearch(
          searchName,
          this.stationCount,
        )
        .pipe(take(this.stationCount), toArray())
        .subscribe(data => (this.stations = data[0].places));
    }
  }
}
