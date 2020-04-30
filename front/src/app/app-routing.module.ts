import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";

const routes: Routes = [
  { path: "notes", component: SavepdfComponent },
  { path: "getnotes", component: GetnotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
