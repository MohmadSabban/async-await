import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";
import { ConfirmComponent } from "./pages/confirm/confirm.component";
import { FlexComponent } from "./pages/flex/flex.component";
import { HttpComponent } from "./pages/http/http.component";
import { UsingForComponent } from "./pages/using-for/using-for.component";
import { QuadricComponent } from "./pages/quadric/quadric.component";
import { LearnOBComponent } from "./pages/learn-ob/learn-ob.component";
const routes: Routes = [
  { path: "", component: SavepdfComponent },
  { path: "getnotes", component: GetnotesComponent },
  { path: "confirm", component: ConfirmComponent },
  { path: "flex", component: FlexComponent },
  { path: "http", component: HttpComponent },
  { path: "forloop", component: UsingForComponent },
  { path: "quadric", component: QuadricComponent },
  { path: "obser", component: LearnOBComponent },
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
