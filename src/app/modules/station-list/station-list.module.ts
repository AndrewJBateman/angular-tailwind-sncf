import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StationListComponent } from './station-list.component';
import { StationListRoutingModule } from './station-list-routing.module';
import { StationComponent } from '../station-list/station/station.component';

import { SvgBusModule } from '../../shared/components/svg-bus/svg-bus-module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [StationListComponent, StationComponent, MapComponent],
  imports: [CommonModule, StationListRoutingModule, SvgBusModule, FormsModule],
  exports: [StationListComponent, StationComponent, MapComponent, SvgBusModule],
})
export class StationListModule {}
