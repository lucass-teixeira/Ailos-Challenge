import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { MessagesComponent } from './components/messages/messages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [InputComponent, ButtonComponent, MessagesComponent, BreadcrumbComponent],
  imports: [FontAwesomeModule, CommonModule],
  exports: [InputComponent, ButtonComponent, MessagesComponent]
})
export class SharedModule { }