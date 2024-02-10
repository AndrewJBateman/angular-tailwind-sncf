import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./modules/common/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./modules/application/station-list/station-list.component").then(
        m => m.StationListComponent,
      ),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./modules/common/about/about.component").then(
        m => m.AboutComponent,
      ),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./modules/common/contact/contact.component").then(
        m => m.ContactComponent,
      ),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: "enabledBlocking" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
