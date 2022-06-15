import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./modules/common/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/application/station-list/station-list.module").then(
        mod => mod.StationListModule,
      ),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/common/about/about.module").then(
        mod => mod.AboutModule,
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/common/contact/contact.module").then(
        mod => mod.ContactModule,
      ),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
