import { Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

import { environment } from "../../../environments/environment";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
})
export class NavComponent {
  name = environment.application.name;

  constructor(public translateService: TranslocoService) {}

  public onSetLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }
}
