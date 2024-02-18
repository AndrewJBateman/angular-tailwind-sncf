/**
 * This code snippet is a TypeScript class called AppRoutingModule.
 * It is responsible for defining the routes of an Angular application using the RouterModule.
 * The routes are defined as an array of objects, where each object represents a route.
 * The path property specifies the URL path for the route, and the loadComponent property is a
 * function that dynamically imports the component for that route.
 * The RouterModule.forRoot() method is used to configure the routes with additional options such
 * as initialNavigation and preloadingStrategy.
 * Finally, the class is exported as a module so that it can be imported and used in other parts of
 * the application.
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

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
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
