import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { InputComponent } from './shared/components/input/input.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
