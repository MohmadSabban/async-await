import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";
import { ConfirmComponent } from "./pages/confirm/confirm.component";

const routes: Routes = [
  { path: "notes", component: SavepdfComponent },
  { path: "getnotes", component: GetnotesComponent },
  { path: "confirm", component: ConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
