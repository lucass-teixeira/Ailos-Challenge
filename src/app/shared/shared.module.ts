import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";

@NgModule({
    declarations: [InputComponent, ButtonComponent],
    imports: [CommonModule],
    exports: [InputComponent, ButtonComponent]
  })
  export class SharedModule { }