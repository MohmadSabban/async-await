import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";
import { ConfirmComponent } from "./pages/confirm/confirm.component";
import { HttpComponent } from "./pages/http/http.component";
import { UsingForComponent } from "./pages/using-for/using-for.component";
import { QuadricComponent } from "./pages/quadric/quadric.component";
import { LearnOBComponent } from "./pages/learn-ob/learn-ob.component";
import { FlexComponent } from "./pages/flex/flex.component";
const routes: Routes = [
  { path: "", component: SavepdfComponent },
  {
    path: "flex",
    loadChildren: () =>
      import(`./module/css/css.module`).then((m) => m.CssModule),
    component: FlexComponent,
  },
  { path: "getnotes", component: GetnotesComponent },
  { path: "confirm", component: ConfirmComponent },
  { path: "http", component: HttpComponent },
  { path: "quadric", component: QuadricComponent },
  { path: "obser", component: LearnOBComponent },
  {
    path: "notes",
    loadChildren: () =>
      import("./module/customers/customers.module").then(
        (m) => m.CustomersModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
