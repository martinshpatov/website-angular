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
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopheadlinesComponent,
    FooterComponent,
    TechnewsComponent,
    BusinessComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule,
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
