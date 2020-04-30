import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from './pages/getnotes/getnotes.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

@NgModule({
  declarations: [AppComponent, SavepdfComponent, GetnotesComponent, ConfirmComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
