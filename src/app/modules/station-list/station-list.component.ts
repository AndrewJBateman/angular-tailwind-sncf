import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

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
  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.stationService.loadStationsLike('Toulouse', 5).subscribe((data) => {
      console.log('data.places', data.places);
    });
    this.stations = this.stationService
      .loadStationsLike('Toulouse', 5)
      .pipe(map((data) => data.places));
  }

  onSubmitForm(stationSearch: NgForm): void {
    this.onSearchData(stationSearch.value.search);
    this.formSubmitted = true;
  }

  onSearchData(postCode: string): void {
    // this.ratpService.getRatpData(postCode).subscribe((data: RatpResponse) => {
    //   this.ratpData = data.records;
    //   this.initialState = false;
    //   if (this.ratpData.length > 0) {
    //     this.dataToShow = true;
    //     this.postalCode = this.ratpData[0].fields.code_postal;
    //     this.ville = this.ratpData[0].fields.ville;
    //     this.dataLength = this.ratpData.length;
    //     this.date = this.ratpData[0].record_timestamp;
    //   } else {
    //     this.dataToShow = false;
    //   }
    // });
  }
}
