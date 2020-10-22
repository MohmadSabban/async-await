import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers.component";
import { SavepdfComponent } from "../../pages/savepdf/savepdf.component";

import { GetnotesComponent } from "../../pages/getnotes/getnotes.component";
const routes: Routes = [
  { path: "", component: SavepdfComponent },
  { path: "getnotes", component: GetnotesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
