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
import { AuthGuard } from './auth.guard';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

const routes: Routes = [
  {path: '', component:FormDetailsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'news', component: TopheadlinesComponent, canActivate: [AuthGuard]  },
  {path:'contact', component:ContactUsComponent,canActivate: [AuthGuard] },
  {path:'about', component:AboutUsComponent, canActivate: [AuthGuard] },
  {path:'faq', component:FaqComponent,canActivate: [AuthGuard] },
  {path:'partners', component:PartnersComponent,canActivate: [AuthGuard]},
  {path:'edit', component:EditUnicornComponent,canActivate: [AuthGuard] },
  {path:'technews', component:TechnewsComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
