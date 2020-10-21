import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SavepdfComponent } from "./pages/savepdf/savepdf.component";
import { GetnotesComponent } from "./pages/getnotes/getnotes.component";
import { ConfirmComponent } from "./pages/confirm/confirm.component";
import { FlexComponent } from "./pages/flex/flex.component";
import { HttpComponent } from "./pages/http/http.component";
import { UsingForComponent } from "./pages/using-for/using-for.component";
import { QuadricComponent } from "./pages/quadric/quadric.component";
import { LearnOBComponent } from "./pages/learn-ob/learn-ob.component";
import { SearchPipePipe } from './pipe/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SavepdfComponent,
    GetnotesComponent,
    ConfirmComponent,
    FlexComponent,
    HttpComponent,
    UsingForComponent,
    QuadricComponent,
    LearnOBComponent,
    SearchPipePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
