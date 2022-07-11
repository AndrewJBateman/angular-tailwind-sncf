import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html"
})
export class DropdownComponent implements OnInit {
  constructor(public translateService: TranslocoService) {}

  ngOnInit(): void {}

  public onSetLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }
}
