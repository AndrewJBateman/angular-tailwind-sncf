import { Component, OnInit, inject } from "@angular/core";
import { TranslocoService, TranslocoModule } from "@ngneat/transloco";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatMenuTrigger, MatMenu, MatMenuItem } from "@angular/material/menu";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  standalone: true,
  imports: [
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    RouterLink,
    RouterLinkActive,
    TranslocoModule,
  ],
})
export class DropdownComponent implements OnInit {
  public translateService = inject(TranslocoService);
  public aboutRoute = "/about";
  public contactRoute = "/contact";

  public onSetLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }
}
