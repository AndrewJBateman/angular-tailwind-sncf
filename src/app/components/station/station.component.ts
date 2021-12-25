import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  // @Input() station: Station;
  @Input() station: any;

  constructor() { }

  ngOnInit(): void {
  }

}
