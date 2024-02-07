import { Component } from "@angular/core";
import { TranslocoService, TranslocoModule } from "@ngneat/transloco";

import { environment } from "../../../environments/environment";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.component.html",
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        DropdownComponent,
        TranslocoModule,
    ],
})
export class NavComponent {
  name = environment.application.name;

  constructor(public translateService: TranslocoService) {}

  public onSetLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }
}
