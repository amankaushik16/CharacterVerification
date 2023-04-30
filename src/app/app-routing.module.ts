import { NgModule } from '@angular/core';
import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { FAQComponent} from '../app/verification-components/faq/faq.component';
// import { FAQComponent} from '../app/verification-components/faq/faq.component';
import {FormComponent } from '../app/verification-components/form/form.component';
import {HomeComponent } from '../app/verification-components/home/home.component';
// import {NextComponent } from '../app/verification-components/form/next/next.component';
const routes: Routes = [
  {path:'faq',component:FAQComponent},
  // {path:'app',component:FAQComponent},
  {path:'form',component:FormComponent},
  {path:'home',component:HomeComponent},
  // {path:'next',component:NextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
