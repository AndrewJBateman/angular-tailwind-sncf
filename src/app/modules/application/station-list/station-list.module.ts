import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMarkerClusterModule } from "@asymmetrik/ngx-leaflet-markercluster";

import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { StationListComponent } from "./station-list.component";
import { StationListRoutingModule } from "./station-list-routing.module";


import { MapComponent } from "./components/map/map.component";
import { StationDialogComponent } from "./components/station-dialog/station-dialog.component";

@NgModule({
    imports: [
    CommonModule,
    StationListRoutingModule,
    FormsModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    StationListComponent, MapComponent, StationDialogComponent,
],
    exports: [StationListComponent, MapComponent],
})
export default class StationListModule {}
