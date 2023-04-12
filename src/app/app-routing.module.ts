import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./modules/common/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/application/station-list/station-list.module"),
  },
  {
    path: "about",
    loadChildren: () => import("./modules/common/about/about.module"),
  },
  {
    path: "contact",
    loadChildren: () => import("./modules/common/contact/contact.module"),
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
