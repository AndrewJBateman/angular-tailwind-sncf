import { Component, Input, OnInit } from '@angular/core';
import { StationType } from 'src/app/interfaces/station.model';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html'
})
export class StationComponent implements OnInit {
  // @Input() station: Station;
  @Input() station: any;
  StationType = StationType;
  constructor() { }

  ngOnInit(): void {
  }

}
