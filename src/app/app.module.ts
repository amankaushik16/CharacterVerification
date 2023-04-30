import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerificationComponentsComponent } from './verification-components/verification-components.component';
import { FAQComponent } from './verification-components/faq/faq.component';
import { FormComponent } from './verification-components/form/form.component';
import { HomeComponent } from './verification-components/home/home.component';
// import { NextComponent } from './verification-components/next/next.component';


@NgModule({
  declarations: [
    AppComponent,
    VerificationComponentsComponent,
    FAQComponent,
    FormComponent,
    HomeComponent,
    // NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
