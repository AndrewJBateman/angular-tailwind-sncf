import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  stations: any;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.stationService.loadStationsLike('Toulouse', 5).subscribe((data) => {
      this.stations = data.places;
    });
  }
}
