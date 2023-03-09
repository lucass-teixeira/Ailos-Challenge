import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { MessagesComponent } from './components/messages/messages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [InputComponent, ButtonComponent, MessagesComponent, BreadcrumbComponent, CardComponent, CardComponent, SideNavComponent],
  imports: [FontAwesomeModule, CommonModule, FormsModule, RouterModule],
  exports: [InputComponent, ButtonComponent, MessagesComponent, CardComponent, SideNavComponent]
})
export class SharedModule { }