import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { SavepdfComponent } from "../../pages/savepdf/savepdf.component";

import { GetnotesComponent } from "../../pages/getnotes/getnotes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [CustomersComponent, SavepdfComponent, GetnotesComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CustomersModule {}
