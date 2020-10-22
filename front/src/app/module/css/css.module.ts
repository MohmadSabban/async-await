import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexComponent } from "../../pages/flex/flex.component";
import { UsingForComponent } from "../../pages/using-for/using-for.component";

@NgModule({
  declarations: [FlexComponent, UsingForComponent],
  imports: [CommonModule],
  exports: [FlexComponent, UsingForComponent],
})
export class CssModule {
  constructor() {
    console.log("css");
  }
}
