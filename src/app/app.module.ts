import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./shared/nav/nav.component";
import { NotFoundComponent } from "./modules/common/not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslocoRootModule } from "./transloco-root.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownComponent } from "./shared/nav/dropdown/dropdown.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
