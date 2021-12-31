import { AfterViewInit, Component } from '@angular/core';

import * as L from 'leaflet';
import { Icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit {
  public map: any;
  markers: Array<any> = [];

  private initMap(): void {
    this.map = L.map('map', {
      center: [47.0833, 2.4],
      zoom: 6,
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map of Stations',
    }).addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
