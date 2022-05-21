import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMarkerClusterModule } from "@asymmetrik/ngx-leaflet-markercluster";

import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { StationListComponent } from "./station-list.component";
import { StationListRoutingModule } from "./station-list-routing.module";
import { StationComponent } from "../station-list/station/station.component";

import { SvgBusModule } from "../../../shared/components/svg-bus/svg-bus-module";
import { MapComponent } from "./components/map/map.component";

@NgModule({
  declarations: [StationListComponent, StationComponent, MapComponent],
  imports: [
    CommonModule,
    StationListRoutingModule,
    SvgBusModule,
    FormsModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  exports: [StationListComponent, StationComponent, MapComponent, SvgBusModule],
})
export class StationListModule {}
