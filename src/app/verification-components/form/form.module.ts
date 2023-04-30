import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
// import { AppComponent } from './app.component';
// import { VerificationComponentsComponent } from './verification-components/verification-components.component';
// import { FAQComponent } from './verification-components/faq/faq.component';
// import { FormComponent } from './verification-components/form/form.component';
// import { HomeComponent } from './verification-components/home/home.component';
import { NextComponent } from './next/next.component';


@NgModule({
  declarations: [
    // AppComponent,
    // VerificationComponentsComponent,
    // FAQComponent,
    // FormComponent,
    // HomeComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    FormRoutingModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }