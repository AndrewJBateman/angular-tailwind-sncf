/**
 * Represents the NavComponent class.
 *
 * This component is responsible for rendering the navigation bar of the application.
 * It imports necessary modules and components, such as TranslocoService, TranslocoModule,
 * DropdownComponent, RouterLink, and RouterLinkActive.
 * The component has a translateService property which is injected with the TranslocoService.
 * It also has a name property which holds the application name from the environment.
 * The onSetLanguage method is used to set the active language for translation using the
 * translateService.
 */
import { Component, inject } from "@angular/core";
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
  public translateService = inject(TranslocoService);
  name = environment.application.name;
  public sncfImagePath = "../../../../assets/svgs/sncf.svg";

  public onSetLanguage(lang: string): void {
    this.translateService.setActiveLang(lang);
  }
}
