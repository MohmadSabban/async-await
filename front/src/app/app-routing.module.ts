import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";
import { ConfirmComponent } from "./pages/confirm/confirm.component";
import { FlexComponent } from "./pages/flex/flex.component";
import { HttpComponent } from "./pages/http/http.component";

const routes: Routes = [
  { path: "notes", component: SavepdfComponent },
  { path: "getnotes", component: GetnotesComponent },
  { path: "confirm", component: ConfirmComponent },
  { path: "flex", component: FlexComponent },
  { path: "http", component: HttpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
