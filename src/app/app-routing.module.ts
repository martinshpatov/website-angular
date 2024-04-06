import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import {ContactUsComponent} from './contact-us/contact-us.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './partners/partners.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormDetailsComponent } from './authentication/form-details/form-details.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path: '', component:FormDetailsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'news', component: TopheadlinesComponent },
  {path:'contact', component:ContactUsComponent},
  {path:'about', component:AboutUsComponent},
  {path:'faq', component:FaqComponent},
  {path:'partners', component:PartnersComponent},
  {path:'technews', component:TechnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
