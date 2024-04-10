import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiService} from './service/newsapi.service';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TechnewsComponent } from './technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './partners/partners.component';
import { FormDetailsComponent } from './authentication/form-details/form-details.component';
import { LoginComponent } from './authentication/login/login.component';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopheadlinesComponent,
    FooterComponent,
    TechnewsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    PartnersComponent,
    FormDetailsComponent,
    LoginComponent,
    EditUnicornComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
