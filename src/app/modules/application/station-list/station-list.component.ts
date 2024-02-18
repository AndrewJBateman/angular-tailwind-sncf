import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  SecurityContext,
} from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { take, toArray, catchError } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";

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
import { SncfResponse, Place } from "./models/sncf";

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
export class StationListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  name = environment.application.name;
  stations: Place[];
  latAverage: number = 0;
  lonAverage: number = 0;
  stationCount = 50;
  loading: boolean = false;
  sanitizedValue: string = "";

  constructor(
    private stationService: StationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {}

  // search for stations matching user search input
  // observable displayed in template using Angular async pipe
  onSubmitStationSearch(stationSearch: NgForm): void {
    if (this.stations) {
      this.stations = [];
    }
    let searchName = this.sanitizeInput(stationSearch.form.value.stationName);
    if (searchName) {
      this.loading = true; // Set loading state to true
      this.subscription = this.stationService
        .apiStationSearch(searchName, this.stationCount)
        .subscribe((data: SncfResponse[]) => (this.stations = data[0].places));
      this.loading = false; // Set loading state to false after data is fetched
    }
  }

  sanitizeInput(input: string): string {
    const sanitizedValue = this.sanitizer.sanitize(SecurityContext.HTML, input);
    return (this.sanitizedValue = sanitizedValue
      ? sanitizedValue.toString()
      : "");
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
