import { AfterViewInit, Component, Input } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit {
  public map: any;
  markers: Array<any> = [];
  @Input() stations: any;

  private initMap(): void {
    console.log('map data: ', this.stations)
    this.map = L.map('map', {
      center: [47.0833, 2.4],
      zoom: 6,
    });

    const mapIcon = L.icon({
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map of Stations',
    }).addTo(this.map);
    // L.marker([48.8584, 2.294694], { icon: mapIcon }).addTo(this.map);
    // L.marker([this.station.stop_area.coord.lat, this.station.stop_area.coord.lon], { icon: mapIcon }).addTo(this.map);
  }

  constructor() {}


  ngAfterViewInit(): void {
    this.initMap();
  }
}
